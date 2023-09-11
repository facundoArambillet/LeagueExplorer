package com.app.LeagueItemExplorer.models;

import lombok.Data;

import java.util.Map;

@Data
public class ChampionInfoExtended {
    private String type;
    private String format;
    private String version;
    private Map<String, ChampionDataExtended> data;
}
