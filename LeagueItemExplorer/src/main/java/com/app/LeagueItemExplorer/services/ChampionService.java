package com.app.LeagueItemExplorer.services;

public interface ChampionService {
    Object getAll();
    Object getByName(String name);
    Object getAllTags();
    Object getChampionsByTag(String tag);
}
