package com.inventory.InventoryManagement.service;

import com.inventory.InventoryManagement.dto.DeliveryDTO;

import java.util.List;

public interface DeliveryService {

    DeliveryDTO createDelivery(DeliveryDTO dto);

    List<DeliveryDTO> getDeliveries();

    void validateDelivery(Long id);
}
