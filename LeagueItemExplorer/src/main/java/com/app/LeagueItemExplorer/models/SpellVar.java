package com.app.LeagueItemExplorer.models;

import lombok.Data;

import java.util.List;

@Data
public class SpellVar {
    private String link;
    private List<Double> coeff;
    private String key;
}
