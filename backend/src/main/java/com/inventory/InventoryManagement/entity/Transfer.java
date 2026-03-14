package com.inventory.InventoryManagement.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "transfers")
public class Transfer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Location sourceLocation;

    @ManyToOne
    private Location destinationLocation;

    private String status;

    private LocalDateTime createdAt;

}