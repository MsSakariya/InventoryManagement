package com.inventory.InventoryManagement.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.ManyToOne;
import lombok.Data;
import jakarta.persistence.*;

@Entity
@Data
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String sku;

    private String unit;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;
}