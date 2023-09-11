import { ChampionData } from "./champion-data";

export interface ChampionInfo {
    type: string;
    format: string;
    version: string;
    data: {[key: string]: ChampionData};
}