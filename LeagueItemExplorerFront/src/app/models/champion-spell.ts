import { ChampionImage } from "./champion-image";
import { LevelTip } from "./level-tip";
import { SpellVar } from "./spell-var";

export interface ChampionSpell {
    id: string;
    name: string;
    description: string;
    tooltip: string;
    leveltip: LevelTip;
    maxrank: number;
    cooldown: number[];
    cooldownBurn: string;
    cost: number[];
    costBurn: string;
    datavalues: {[key: string]: number[]};
    effect: number[][];
    effectBurn: string[];
    vars: SpellVar[];
    costType: string;
    maxammo: string;
    range: number[];
    rangeBurn: string;
    image: ChampionImage;
    resource: string;
}






