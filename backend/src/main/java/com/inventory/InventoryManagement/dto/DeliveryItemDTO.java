package com.inventory.InventoryManagement.dto;

import lombok.Data;

@Data
public class DeliveryItemDTO {

    private Long productId;
    private Integer quantity;

    public DeliveryItemDTO() {}


}
