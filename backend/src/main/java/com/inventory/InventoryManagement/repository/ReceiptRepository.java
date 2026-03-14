package com.inventory.InventoryManagement.repository;


import com.inventory.InventoryManagement.entity.Receipt;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReceiptRepository extends JpaRepository<Receipt, Long> {

    List<Receipt> findByStatus(String status);

}