package com.app.LeagueItemExplorer.models;

import lombok.Data;

@Data
public class ItemDataGold {
    private String base;
    private boolean purchasable;
    private int total;
    private int sell;
}
