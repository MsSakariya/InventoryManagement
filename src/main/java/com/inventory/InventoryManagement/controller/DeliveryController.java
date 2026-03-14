package com.inventory.InventoryManagement.controller;


import com.inventory.InventoryManagement.dto.DeliveryDTO;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/deliveries")
public class DeliveryController {

    private final DeliveryService deliveryService;

    public DeliveryController(DeliveryService deliveryService) {
        this.deliveryService = deliveryService;
    }

    @PostMapping
    public DeliveryDTO createDelivery(@RequestBody DeliveryDTO dto) {
        return deliveryService.createDelivery(dto);
    }

    @GetMapping
    public List<DeliveryDTO> getDeliveries() {
        return deliveryService.getDeliveries();
    }

    @PostMapping("/{id}/validate")
    public String validateDelivery(@PathVariable Long id) {
        deliveryService.validateDelivery(id);
        return "Delivery validated";
    }
}
