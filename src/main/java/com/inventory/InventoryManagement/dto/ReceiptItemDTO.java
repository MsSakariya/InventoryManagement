package com.inventory.InventoryManagement.dto;

import lombok.Data;

@Data

public class ReceiptItemDTO {

    private Long productId;
    private Integer quantity;

    public ReceiptItemDTO() {}

}
