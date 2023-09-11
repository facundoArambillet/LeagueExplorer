import { Component, Inject, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemData } from 'src/app/models/item-data';
import { ItemDataService } from 'src/app/services/item-data.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private itemDataService = inject(ItemDataService);
  private baseUrl: string = "https://ddragon.leagueoflegends.com/cdn/13.16.1/img/item/";
  itemDetail !: ItemData
  itemID: string = "";
  itemName: string = "";
  itemImage: string = "";
  itemDescription: string = "";
  itemStats: string[] = [];
  itemPassive: string = "";
  dataLoaded = false;

  loadItem() {
    this.route.params.subscribe(params => {
      this.itemName = params['name'];
    });
    this.itemDataService.getByName(this.itemName).subscribe(
      {
        next: (data) => {
          //Como el service me devuelve un Map<string,ItemData>, separo la key(string) del value(ItemData)
          this.itemDetail = Object.values(data)[0];
          this.itemID = Object.keys(data)[0];
          this.itemImage = this.baseUrl + this.itemDetail.image.full;
          this.dataLoaded = true;
          this.loadInfoItem();
          console.log(this.itemDetail)
        },
        error: () => {
          this.router.navigate(["/error"])
        }
      }

    )
  }

  loadInfoItem() {
    //Expresion regular para encontrar todas las etiquetas
    const regex = /\s*<[^>]+>\s*/g;

    //Expresion regular para agarrar el contenido despues de la primera etiqueta <passive>
    const passiveRegex = /<passive>.*/s;
    //Expresion regular para agarrar el contenido despues de la primera etiqueta <active>
    const activeRegex = /<active>.*/s;
    const passiveMatches = this.itemDetail.description.match(passiveRegex);
    const activeMatches = this.itemDetail.description.match(activeRegex);

    const statsWithoutPlaceholders = this.itemDetail.description.replace(regex, " ");
    this.itemDescription = statsWithoutPlaceholders.trim();

    if (activeMatches && passiveMatches) {
      if (passiveMatches.index !== undefined && activeMatches.index !== undefined) {
        if (passiveMatches.index < activeMatches.index) {
          this.processPassiveMatches(passiveMatches, regex);
        } else {
          this.processActiveMatches(activeMatches, regex);
        }
      }
    } else if (activeMatches) {
      this.processActiveMatches(activeMatches, regex);
    } else if (passiveMatches) {
      this.processPassiveMatches(passiveMatches, regex);
    } else {
      this.processNoMatches();
    }

  }

  processActiveMatches(activeMatches: RegExpMatchArray, regex: RegExp) {
    this.itemPassive = activeMatches[0].replace(regex, "");

    const descriptionWithoutActive = this.itemDescription.replaceAll(" ", "").replace(this.itemPassive.replaceAll(" ", ""), "");

    this.separateStats(descriptionWithoutActive)

    const descriptionWithSpaces = descriptionWithoutActive.replace(/(\d+[%]?)/g, " $1 ");
    const formattedDescription = descriptionWithSpaces.replace(/([a-z])([A-Z])/g, "$1 $2").trim();
    this.itemDescription = formattedDescription;

    //Expresion regular para separar los doble puntos(:) de las palabras
    const activeWithSpaces = this.itemPassive.replace(/(\d+[%]?|[^A-Za-z\d\s])/g, " $1 ");
    const formattedActive = activeWithSpaces.replace(/([a-z])([A-Z])/g, "$1 $2").trim();
    this.itemPassive = formattedActive;
    // return { itemPassive, descriptionWithoutActive };
  }

  processPassiveMatches(passiveMatches: RegExpMatchArray, regex: RegExp) {
    this.itemPassive = passiveMatches[0].replace(regex, "");

    //Expresion regular que elimina los espacios que me permite eliminar la pasiva de la descripcion
    const descriptionWithoutPassive = this.itemDescription.replaceAll(" ", "").replace(this.itemPassive.replaceAll(" ", ""), "");
    this.separateStats(descriptionWithoutPassive)

    //Expresion regular para separar los numeros(y porcentaje) de las palabras(EJ: 65AbilityPower25AbilityHaste RESULT: 65 AbilityPower 25 AbilityHaste)
    //(\d+) Agarra la coincidencia con 1 o mas numeros, la parte " $1 " agrega un espacio adelante y uno detras de dicho numero($1 representa el numero agarrado)
    const descriptionWithSpaces = descriptionWithoutPassive.replace(/(\d+[%]?)/g, " $1 ");

    //Expresion regular para separar las palabras por mayusculas(EJ: AbilityPower RESULT: Ability Power)
    const formattedDescription = descriptionWithSpaces.replace(/([a-z])([A-Z])/g, "$1 $2").trim();

    this.itemDescription = formattedDescription;
    //Expresion regular para separar los doble puntos(:) de las palabras
    const passiveWithSpaces = this.itemPassive.replace(/(\d+[%]?|[^A-Za-z\d\s])/g, " $1 ");
    //Expresion regular para separar las palabras por mayusculas(EJ: ObtainedGlorystacks RESULT: Obtained Glorystacks)
    const formattedPassive = passiveWithSpaces.replace(/([a-z])([A-Z])/g, "$1 $2").trim();
    this.itemPassive = formattedPassive;
  }

  processNoMatches() {
    this.separateStats(this.itemDescription.replaceAll(" ", ""));
    //Lo pongo para no borrar la card donde se muestran las pasivas(Se puede eliminar sin problemas pero me gusta esteticamente)
    this.itemPassive = "This item does not have passive";
  }

  separateStats(stats: string) {
    //Expresion regular que separa las stats en un array para utilizarla en el div de stats 
    const descriptionSeparatedByStats = stats.split(/(\d+\s*[%a-zA-Z]+)/).filter(item => item !== '');

    for (let stat of descriptionSeparatedByStats) {
      const statsSeparatedNumbers = stat.replace(/(\d+[%]?)/g, "$1 ");
      const statsSeparatedWords = statsSeparatedNumbers.replace(/([a-z])([A-Z])/g, "$1 $2").trim()
      this.itemStats.push(statsSeparatedWords)
    }
  }

  ngOnInit(): void {
    this.loadItem();
  }
}
