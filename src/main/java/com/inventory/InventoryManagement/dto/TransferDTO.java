package com.inventory.InventoryManagement.dto;

import lombok.Data;

@Data
public class TransferDTO {

    private Long id;
    private Long productId;
    private Long sourceWarehouseId;
    private Long destinationWarehouseId;
    private Integer quantity;

    public TransferDTO() {}
}