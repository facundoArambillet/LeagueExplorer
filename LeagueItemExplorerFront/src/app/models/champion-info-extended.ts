import { ChampionDataExtended } from "./champion-data-extended";

export interface ChampionInfoExtended {
    type: string;
    format: string;
    version: string;
    data: {[key: string]: ChampionDataExtended};
}