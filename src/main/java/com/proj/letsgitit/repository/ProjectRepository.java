package com.proj.letsgitit.repository;

import com.proj.letsgitit.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<Project, Long> {
}
