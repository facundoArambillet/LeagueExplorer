import { Component, inject } from '@angular/core';
import { ItemDataService } from 'src/app/services/item-data.service';

@Component({
  selector: 'app-item-cards',
  templateUrl: './item-cards.component.html',
  styleUrls: ['./item-cards.component.css']
})
export class ItemCardsComponent {
  itemDataService = inject(ItemDataService)
  tags: String[] = [];


  loadTrees() {
    this.itemDataService.getAllTags().subscribe(
      {
        next: (data) => {
          this.tags = data;
        }
      }

    )

  }
  ngOnInit() {
    this.loadTrees();
  }

}
