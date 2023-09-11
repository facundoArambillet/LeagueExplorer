package com.app.LeagueItemExplorer.services;

import com.app.LeagueItemExplorer.errors.ErrorNotFound;
import com.app.LeagueItemExplorer.errors.ErrorResponse;
import com.app.LeagueItemExplorer.models.ItemData;
import com.app.LeagueItemExplorer.models.ItemInfo;
import org.springframework.http.HttpStatusCode;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

@Service
public class ItemDataService {
    private final String url = "http://ddragon.leagueoflegends.com/cdn/13.16.1/data/en_US/item.json";
    public Object getAll() {
        try {
            RestTemplate restTemplate = new RestTemplate();
            ItemInfo response = restTemplate.getForEntity(url,ItemInfo.class).getBody();
            Map<String, ItemData> items = response.getData();

            return items;
        }catch (HttpClientErrorException e) {
            System.out.println(e);
            return new ErrorResponse(e.getStatusCode(),e.getMessage());
        }

    }
    public Object getByName(String name) {
        try {
            RestTemplate restTemplate = new RestTemplate();
            ItemInfo response = restTemplate.getForEntity(url, ItemInfo.class).getBody();
            Map<String, ItemData> items = response.getData();

            for (Map.Entry<String,ItemData> item : items.entrySet()) {
                // Reemplazo los espacios en blanco por un "-" (porque de esta manera se envía en el front)
                if (item.getValue().getName().toLowerCase().replaceAll(" ", "-").equals(name)) {
                    return item;
                }
            }

            // Si no se encontró ningún item con el nombre dado
            throw new ErrorNotFound(HttpStatusCode.valueOf(404), "Item not found");
        } catch (HttpClientErrorException e) {
            System.out.println(e);
            throw  new ErrorResponse(e.getStatusCode(), e.getMessage());
        }
    }

    public Object getByTag(String searchedTag) {
        try {
            RestTemplate restTemplate = new RestTemplate();
            ItemInfo response = restTemplate.getForEntity(url, ItemInfo.class).getBody();
            Map<String, ItemData> items = response.getData();
            Map<String, ItemData> itemsByName = new HashMap<>(); // Utilizar un Map para eliminar duplicados por nombre

            for (ItemData item : items.values()) {
                for (String tag : item.getTags()) {
                    // Convierto a mayúsculas porque el searchedTag viene en mayúsculas
                    if (tag.toUpperCase().equals(searchedTag)) {
                        //Elimino los items mejorados de ornn para que no se me dupliquen
                        //y elimino los objetos que no se pueden comprar(Como placas de torre o mejoras de minions)
                        if(!item.getDescription().contains("<ornnBonus>") && item.getGold().isPurchasable()) {
                            // Usar el atributo 'name' como clave para evitar elementos duplicados
                            itemsByName.put(item.getName(), item);
                        }
                    }
                }
            }
            // Devolver la colección de elementos únicos
            return new ArrayList<>(itemsByName.values());
        } catch (HttpClientErrorException e) {
            System.out.println(e);
            return new ErrorResponse(e.getStatusCode(), e.getMessage());
        }
    }


}
