package com.inventory.InventoryManagement.service;


import com.inventory.InventoryManagement.dto.AdjustmentDTO;
import com.inventory.InventoryManagement.service.AdjustmentService;
import org.springframework.stereotype.Service;

@Service
public class AdjustmentServiceImpl implements AdjustmentService {

    @Override
    public AdjustmentDTO adjustStock(AdjustmentDTO dto) {

        // business logic here

        return dto;
    }
}