package com.enokdev.store.categorie;


import com.vaadin.hilla.BrowserCallable;
import jakarta.annotation.security.PermitAll;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@BrowserCallable
@PermitAll
@RequiredArgsConstructor
public class CategorieService {


    private final CategorieRepo categorieRepo;





    public Categorie saveCategorie(CategorieDto categorieDto) {

        Categorie categorie = CategorieDto.toCategorie(categorieDto);
        return categorieRepo.save(categorie);

    }

    public CategorieDto getCategorieById(Long id) {
        return categorieRepo.findById(id).map(CategorieDto::toCategorieDto).orElseThrow(() -> new EntityNotFoundException("Categorie not found"));
    }

    public List<CategorieDto> getAllCategories() {
        return  categorieRepo.findAll().stream().map(CategorieDto::toCategorieDto).collect(Collectors.toList());
    }

    public void deleteCategorie(Long id) {
        categorieRepo.deleteById(id);
    }

}
