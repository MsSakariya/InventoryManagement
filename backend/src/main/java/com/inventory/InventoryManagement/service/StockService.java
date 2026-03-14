package com.inventory.InventoryManagement.service;

public interface StockService {

    void increaseStock(Long productId, Long warehouseId, int quantity);

    void decreaseStock(Long productId, Long warehouseId, int quantity);
}