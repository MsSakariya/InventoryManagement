package com.inventory.InventoryManagement.service;


import com.inventory.InventoryManagement.dto.TransferDTO;
import com.inventory.InventoryManagement.entity.Transfer;
import com.inventory.InventoryManagement.repository.TransferRepository;
import com.inventory.InventoryManagement.service.TransferService;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TransferServiceImpl implements TransferService {

    private final TransferRepository transferRepository;

    public TransferServiceImpl(TransferRepository transferRepository) {
        this.transferRepository = transferRepository;
    }

    @Override
    public TransferDTO createTransfer(TransferDTO dto) {

        Transfer transfer = new Transfer();

        transfer.setStatus("DRAFT");

        transferRepository.save(transfer);

        dto.setId(transfer.getId());

        return dto;
    }

    @Override
    public List<TransferDTO> getTransfers() {

        return transferRepository.findAll()
                .stream()
                .map(t -> {
                    TransferDTO dto = new TransferDTO();
                    dto.setId(t.getId());
                    return dto;
                })
                .collect(Collectors.toList());
    }

    @Override
    public void validateTransfer(Long id) {

        Transfer transfer = transferRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Transfer not found"));

        transfer.setStatus("DONE");

        transferRepository.save(transfer);
    }
}