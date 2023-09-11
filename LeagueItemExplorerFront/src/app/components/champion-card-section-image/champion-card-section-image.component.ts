import { Component, Input } from '@angular/core';
import { ChampionData } from 'src/app/models/champion-data';

@Component({
  selector: 'app-champion-card-section-image',
  templateUrl: './champion-card-section-image.component.html',
  styleUrls: ['./champion-card-section-image.component.css']
})
export class ChampionCardSectionImageComponent {
  @Input() champion!: ChampionData
  image: string = "";
  name: string = "";
  nameWithoutSpaces = "";
  //private baseUrl: string = "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/";
  private baseUrl: string = "https://static.bigbrain.gg/assets/lol/riot_static/13.16.1/img/champion/";

  loadNameWithoutSpaces(name: string) {
    //Tuve que establecer estos valores manualmente porque no tengo manera de hacerlo con Regex
    if(name.includes("Nunu")) {
      this.nameWithoutSpaces = "Nunu";
    }else if(name.includes("Bel'Veth")) {
      this.nameWithoutSpaces = "Belveth";
    }else {
      this.nameWithoutSpaces = this.name.replace(/[^a-zA-Z\s]/g, "").replaceAll(" ", "");
    }
  }
  ngOnInit() {
    this.name = this.champion.name;
    this.image = this.baseUrl + this.champion.image.full;
    this.loadNameWithoutSpaces(this.name);  
  }
}
