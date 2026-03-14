package com.inventory.InventoryManagement.repository;

import com.inventory.InventoryManagement.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}