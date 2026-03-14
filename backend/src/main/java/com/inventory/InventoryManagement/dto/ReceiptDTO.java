package com.inventory.InventoryManagement.dto;


import lombok.Data;

import java.util.List;

@Data
public class ReceiptDTO {

    private Long id;
    private String supplier;
    private String status;
    private List<ReceiptItemDTO> items;

    public ReceiptDTO() {}

}