package com.app.LeagueItemExplorer.models;

import lombok.Data;

@Data
public class ChampionDataExtended {
    private String id;
    private String key;
    private String name;
    private String title;
    private ChampionImage image;
    private String[] tags;
    private String partype;
    private String lore;
    private String blurb;
    private String[] allytips;
    private String[] enemytips;
    private ChampionStats stats;
    private ChampionPassive passive;
    private ChampionSpell[] spells;
}
