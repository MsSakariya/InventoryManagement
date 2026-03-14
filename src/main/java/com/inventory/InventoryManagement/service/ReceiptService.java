package com.inventory.InventoryManagement.service;

import com.inventory.InventoryManagement.dto.ReceiptDTO;

import java.util.List;

public interface ReceiptService {

    ReceiptDTO createReceipt(ReceiptDTO dto);

    List<ReceiptDTO> getReceipts();

    void validateReceipt(Long id);
}