package com.inventory.InventoryManagement.service;


import com.inventory.InventoryManagement.dto.ProductDTO;
import com.inventory.InventoryManagement.entiry.Product;

import java.util.List;

public interface ProductService {

    ProductDTO createProduct(ProductDTO dto);

    List<ProductDTO> getAllProducts();

    ProductDTO getProduct(Long id);

    ProductDTO updateProduct(Long id, ProductDTO dto);

    void deleteProduct(Long id);
}