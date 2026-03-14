package com.inventory.InventoryManagement.service;


import com.inventory.InventoryManagement.dto.DashboardDTO;
import com.inventory.InventoryManagement.repository.ProductRepository;
import com.inventory.InventoryManagement.repository.ReceiptRepository;
import com.inventory.InventoryManagement.repository.DeliveryRepository;
import com.inventory.InventoryManagement.repository.TransferRepository;

import org.springframework.stereotype.Service;

@Service
public class DashboardServiceImpl implements DashboardService {

    private final ProductRepository productRepository;
    private final ReceiptRepository receiptRepository;
    private final DeliveryRepository deliveryRepository;
    private final TransferRepository transferRepository;

    public DashboardServiceImpl(ProductRepository productRepository,
                                ReceiptRepository receiptRepository,
                                DeliveryRepository deliveryRepository,
                                TransferRepository transferRepository) {

        this.productRepository = productRepository;
        this.receiptRepository = receiptRepository;
        this.deliveryRepository = deliveryRepository;
        this.transferRepository = transferRepository;
    }

    @Override
    public DashboardDTO getDashboardStats() {

        DashboardDTO dto = new DashboardDTO();

        dto.setTotalProducts(productRepository.count());
        dto.setPendingReceipts((long) receiptRepository.findByStatus("DRAFT").size());
        dto.setPendingDeliveries((long) deliveryRepository.findByStatus("DRAFT").size());
        dto.setScheduledTransfers((long) transferRepository.findByStatus("DRAFT").size());

        return dto;
    }
}