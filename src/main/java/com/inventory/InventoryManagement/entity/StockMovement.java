package com.inventory.InventoryManagement.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "stock_movements")
public class StockMovement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Product product;

    @ManyToOne
    private Location sourceLocation;

    @ManyToOne
    private Location destinationLocation;

    private Integer quantity;

    private String movementType;

    private LocalDateTime createdAt;

}