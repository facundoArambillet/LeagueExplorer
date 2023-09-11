package com.app.LeagueItemExplorer.services;

import com.app.LeagueItemExplorer.errors.ErrorResponse;
import com.app.LeagueItemExplorer.models.ItemInfo;
import com.app.LeagueItemExplorer.models.ItemTree;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@Service
public class ItemTreeService {
    private final String url = "http://ddragon.leagueoflegends.com/cdn/13.16.1/data/en_US/item.json";
    public Object getAll() {
        try{
            RestTemplate restTemplate = new RestTemplate();
            ItemInfo response = restTemplate.getForEntity(url,ItemInfo.class).getBody();
            List<ItemTree> itemsTree = new ArrayList<>();
            for(ItemTree item : response.getTree()) {
                itemsTree.add(item);
            }
            return itemsTree;
        }catch (HttpClientErrorException e) {
            System.out.println(e);
            return new ErrorResponse(e.getStatusCode(),e.getMessage());
        }
    }

    public Object getAllTags() {
        try{
            RestTemplate restTemplate = new RestTemplate();
            ItemInfo response = restTemplate.getForEntity(url,ItemInfo.class).getBody();
            List<String> tags = new ArrayList<String>();
            for(ItemTree item : response.getTree()) {
                for(String tag : item.getTags()) {
                    tags.add(tag);
                }
            }
            return tags;
        }catch (HttpClientErrorException e) {
            System.out.println(e);
            return new ErrorResponse(e.getStatusCode(),e.getMessage());
        }
    }
}
