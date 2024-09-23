package com.enokdev.store.product;

import com.enokdev.store.categorie.Categorie;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import java.util.Date;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;
    private int price;
    @CreatedDate
    private Date createdAt;
    @LastModifiedDate
    private Date updatedAt;
    @ManyToOne
    @JoinColumn(name = "categorie_id")
    private Categorie categorie;
}
