package com.inventory.InventoryManagement.entiry;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.ManyToOne;

import org.springframework.data.annotation.Id;
import jakarta.persistence.*;

@Entity
@Table(name = "receipt_items")
public class ReceiptItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Receipt receipt;

    @ManyToOne
    private Product product;

    private Integer quantity;
}