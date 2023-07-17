package com.proj.letsgitit.repository;

import com.proj.letsgitit.entity.Project;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<Project, Long> {
    Page<Project> findByTitleContainingOrContentContaining(String title,
                                                             String content,
                                                             Pageable pageable);
}
