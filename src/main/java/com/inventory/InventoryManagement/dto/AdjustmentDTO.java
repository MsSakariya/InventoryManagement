package com.inventory.InventoryManagement.dto;

import lombok.Data;

@Data
public class AdjustmentDTO {

    private Long productId;
    private Long warehouseId;
    private Integer countedQuantity;

    public AdjustmentDTO() {}


}