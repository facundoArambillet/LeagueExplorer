package com.app.LeagueItemExplorer.models;

import lombok.Data;

import java.util.Map;

@Data
public class ItemData {
    private String name;
    private String description;
    private String colloq;
    private String plaintext;
    private String[] into;
    private ItemDataImage image;
    private ItemDataGold gold;
    private String[] tags;
    private Map<String,Boolean> maps;
    private Map<String,Integer> stats;

}
