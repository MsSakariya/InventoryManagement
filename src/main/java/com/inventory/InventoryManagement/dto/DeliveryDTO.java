package com.inventory.InventoryManagement.dto;


import lombok.Data;

import java.util.List;
@Data
public class DeliveryDTO {

    private Long id;
    private String customer;
    private String status;
    private List<DeliveryItemDTO> items;

    public DeliveryDTO() {}

}