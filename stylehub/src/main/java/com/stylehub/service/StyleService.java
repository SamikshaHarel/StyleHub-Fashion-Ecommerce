package com.stylehub.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stylehub.model.StyleResponse;

@Service
public class StyleService {

    @Autowired
    private ProductService productService;

    @Autowired
    private PoseService poseService;

    @Autowired
    private AccessoriesService accessoriesService;

    @Autowired
    private MakeupService makeupService;

    public StyleResponse getFullStyle(String place) {

        StyleResponse response = new StyleResponse();

        response.setOutfits(productService.getProducts(place));
        response.setPoses(poseService.getPoses(place));
        response.setAccessories(accessoriesService.getByPlace(place));
        response.setMakeup(makeupService.getByPlace(place));

        return response;
    }
}