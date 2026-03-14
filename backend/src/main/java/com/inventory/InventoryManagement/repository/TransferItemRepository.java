package com.inventory.InventoryManagement.repository;


import com.inventory.InventoryManagement.entity.TransferItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TransferItemRepository extends JpaRepository<TransferItem, Long> {

    List<TransferItem> findByTransferId(Long transferId);

}