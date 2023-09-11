package com.app.LeagueItemExplorer.services;

public interface ItemDataService {
    Object getAll();
    Object getByName(String name);
    Object getByTag(String searchedTag);
}

