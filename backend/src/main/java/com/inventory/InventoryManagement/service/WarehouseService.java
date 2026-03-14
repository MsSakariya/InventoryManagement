package com.inventory.InventoryManagement.service;

import com.inventory.InventoryManagement.entity.Warehouse;

import java.util.List;

public interface WarehouseService {

    Warehouse createWarehouse(Warehouse warehouse);

    List<Warehouse> getWarehouses();
}
