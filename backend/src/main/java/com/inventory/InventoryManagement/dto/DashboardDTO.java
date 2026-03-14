package com.inventory.InventoryManagement.dto;

import lombok.Data;

@Data
public class DashboardDTO {

    private Long totalProducts;
    private Long lowStockItems;
    private Long pendingReceipts;
    private Long pendingDeliveries;
    private Long scheduledTransfers;

    public DashboardDTO() {}

}
