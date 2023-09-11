package com.app.LeagueItemExplorer.services;

import com.app.LeagueItemExplorer.errors.ErrorNotFound;
import com.app.LeagueItemExplorer.models.ChampionData;
import com.app.LeagueItemExplorer.models.ChampionDataExtended;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class ChampionServiceTest {

    @Autowired
    private ChampionService championService;

    @Test
    public void givenChampions_whenGetAllChampions_thenMapShouldNotBeEmptyOrNull() {
        Map<String, ChampionData> champions = (Map<String, ChampionData>) this.championService.getAll();

        assertNotNull(champions, "El map champions no deberia ser nulo");
        assertFalse(champions.isEmpty(), "El map champions no debería estar vacio");
    }

    @Test
    public void givenValidName_whenGetByName_thenChampionDataExtendedShouldNotBeNull() {
        String championName = "Aatrox";

        Map<String, ChampionDataExtended> champion = (Map<String, ChampionDataExtended>) this.championService.getByName(championName);

        assertNotNull(champion, "El campeon no debería ser nulo");
        System.out.println(champion.get("Aatrox").getName());
        assertTrue(champion.get("Aatrox").getName().equals(championName),"El nombre del campeon deberia ser verdadero");
    }

    @Test
    public void givenInvalidName_whenGetByName_thenChampionDataExtendedShouldBeThrown() {
        String invalidChampionName = "invalidName";

        assertThrows(ErrorNotFound.class, () -> {
            this.championService.getByName(invalidChampionName);
        });
    }
}
