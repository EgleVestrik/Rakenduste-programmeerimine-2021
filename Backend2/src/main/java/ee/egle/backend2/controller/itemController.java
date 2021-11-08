package ee.egle.backend2.controller;

import ee.egle.backend2.model.Item;
import ee.egle.backend2.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class itemController {
    @Autowired
    ItemService itemService;

    @GetMapping("items")
    public List<Item> getItems(){
        return itemService.getItems();
    }

    @PostMapping("items")
    public String postItem(@RequestBody Item item) {
        itemService.saveItem(item);
        return "Ese edukalt lisatud " + item.getName();
    }

    //localhost:8080/items

    //delete päring
    //edit päring
    //view item päring

    //Täna
    //andmebaas PostgreSQL -- relatsiooniline

    //kodutöö:
    //kategooria osas

    //swagger

    //frontendis kustuta päringud valmis
}
