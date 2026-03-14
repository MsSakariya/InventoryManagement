package com.inventory.InventoryManagement.service;


import com.inventory.InventoryManagement.entiry.Product;

import java.util.List;

public interface ProductService {

    Product createProduct(Product product);

    List<Product> getAllProducts();

    Product updateProduct(Long id, Product product);

    void deleteProduct(Long id);
}