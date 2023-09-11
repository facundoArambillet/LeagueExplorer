package com.app.LeagueItemExplorer.services;


import com.app.LeagueItemExplorer.errors.ErrorNotFound;
import com.app.LeagueItemExplorer.errors.ErrorResponse;
import com.app.LeagueItemExplorer.models.ChampionData;
import com.app.LeagueItemExplorer.models.ChampionDataExtended;
import com.app.LeagueItemExplorer.models.ChampionInfo;
import com.app.LeagueItemExplorer.models.ChampionInfoExtended;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import java.util.*;

@Service
public class ChampionService {
    private final String url = "http://ddragon.leagueoflegends.com/cdn/13.16.1/data/en_US/";

    public Object getAll() {
        try {
            String urlAll = this.url + "champion.json";
            RestTemplate restTemplate = new RestTemplate();
            ChampionInfo response = restTemplate.getForEntity(urlAll,ChampionInfo.class).getBody();
            Map<String, ChampionData> champions = response.getData();

            return champions;
        }catch (HttpClientErrorException e) {
            System.out.println(e);
            throw new ErrorResponse(e.getStatusCode(),e.getMessage());
        }

    }

    public Object getByName(String name) {
        try {
            String urlByName = this.url + "champion/" + name + ".json";
            RestTemplate restTemplate = new RestTemplate();
            ChampionInfoExtended response = restTemplate.getForEntity(urlByName,ChampionInfoExtended.class).getBody();

            Map<String, ChampionDataExtended> champion = response.getData();
            return champion;

        }catch (HttpClientErrorException e) {
            System.out.println(e);
            throw new ErrorNotFound(e.getStatusCode(),e.getMessage());
        }

    }

    public Object getAllTags() {
        try {
            String urlAll = this.url + "champion.json";
            RestTemplate restTemplate = new RestTemplate();
            ChampionInfo response = restTemplate.getForEntity(urlAll,ChampionInfo.class).getBody();
            Map<String, ChampionData> champions = response.getData();
            Set<String> tags = new HashSet<String>();
            for(ChampionData champion : champions.values()) {
                for (String tag : champion.getTags()) {
                    tags.add(tag);
                }
            }
            return tags;
        }catch (HttpClientErrorException e) {
            System.out.println(e);
            return new ErrorResponse(e.getStatusCode(),e.getMessage());
        }

    }
    public Object getChampionsByTag(String tag) {
        try {
            String urlAll = this.url + "champion.json";
            RestTemplate restTemplate = new RestTemplate();
            ChampionInfo response = restTemplate.getForEntity(urlAll,ChampionInfo.class).getBody();
            Map<String, ChampionData> champions = response.getData();
            List<ChampionData> championsByTag = new ArrayList<>();
            for(ChampionData champion : champions.values()) {
                for (String tagChampion : champion.getTags()) {
                    if(tag.equals(tagChampion)) {
                        championsByTag.add(champion);
                    }
                }
            }
            return championsByTag;
        }catch (HttpClientErrorException e) {
            System.out.println(e);
            return new ErrorResponse(e.getStatusCode(),e.getMessage());
        }

    }
}
