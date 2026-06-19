package com.stylehub.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stylehub.model.Pose;

public interface PoseRepository extends JpaRepository<Pose, Long> {

    List<Pose> findByTagsContaining(String tags);

}