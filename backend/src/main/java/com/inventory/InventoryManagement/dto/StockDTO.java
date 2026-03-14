package com.inventory.InventoryManagement.dto;

import lombok.Data;

@Data
public class StockDTO {

    private Long productId;
    private Long warehouseId;
    private Integer quantity;
}