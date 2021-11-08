package ee.egle.backend2.controller;

import ee.egle.backend2.model.Category;
import ee.egle.backend2.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class categoryController {
    @Autowired
    CategoryService categoryService;

    @GetMapping("categories")
    public List<Category> getCategory() {return categoryService.getCategory();}

    @PostMapping("Category")
    public String postCategory(@RequestBody Category category) {
        categoryService.saveCategory(category);
        return "Kategooria eduakalt lisatud " + category.getName();
    }

}
