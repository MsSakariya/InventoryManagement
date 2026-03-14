package com.inventory.InventoryManagement.repository;

import com.inventory.InventoryManagement.entiry.Stock;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StockRepository extends JpaRepository<Stock, Long> {
}
