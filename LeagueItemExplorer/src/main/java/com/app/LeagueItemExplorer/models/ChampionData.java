package com.app.LeagueItemExplorer.models;

import lombok.Data;

@Data
public class ChampionData {
    private String version;
    private String id;
    private String key;
    private String name;
    private String title;
    private String blurb;
    private ChampionBase info;
    private ChampionImage image;
    private String[] tags;
    private String partype;
    private ChampionStats stats;
}
