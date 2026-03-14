package com.inventory.InventoryManagement.repository;


import com.inventory.InventoryManagement.entity.DeliveryItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DeliveryItemRepository extends JpaRepository<DeliveryItem, Long> {

    List<DeliveryItem> findByDeliveryId(Long deliveryId);

}