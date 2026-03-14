package com.inventory.InventoryManagement.dto;

import lombok.Data;

@Data
public class UserDTO {

    private Long id;
    private String name;
    private String email;
    private String role;

    public UserDTO() {}
}
