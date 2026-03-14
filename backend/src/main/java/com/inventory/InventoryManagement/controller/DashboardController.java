package com.inventory.InventoryManagement.controller;


import com.inventory.InventoryManagement.dto.DashboardDTO;
import com.inventory.InventoryManagement.service.DashboardService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

    private final DashboardService dashboardService;

    public DashboardController(DashboardService dashboardService) {
        this.dashboardService = dashboardService;
    }

    @GetMapping
    public DashboardDTO getDashboard() {
        return dashboardService.getDashboardStats();
    }
}
