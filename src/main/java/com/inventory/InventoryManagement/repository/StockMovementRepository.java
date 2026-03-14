package com.inventory.InventoryManagement.repository;

import com.inventory.InventoryManagement.entiry.StockMovement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StockMovementRepository extends JpaRepository<StockMovement, Long> {
}