package com.stylehub.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stylehub.model.Makeup;

public interface MakeupRepository extends JpaRepository<Makeup, Long> {

    List<Makeup> findByTagsContaining(String tags);
}