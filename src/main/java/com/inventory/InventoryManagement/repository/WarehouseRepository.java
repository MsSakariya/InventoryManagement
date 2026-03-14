package com.inventory.InventoryManagement.repository;

import com.inventory.InventoryManagement.entity.Warehouse;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WarehouseRepository extends JpaRepository<Warehouse, Long> {

}