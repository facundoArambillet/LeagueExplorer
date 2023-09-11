import { Component, Input, inject } from '@angular/core';
import { Popover } from 'bootstrap';
import { ItemData } from 'src/app/models/item-data';
import { ItemDataService } from 'src/app/services/item-data.service';

@Component({
  selector: 'app-item-card-section',
  templateUrl: './item-card-section.component.html',
  styleUrls: ['./item-card-section.component.css']
})
export class ItemCardSectionComponent {
  itemDataService = inject(ItemDataService);
  @Input() tag!: String;
  items: ItemData[] = [];
  image: String = "";

  loadItemsByTag() {
    this.itemDataService.getByTag(this.tag).subscribe(
      {
        next: (data) => {
          this.items = data;
        }
      }

    )
  }
  loadPopovers() {
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    const popoverList = Array.from(popoverTriggerList).map(popoverTriggerEl => new Popover(popoverTriggerEl));
  }
  ngOnInit() {
    this.loadItemsByTag();
    this.loadPopovers();
  }

}
