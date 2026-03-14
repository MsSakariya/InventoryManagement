package com.inventory.InventoryManagement.service;

import com.inventory.InventoryManagement.dto.ProductDTO;
import com.inventory.InventoryManagement.entiry.Category;
import com.inventory.InventoryManagement.entiry.Product;
import com.inventory.InventoryManagement.repository.CategoryRepository;
import com.inventory.InventoryManagement.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;

    public ProductServiceImpl(ProductRepository productRepository,
                              CategoryRepository categoryRepository) {
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
    }

    @Override
    public ProductDTO createProduct(ProductDTO dto) {

        Product product = new Product();

        product.setName(dto.getName());
        product.setSku(dto.getSku());
        product.setUnit(dto.getUnit());

        Category category = categoryRepository.findById(dto.getCategoryId())
                .orElseThrow();

        product.setCategory(category);

        productRepository.save(product);

        dto.setId(product.getId());

        return dto;
    }

    @Override
    public List<ProductDTO> getAllProducts() {
        return productRepository.findAll()
                .stream()
                .map(p -> {
                    ProductDTO dto = new ProductDTO();
                    dto.setId(p.getId());
                    dto.setName(p.getName());
                    dto.setSku(p.getSku());
                    dto.setUnit(p.getUnit());
                    return dto;
                })
                .toList();
    }

    public ProductDTO getProduct(Long id) {
        Product product = productRepository.findById(id).orElseThrow();

        ProductDTO dto = new ProductDTO();
        dto.setId(product.getId());
        dto.setName(product.getName());
        dto.setSku(product.getSku());
        dto.setUnit(product.getUnit());

        return dto;
    }

    @Override
    public ProductDTO updateProduct(Long id, ProductDTO dto) {

        Product product = productRepository.findById(id).orElseThrow();

        product.setName(dto.getName());
        product.setSku(dto.getSku());
        product.setUnit(dto.getUnit());

        productRepository.save(product);

        return dto;
    }

    @Override
    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }
}