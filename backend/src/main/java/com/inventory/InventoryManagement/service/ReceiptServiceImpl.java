package com.inventory.InventoryManagement.service;

import com.inventory.InventoryManagement.dto.ReceiptDTO;
import com.inventory.InventoryManagement.entity.Receipt;
import com.inventory.InventoryManagement.repository.ReceiptRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReceiptServiceImpl implements ReceiptService {

    private final ReceiptRepository receiptRepository;

    public ReceiptServiceImpl(ReceiptRepository receiptRepository) {
        this.receiptRepository = receiptRepository;
    }

    @Override
    public ReceiptDTO createReceipt(ReceiptDTO dto) {

        Receipt receipt = new Receipt();
        receipt.setSupplier(dto.getSupplier());
        receipt.setStatus("DRAFT");

        receiptRepository.save(receipt);

        dto.setId(receipt.getId());

        return dto;
    }

    @Override
    public List<ReceiptDTO> getReceipts() {
        return receiptRepository.findAll()
                .stream()
                .map(r -> {
                    ReceiptDTO dto = new ReceiptDTO();
                    dto.setId(r.getId());
                    dto.setSupplier(r.getSupplier());
                    dto.setStatus(r.getStatus());
                    return dto;
                })
                .toList();
    }

    @Override
    public void validateReceipt(Long id) {

        Receipt receipt = receiptRepository.findById(id).orElseThrow();

        receipt.setStatus("DONE");

        receiptRepository.save(receipt);
    }
}
