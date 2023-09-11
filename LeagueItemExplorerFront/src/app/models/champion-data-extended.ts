import { ChampionImage } from "./champion-image";
import { ChampionInfo } from "./champion-info";
import { ChampionPassive } from "./champion-passive";
import { ChampionSpell } from "./champion-spell";
import { ChampionStats } from "./champion-stats";

export interface ChampionDataExtended {
    id: string;
    key: string;
    name: string;
    title: string;
    image: ChampionImage;
    tags: string[];
    partype: string;
    info: ChampionInfo;
    lore: string;
    blurb: string;
    allytips: string[];
    enemytips: string[];
    stats: ChampionStats;
    passive: ChampionPassive;
    spells: ChampionSpell[];
}