package com.inventory.InventoryManagement.service;


import com.inventory.InventoryManagement.dto.DeliveryDTO;
import com.inventory.InventoryManagement.entity.Delivery;
import com.inventory.InventoryManagement.repository.DeliveryRepository;
import com.inventory.InventoryManagement.service.DeliveryService;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class DeliveryServiceImpl implements DeliveryService {

    private final DeliveryRepository deliveryRepository;

    public DeliveryServiceImpl(DeliveryRepository deliveryRepository) {
        this.deliveryRepository = deliveryRepository;
    }

    @Override
    public DeliveryDTO createDelivery(DeliveryDTO dto) {

        Delivery delivery = new Delivery();

        delivery.setCustomer(dto.getCustomer());
        delivery.setStatus("DRAFT");

        deliveryRepository.save(delivery);

        dto.setId(delivery.getId());

        return dto;
    }

    @Override
    public List<DeliveryDTO> getDeliveries() {

        return deliveryRepository.findAll()
                .stream()
                .map(d -> {
                    DeliveryDTO dto = new DeliveryDTO();
                    dto.setId(d.getId());
                    dto.setCustomer(d.getCustomer());
                    dto.setStatus(d.getStatus());
                    return dto;
                })
                .collect(Collectors.toList());
    }

    @Override
    public void validateDelivery(Long id) {

        Delivery delivery = deliveryRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Delivery not found"));

        delivery.setStatus("DONE");

        deliveryRepository.save(delivery);
    }
}
