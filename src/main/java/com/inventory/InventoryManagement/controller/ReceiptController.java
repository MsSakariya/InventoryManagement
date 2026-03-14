package com.inventory.InventoryManagement.controller;
//
//import com.inventory.InventoryManagement.entiry.Receipt;
//import com.inventory.InventoryManagement.repository.ReceiptRepository;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/receipts")
//public class ReceiptController {
//
//    private final ReceiptRepository receiptRepository;
//
//    public ReceiptController(ReceiptRepository receiptRepository) {
//        this.receiptRepository = receiptRepository;
//    }
//
//    @PostMapping
//    public Receipt createReceipt(@RequestBody Receipt receipt) {
//        return receiptRepository.save(receipt);
//    }
//
//    @GetMapping
//    public List<Receipt> getReceipts() {
//        return receiptRepository.findAll();
//    }
//}



import com.inventory.InventoryManagement.dto.ReceiptDTO;
import com.inventory.InventoryManagement.service.ReceiptService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/receipts")
public class ReceiptController {

    private final ReceiptService receiptService;

    public ReceiptController(ReceiptService receiptService) {
        this.receiptService = receiptService;
    }

    @PostMapping
    public ReceiptDTO createReceipt(@RequestBody ReceiptDTO dto) {
        return receiptService.createReceipt(dto);
    }

    @GetMapping
    public List<ReceiptDTO> getReceipts() {
        return receiptService.getReceipts();
    }

    @PostMapping("/{id}/validate")
    public String validateReceipt(@PathVariable Long id) {
        receiptService.validateReceipt(id);
        return "Receipt validated";
    }
}