package com.inventory.InventoryManagement.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "transfer_items")
public class TransferItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Transfer transfer;

    @ManyToOne
    private Product product;

    private Integer quantity;

}
