package com.inventory.InventoryManagement.dto;

import lombok.Data;

@Data
public class ProductDTO {

    private Long id;
    private String name;
    private String sku;
    private String unit;
    private Long categoryId;
}