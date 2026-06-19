package com.stylehub.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.stylehub.model.Makeup;
import com.stylehub.service.MakeupService;

@RestController
@RequestMapping("/api/makeup")
@CrossOrigin
public class MakeupController {

    @Autowired
    private MakeupService service;

    // POST API
    @PostMapping
    public Makeup add(@RequestBody Makeup m) {
        return service.add(m);
    }

    // GET API
    @GetMapping("/recommend")
    public List<Makeup> get(@RequestParam String place) {
        return service.getByPlace(place);
    }
}