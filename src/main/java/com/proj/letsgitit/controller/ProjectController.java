package com.proj.letsgitit.controller;

import com.proj.letsgitit.dto.ProjectCreateDto;
import com.proj.letsgitit.dto.ProjectUpdateDto;
import com.proj.letsgitit.entity.Project;
import com.proj.letsgitit.service.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequiredArgsConstructor
@RequestMapping("/project")
public class ProjectController {
    private final ProjectService projectService;

    // 프로젝트 게시판 조회
    @GetMapping("")
    public ResponseEntity<Object> getAll(@RequestParam(required = false, defaultValue = "", value = "searchText") String searchText,
                                         @RequestParam(required = false, defaultValue = "0", value = "page") int page,
                                         @RequestParam(required = false, defaultValue = "0", value="sortType") int sortType) {
        Page<Project> projects = projectService.findAll(searchText, searchText, page, sortType);

        return ResponseEntity.ok().body(projects);
    }

    // 프로젝트 1개 조회
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

    // 프로젝트 수정
    @PutMapping("/{id}")
    public ResponseEntity update(@RequestBody ProjectUpdateDto dto,
                                 @PathVariable Long id) {
        projectService.update(id, dto);
        return ResponseEntity.ok().body(id + ": 프로젝트가 수정되었습니다.");
    }
}
