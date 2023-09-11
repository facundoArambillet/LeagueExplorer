package com.app.LeagueItemExplorer.models;

import lombok.Data;

import java.util.Map;

@Data
public class ChampionInfo {
    private String type;
    private String format;
    private String version;
    private Map<String, ChampionData> data;
}
