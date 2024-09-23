package com.enokdev.store.product;

import com.enokdev.store.categorie.Categorie;

import com.enokdev.store.categorie.CategorieDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data

@AllArgsConstructor
@Builder
@NoArgsConstructor

public class ProductDto {


    private Long id;

    private String name;
    private String description;
    private int price;
    private Long categoryId;


    public static Product toProduct(ProductDto productDto) {
        return Product.builder()
                .id(productDto.getId())
                .name(productDto.getName())
                .description(productDto.getDescription())
                .price(productDto.getPrice())
                .categorie(Categorie.builder().id(productDto.getCategoryId()).build())
                .build();
    }


    public static ProductDto toProductDto(Product product) {
        return ProductDto.builder()
                .id(product.getId())
                .name(product.getName())
                .description(product.getDescription())
                .price(product.getPrice())
                .categoryId(product.getCategorie().getId())
                .build();
    }

}
