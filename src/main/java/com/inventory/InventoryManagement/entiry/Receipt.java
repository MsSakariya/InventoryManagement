package com.inventory.InventoryManagement.entiry;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;

import org.springframework.data.annotation.Id;
import jakarta.persistence.*;

@Entity
@Table(name = "receipts")
public class Receipt {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String supplier;

    private String status;
}
