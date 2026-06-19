package com.stylehub.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.stylehub.model.Accessories;
import com.stylehub.service.AccessoriesService;

@RestController
@RequestMapping("/api/accessories")
@CrossOrigin
public class AccessoriesController {

    @Autowired
    private AccessoriesService service;

    // POST API (insert)
    @PostMapping
    public Accessories add(@RequestBody Accessories a) {
        return service.add(a);
    }

    // GET API (recommend)
    @GetMapping("/recommend")
    public List<Accessories> get(@RequestParam String place) {
        return service.getByPlace(place);
    }
}