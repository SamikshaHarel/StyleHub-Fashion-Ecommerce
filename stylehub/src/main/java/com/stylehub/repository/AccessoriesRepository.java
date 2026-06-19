package com.stylehub.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stylehub.model.Accessories;

public interface AccessoriesRepository extends JpaRepository<Accessories, Long> {

    List<Accessories> findByTagsContaining(String tags);
}