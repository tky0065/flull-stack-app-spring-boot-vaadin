package com.enokdev.store.product;

import com.vaadin.hilla.BrowserCallable;
import jakarta.annotation.security.PermitAll;
import jakarta.persistence.EntityNotFoundException;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@BrowserCallable
@RequiredArgsConstructor
@PermitAll
public class ProductService {

    private final ProductRepo productRepo;



    public Product save(ProductDto productDto) {

        Product product = ProductDto.toProduct(productDto);
        return productRepo.save(product);
    }

    public List<ProductDto> findAllProducts() {
        return productRepo.findAll().stream().map(ProductDto::toProductDto).collect(Collectors.toList());
    }

    public ProductDto findProductById(Long id) {
        return productRepo.findById(id).map(ProductDto::toProductDto).orElseThrow(() -> new EntityNotFoundException("Product not found"));
    }

    public void deleteProductById(Long id) {
        productRepo.deleteById(id);
    }
}
