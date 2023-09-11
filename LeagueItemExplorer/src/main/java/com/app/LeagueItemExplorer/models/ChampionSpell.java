package com.app.LeagueItemExplorer.models;

import lombok.Data;

import java.util.List;
import java.util.Map;
@Data
public class ChampionSpell {
    private String id;
    private String name;
    private String description;
    private String tooltip;
    private LevelTip leveltip;
    private int maxrank;
    private List<Integer> cooldown;
    private String cooldownBurn;
    private List<Integer> cost;
    private String costBurn;
    private Map<String, List<Double>> datavalues;
    private List<List<Integer>> effect;
    private List<String> effectBurn;
    private List<SpellVar> vars;
    private String costType;
    private String maxammo;
    private List<Integer> range;
    private String rangeBurn;
    private ChampionImage image;
    private String resource;
}
