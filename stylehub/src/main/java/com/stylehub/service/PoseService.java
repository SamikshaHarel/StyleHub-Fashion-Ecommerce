package com.stylehub.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stylehub.model.Pose;
import com.stylehub.repository.PoseRepository;

@Service
public class PoseService {

    @Autowired
    private PoseRepository poseRepository;

    // INSERT
    public Pose addPose(Pose pose) {
        return poseRepository.save(pose);
    }

    // GET ALL
    public List<Pose> getAllPoses() {
        return poseRepository.findAll();
    }

    // GET BY TAG
    public List<Pose> getPoses(String place) {

    if(place.equalsIgnoreCase("beach")) {
        return poseRepository.findByTagsContaining("beach");
    }
    else if(place.equalsIgnoreCase("wedding")) {
        return poseRepository.findByTagsContaining("traditional");
    }
    else if(place.equalsIgnoreCase("party")) {
        return poseRepository.findByTagsContaining("party");
    }

    return poseRepository.findAll();
}
}