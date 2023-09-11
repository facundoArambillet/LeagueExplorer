import { Component, Input, inject } from '@angular/core';
import { ChampionData } from 'src/app/models/champion-data';
import { ChampionService } from 'src/app/services/champion.service';

@Component({
  selector: 'app-champion-card-section',
  templateUrl: './champion-card-section.component.html',
  styleUrls: ['./champion-card-section.component.css']
})
export class ChampionCardSectionComponent {
  championService = inject(ChampionService);
  @Input() tag!: String;
  champions : ChampionData[] = [];
  image : String = "";

  loadChampionsByTag() {
    this.championService.getByTag(this.tag).subscribe(
      {
        next: (data: ChampionData[]) => {
          this.champions = data;
        }
      }

    )
  }

  ngOnInit() {
    this.loadChampionsByTag();
  }
}
