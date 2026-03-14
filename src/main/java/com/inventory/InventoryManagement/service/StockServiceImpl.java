package com.inventory.InventoryManagement.service;

import com.inventory.InventoryManagement.entiry.Stock;
import com.inventory.InventoryManagement.repository.StockRepository;
import org.springframework.stereotype.Service;

@Service
public class StockServiceImpl implements StockService {

    private final StockRepository stockRepository;

    public StockServiceImpl(StockRepository stockRepository) {
        this.stockRepository = stockRepository;
    }

    @Override
    public void increaseStock(Long productId, Long warehouseId, int quantity) {

        Stock stock = new Stock();
        stock.setQuantity(quantity);

        stockRepository.save(stock);
    }

    @Override
    public void decreaseStock(Long productId, Long warehouseId, int quantity) {

        Stock stock = stockRepository.findById(productId).orElseThrow();

        stock.setQuantity(stock.getQuantity() - quantity);

        stockRepository.save(stock);
    }
}