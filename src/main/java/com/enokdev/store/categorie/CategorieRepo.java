package com.enokdev.store.categorie;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategorieRepo extends JpaRepository<Categorie, Long> {
}
