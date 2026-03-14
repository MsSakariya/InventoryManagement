package com.inventory.InventoryManagement.repository;


import com.inventory.InventoryManagement.entiry.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}