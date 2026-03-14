package com.inventory.InventoryManagement.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "delivery_items")
public class DeliveryItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Delivery delivery;

    @ManyToOne
    private Product product;

    private Integer quantity;

}