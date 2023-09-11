package com.app.LeagueItemExplorer.controllers;

import com.app.LeagueItemExplorer.services.ChampionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/champion")
public class ChampionController {
    @Autowired
    private ChampionService championService;

    @GetMapping
    public Object getAll() {return this.championService.getAll();}

    @GetMapping("/{name}")
    public Object getByName(@PathVariable String name) {return this.championService.getByName(name);}

    @GetMapping("/tags")
    public Object getAllTags() {return this.championService.getAllTags();}

    @GetMapping("/tags/{tag}")
    public Object getAllByTag(@PathVariable String tag) {return this.championService.getChampionsByTag(tag);}
}
