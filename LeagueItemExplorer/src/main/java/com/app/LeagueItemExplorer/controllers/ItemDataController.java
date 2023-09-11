package com.app.LeagueItemExplorer.controllers;

import com.app.LeagueItemExplorer.services.ItemDataServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/itemData")
public class ItemDataController {
    @Autowired
    private ItemDataServiceImpl itemDataService;

    @GetMapping
    public Object getAll() {
        return itemDataService.getAll();
    }

    @GetMapping("/{tag}")
    public Object getByTag(@PathVariable String tag) {
        return itemDataService.getByTag(tag);
    }

    @GetMapping("/name/{name}")
    public Object getByName(@PathVariable String name) {
        return itemDataService.getByName(name);
    }

}