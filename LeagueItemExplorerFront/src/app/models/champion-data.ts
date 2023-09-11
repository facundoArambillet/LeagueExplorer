import { ChampionBase } from "./champion-base";
import { ChampionImage } from "./champion-image";
import { ChampionStats } from "./champion-stats";

export interface ChampionData {
    version: string;
    id: string;
    key: string;
    name: string;
    title: string;
    blurb: string;
    info: ChampionBase;
    image: ChampionImage;
    tags: string[];
    partype: string;
    stats: ChampionStats;
}