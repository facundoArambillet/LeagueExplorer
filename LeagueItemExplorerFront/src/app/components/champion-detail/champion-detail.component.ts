import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChampionDataExtended } from 'src/app/models/champion-data-extended';
import { ChampionPassive } from 'src/app/models/champion-passive';
import { ChampionSpell } from 'src/app/models/champion-spell';
import { ChampionService } from 'src/app/services/champion.service';

@Component({
  selector: 'app-champion-detail',
  templateUrl: './champion-detail.component.html',
  styleUrls: ['./champion-detail.component.css']
})
export class ChampionDetailComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private championService = inject(ChampionService);
  private baseUrl: string = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/";
  private imgTagUrl: string = "https://cdn.lolrift.com/images/assets/role-icon-"; //fighter.png
  private imgPassiveUrl: string = "https://ddragon.leagueoflegends.com/cdn/13.16.1/img/passive/";
  private imgSpellUrl: string = "https://ddragon.leagueoflegends.com/cdn/13.16.1/img/spell/";
  //Urls de imagenes para los Rp(riot points) y Be(Blue essence) pero no tengo la informacion de cuanto cuesta cada champion
  // private imgRpUrl: string = "https://cdn.lolrift.com/images/hud_stats/rpPoints.svg";
  // private imgBeUrl: string = "https://cdn.lolrift.com/images/hud_stats/be_icon.png";
  private videoUrl: string = "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/" // 0266/ability_0266_Q1.webm

  private abilitiesOrder: string[] = ["Q1", "W1", "E1", "R1"];
  public abilitiesOrderOnlyLetters = this.abilitiesOrder.map(item => item.replace(/(\d)/, ''));
  championDetail!: ChampionDataExtended;
  championName: string = "";
  championTitle: string = "";
  championID: string = ""
  championKey: string = "";
  championImage: string = "";
  championDescription: string = "";
  championStats: string[] = [];
  championPassive!: ChampionPassive;
  championImagePassive: String = "";
  championPassiveWithoutTags: string = "";
  championSpells: ChampionSpell[] = [];
  regex: RegExp = /([a-z])([A-Z])/g;
  championImageSpells: String[] = [];
  tagText: string = "";
  tagsImages: string[] = [];
  dataLoaded = false;


  loadChampion() {
    this.route.params.subscribe(params => {
      this.championName = params['champion'];
    });
    this.championService.getByName(this.championName).subscribe(
      {
        next: (data) => {
          //Como el service me devuelve un Map<string,ChampionDataExtended>, separo la key(string) del value(ChampionDataExtended)
          this.championDetail = Object.values(data)[0];
          this.championID = Object.keys(data)[0];
          //Le agrego el 0 para poder utilizar la variable en el src de los videos
          this.loadKey(this.championDetail.key);
          this.championImage = this.baseUrl + this.championName + "_0.jpg";
          this.championTitle = this.championDetail.title;
          this.loadTags(this.championDetail.tags);
          this.loadPassive(this.championDetail.passive);
          this.championSpells = this.championDetail.spells;
          this.dataLoaded = true;

        },
        error: () => {
          this.router.navigate(["/error"]);
        }
      }

    )
  }
  loadTagText(tags: string[]) {
    if (tags.length > 1) {
      let tagText = ""
      for (let tag of tags) {
        tagText += tag
      }
      //Separo las palabras por sus mayusculas y luego agrego la palabra "and" con un espacio adelante y otro atras
      this.tagText = tagText.replace(/([a-z])([A-Z])/g, "$1 $2").trim().replace(/\s/g, " and ");
      console.log(this.tagText);
    } else {
      this.tagText = tags[0];
    }
  }
  loadTagImages(tags: string[]) {
    for (let tag of tags) {
      let tagLower: string = tag.toLowerCase()
      let tagUrl = this.imgTagUrl + tagLower + ".png";
      this.tagsImages.push(tagUrl);
    }
  }
  loadTags(tags: string[]) {
    this.loadTagImages(tags);
    this.loadTagText(tags);
  }
  loadKey(key: string) {
    if (key.length >= 3) {
      this.championKey = "0" + key;
    } else if (key.length > 1 && key.length < 3) {
      this.championKey = "00" + key;
    } else if (key.length == 1) {
      this.championKey = "000" + key;
    }
  }
  loadPassive(passive: ChampionPassive) {
    this.championPassive = passive;
    this.championImagePassive = this.imgPassiveUrl + passive.image.full;
    this.championPassiveWithoutTags = passive.description.replace(/\s*<[^>]+>\s*/g, "");
  }
  loadVideoPassive() {
    const videoUrl = this.videoUrl + `${this.championKey}/ability_${this.championKey}_P1.webm`;
    return videoUrl;
  }
  loadImageSpell(spell: ChampionSpell) {
    const imgUrl = this.imgSpellUrl + spell.image.full;
    return imgUrl;
  }
  loadVideoSpells(id: number) {
    let videoUrl = this.videoUrl + `${this.championKey}/ability_${this.championKey}_${this.abilitiesOrder[id]}.webm`;
    return videoUrl;
  }
  splitSpellId(id: string): string {
    const parts = id.replace(/([a-z])([A-Z])/g, "$1 $2") // Divide por mayúsculas
    return parts;
  }
  ngOnInit() {
    this.loadChampion();
  }
}
