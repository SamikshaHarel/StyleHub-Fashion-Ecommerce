package com.stylehub.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.stylehub.model.StyleResponse;
import com.stylehub.service.StyleService;

@RestController
@RequestMapping("/api/style")
@CrossOrigin
public class StyleController {

    @Autowired
    private StyleService styleService;

    @GetMapping
    public StyleResponse getStyle(@RequestParam String place) {
        return styleService.getFullStyle(place);
    }
}