package com.stylehub.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stylehub.model.Makeup;
import com.stylehub.repository.MakeupRepository;

@Service
public class MakeupService {

    @Autowired
    private MakeupRepository repository;

    // POST (add)
    public Makeup add(Makeup m) {
        return repository.save(m);
    }

    // GET (recommend)
    public List<Makeup> getByPlace(String place) {

        if(place.equalsIgnoreCase("beach")) {
            return repository.findByTagsContaining("beach");
        }
        else if(place.equalsIgnoreCase("wedding")) {
            return repository.findByTagsContaining("wedding");
        }
        else if(place.equalsIgnoreCase("party")) {
            return repository.findByTagsContaining("party");
        }

        return repository.findAll();
    }
}