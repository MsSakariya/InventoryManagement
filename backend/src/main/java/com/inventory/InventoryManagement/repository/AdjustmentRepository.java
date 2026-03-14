package com.inventory.InventoryManagement.repository;


import com.inventory.InventoryManagement.entity.Adjustment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdjustmentRepository extends JpaRepository<Adjustment, Long> {

}