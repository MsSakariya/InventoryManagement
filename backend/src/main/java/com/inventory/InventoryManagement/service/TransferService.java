package com.inventory.InventoryManagement.service;

import com.inventory.InventoryManagement.dto.TransferDTO;

import java.util.List;

public interface TransferService {

    TransferDTO createTransfer(TransferDTO dto);

    List<TransferDTO> getTransfers();

    void validateTransfer(Long id);
}