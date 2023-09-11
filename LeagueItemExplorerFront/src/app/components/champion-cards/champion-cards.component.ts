import { Component, inject } from '@angular/core';
import { ChampionService } from 'src/app/services/champion.service';

@Component({
  selector: 'app-champion-cards',
  templateUrl: './champion-cards.component.html',
  styleUrls: ['./champion-cards.component.css']
})
export class ChampionCardsComponent {
  championService = inject(ChampionService)
  tags!: Set<string>;


  loadTags() {
    this.championService.getAllTags().subscribe(
      {
        next: (data) => {
          this.tags = data;
        }
      }

    )
  }
  ngOnInit() {
    this.loadTags();
  }
}
