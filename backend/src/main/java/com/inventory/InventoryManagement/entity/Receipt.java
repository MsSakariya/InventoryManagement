package com.inventory.InventoryManagement.entity;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;

import lombok.Data;
import jakarta.persistence.*;

@Entity
@Data
@Table(name = "receipts")
public class Receipt {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String supplier;

    private String status;
}
