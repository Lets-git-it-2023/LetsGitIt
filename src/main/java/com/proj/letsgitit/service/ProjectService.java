package com.proj.letsgitit.service;

import com.proj.letsgitit.entity.Project;
import com.proj.letsgitit.repository.ProjectRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class ProjectService {
    private final ProjectRepository projectRepository;
    
    public Project findById(Long id) {
        Project project = projectRepository.findById(id).orElseThrow((() ->
                new IllegalStateException("해당 프로젝트가 존재하지 않습니다.")));

        return project;
    }
}
