package com.stylehub.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stylehub.model.Product;
import com.stylehub.repository.ProductRepository;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

     // 🔥 ADD THIS METHOD
    public List<Product> getProducts(String place) {
        return productRepository.findByTagsContainingIgnoreCase(place);
    }

    public Product addProduct(Product product) {
        return productRepository.save(product);
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public List<Product> getByTag(String place) {

    if(place.equalsIgnoreCase("goa")) {
        return productRepository.findByTagsContainingIgnoreCase("beach");
    }
    else if(place.equalsIgnoreCase("manali")) {
        return productRepository.findByTagsContainingIgnoreCase("winter");
    }
    else if(place.equalsIgnoreCase("mumbai")) {
        return productRepository.findByTagsContainingIgnoreCase("party");
    }

    return productRepository.findByTagsContainingIgnoreCase(place);
}
}