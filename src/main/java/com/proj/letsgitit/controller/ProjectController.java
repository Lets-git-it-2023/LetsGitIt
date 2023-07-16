package com.proj.letsgitit.controller;

import com.proj.letsgitit.dto.ProjectCreateDto;
import com.proj.letsgitit.entity.Project;
import com.proj.letsgitit.service.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequiredArgsConstructor
@RequestMapping("/project")
public class ProjectController {
    private final ProjectService projectService;

    // 프로젝트 조회
    @GetMapping("/{id}")
    public ResponseEntity find(@PathVariable Long id) {
        Project project = projectService.findById(id);

        return ResponseEntity.ok().body(project);
    }

    // 프로젝트 생성
    @PostMapping("")
    public ResponseEntity create(@RequestBody ProjectCreateDto dto) {
        Long id = projectService.create(dto);
        return ResponseEntity.ok().body(id + ": 프로젝트가 생성되었습니다.");
    }
}
