package com.inventory.InventoryManagement.controller;


import com.inventory.InventoryManagement.service.StockService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/stocks")
public class StockController {

    private final StockService stockService;

    public StockController(StockService stockService) {
        this.stockService = stockService;
    }

    @PostMapping("/increase")
    public void increaseStock(@RequestParam Long productId,
                              @RequestParam Long warehouseId,
                              @RequestParam int quantity) {

        stockService.increaseStock(productId, warehouseId, quantity);
    }

    @PostMapping("/decrease")
    public void decreaseStock(@RequestParam Long productId,
                              @RequestParam Long warehouseId,
                              @RequestParam int quantity) {

        stockService.decreaseStock(productId, warehouseId, quantity);
    }
}