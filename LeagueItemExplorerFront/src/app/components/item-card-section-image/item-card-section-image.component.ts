import { Component, Input } from '@angular/core';
import { ItemData } from 'src/app/models/item-data';



@Component({
  selector: 'app-item-card-section-image',
  templateUrl: './item-card-section-image.component.html',
  styleUrls: ['./item-card-section-image.component.css']
})
export class ItemCardSectionImageComponent {
  @Input() item!: ItemData;
  image: String = "";
  nameWithoutSpaces = "";

  private baseUrl: string = "https://ddragon.leagueoflegends.com/cdn/13.16.1/img/item/";

  ngOnInit() {
    this.image = this.baseUrl + this.item.image.full;
    this.nameWithoutSpaces = this.item.name.toLowerCase().replaceAll(" ", '-');
  }

}
