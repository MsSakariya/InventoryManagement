package com.inventory.InventoryManagement.service;


import com.inventory.InventoryManagement.entiry.Category;

import java.util.List;

public interface CategoryService {

    Category createCategory(Category category);

    List<Category> getAllCategories();
}