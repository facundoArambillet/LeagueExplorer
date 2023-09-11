package com.app.LeagueItemExplorer.controllers;

import com.app.LeagueItemExplorer.models.ItemData;
import com.app.LeagueItemExplorer.services.ItemDataServiceImpl;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class ItemDataControllerTest {

//    @Mock
//    private ItemData itemData;
    @Mock
    private ItemDataServiceImpl itemDataService;
    @InjectMocks
    private ItemDataController itemDataController;

//    @BeforeEach
//    public void setUp() {
//        itemData = new ItemData();
//    }
    @Test
    public void givenExistingItemsData_whenGetAll_thenReturnOk() {
        ItemData itemData = new ItemData();
        ItemData itemData_2 = new ItemData();
        List<ItemData> items = new ArrayList<>();
        items.add(itemData);
        items.add(itemData_2);

        when(itemDataService.getAll()).thenReturn(items);

        List<ItemData> response = (List<ItemData>) itemDataController.getAll();

        assertEquals(response,items,"Las listas deberian ser iguales");
    }

}
