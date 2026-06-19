package com.stylehub.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.stylehub.model.Product;
import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {

    List<Product> findByTagsContainingIgnoreCase(String tag);
}