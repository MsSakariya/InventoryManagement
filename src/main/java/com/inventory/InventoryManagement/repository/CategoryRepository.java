package com.inventory.InventoryManagement.repository;

import com.inventory.InventoryManagement.entiry.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}