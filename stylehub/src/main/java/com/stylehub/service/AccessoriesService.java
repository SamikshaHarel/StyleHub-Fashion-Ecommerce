package com.stylehub.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stylehub.model.Accessories;
import com.stylehub.repository.AccessoriesRepository;

@Service
public class AccessoriesService {

    @Autowired
    private AccessoriesRepository repository;

    public Accessories add(Accessories a) {
        return repository.save(a);
    }

    public List<Accessories> getByPlace(String place) {

        if(place.equalsIgnoreCase("beach")) {
            return repository.findByTagsContaining("beach");
        }
        else if(place.equalsIgnoreCase("wedding")) {
            return repository.findByTagsContaining("wedding");
        }

        return repository.findAll();
    }
}