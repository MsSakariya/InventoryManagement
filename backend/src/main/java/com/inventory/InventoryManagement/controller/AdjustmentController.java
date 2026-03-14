package com.inventory.InventoryManagement.controller;


import com.inventory.InventoryManagement.dto.AdjustmentDTO;
import com.inventory.InventoryManagement.service.AdjustmentService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/adjustments")
public class AdjustmentController {

    private final AdjustmentService adjustmentService;

    public AdjustmentController(AdjustmentService adjustmentService) {
        this.adjustmentService = adjustmentService;
    }

    @PostMapping
    public AdjustmentDTO adjustStock(@RequestBody AdjustmentDTO dto) {
        return adjustmentService.adjustStock(dto);
    }
}
