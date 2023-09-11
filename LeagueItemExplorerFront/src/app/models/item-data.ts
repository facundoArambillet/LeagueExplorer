import { ItemDataGold } from "./item-data-gold";
import { ItemDataImage } from "./item-data-image";

export interface ItemData {
    name: string;
    description: string;
    colloq: string;
    plaintext: string;
    into: string[];
    tags: string[];
    image : ItemDataImage;
    gold: ItemDataGold;
    maps: { [key: string]: boolean };
    stats: { [key: string]: number };
}
