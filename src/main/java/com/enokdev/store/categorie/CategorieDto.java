package com.enokdev.store.categorie;

import com.enokdev.store.product.Product;
import com.enokdev.store.product.ProductDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CategorieDto {

    private Long id;

    private String nom;
    private String description;


    public static Categorie toCategorie(CategorieDto categorieDto) {
        return Categorie.builder()
                .id(categorieDto.getId())
                .nom(categorieDto.getNom())
                .description(categorieDto.getDescription())

                .build();
    }


    public static CategorieDto toCategorieDto(Categorie categorie) {
        return CategorieDto.builder()
                .id(categorie.getId())
                .nom(categorie.getNom())
                .description(categorie.getDescription())
                .build();
    }
}
