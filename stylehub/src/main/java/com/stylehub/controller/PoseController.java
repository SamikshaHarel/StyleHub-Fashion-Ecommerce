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

import com.stylehub.model.Pose;
import com.stylehub.service.PoseService;

@RestController
@RequestMapping("/api/poses")
@CrossOrigin
public class PoseController {

    @Autowired
    private PoseService poseService;

    // POST
    @PostMapping
    public Pose addPose(@RequestBody Pose pose) {
        return poseService.addPose(pose);
    }

    // GET ALL
    @GetMapping
    public List<Pose> getAllPoses() {
        return poseService.getAllPoses();
    }

    // GET BY TAG
    @GetMapping("/recommend")
    public List<Pose> getPoses(@RequestParam String place) {
        return poseService.getPoses(place);
    }
}