package com.stylehub.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/outfits")
@CrossOrigin(origins = "*")
public class OutfitController {

    @PostMapping("/recommend")
    public ResponseEntity<?> recommend(@RequestBody Map<String, String> request) {

        String category = request.get("category");

        List<String> outfits = new ArrayList<>();

        if (category == null) {
            return ResponseEntity.badRequest().body("Category is required");
        }

        switch (category.toLowerCase()) {

            // 🎬 BOLLYWOOD
            case "bollywood":
                outfits = List.of(
                        "Ethnic saree glam look",
                        "Bollywood red carpet dress",
                        "Kurta palazzo modern fusion",
                        "Airport casual chic look"
                );
                break;

            // 🎥 HOLLYWOOD
            case "hollywood":
                outfits = List.of(
                        "Red carpet luxury gown",
                        "Black formal blazer suit",
                        "Minimal chic outfit",
                        "Streetwear oversized hoodie look"
                );
                break;

            // 🎤 K-POP
            case "k-pop":
                outfits = List.of(
                        "Oversized aesthetic outfit",
                        "Stage performance fashion look",
                        "Korean streetwear baggy jeans",
                        "Pastel soft girl/boy style"
                );
                break;

            // 🌍 WESTERN FASHION
            case "western fashion":
                outfits = List.of(
                        "Casual jeans and crop top",
                        "Denim jacket street style",
                        "Basic clean minimal outfit"
                );
                break;

            default:
                outfits = List.of(
                        "Basic stylish outfit (no category matched)"
                );
        }

        Map<String, Object> response = new HashMap<>();
        response.put("category", category);
        response.put("outfits", outfits);

        return ResponseEntity.ok(response);
    }
}