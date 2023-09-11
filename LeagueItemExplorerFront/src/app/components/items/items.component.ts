import { Component, inject } from '@angular/core';
import { ItemData } from 'src/app/models/item-data';
import { ItemDataService } from 'src/app/services/item-data.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  itemDataService = inject(ItemDataService)
  items: Map<string, ItemData> = new Map<string, ItemData>();


  loadItems() {
    this.itemDataService.getAll().subscribe(
      (data) => {
        this.items = data;
      }
    )
  }

  ngOnInit() {
    this.loadItems();
  }
}
