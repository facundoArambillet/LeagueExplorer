package com.app.LeagueItemExplorer.controllers;

import com.app.LeagueItemExplorer.services.ItemTreeServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/itemTree")
public class ItemTreeController {
    @Autowired
    private ItemTreeServiceImpl itemTreeService;

    @GetMapping
    public Object getAll() {
        return itemTreeService.getAll();
    }

    @GetMapping("/tags")
    public Object getAllTags() {
        return itemTreeService.getAllTags();
    }

}
