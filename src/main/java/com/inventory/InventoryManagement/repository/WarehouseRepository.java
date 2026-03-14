package com.inventory.InventoryManagement.repository;

import com.inventory.InventoryManagement.entiry.Warehouse;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WarehouseRepository extends JpaRepository<Warehouse, Long> {
}