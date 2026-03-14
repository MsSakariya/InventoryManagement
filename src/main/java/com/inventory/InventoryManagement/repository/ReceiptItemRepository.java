package com.inventory.InventoryManagement.repository;

import com.inventory.InventoryManagement.entiry.ReceiptItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReceiptItemRepository extends JpaRepository<ReceiptItem, Long> {
}