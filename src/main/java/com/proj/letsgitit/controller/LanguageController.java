package com.proj.letsgitit.controller;

import com.proj.letsgitit.dto.LangDto;
import com.proj.letsgitit.entity.Project;
import com.proj.letsgitit.service.LanguageService;
import com.proj.letsgitit.service.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequiredArgsConstructor
@RequestMapping("/project/{projectId}")
public class LanguageController {
    private final LanguageService languageService;
    private final ProjectService projectService;
    // 사용언어 추가
    @PostMapping("/lang")
    public ResponseEntity save(@PathVariable Long projectId,
                                @RequestBody LangDto dto) {
        Project project = projectService.findById(projectId);
        Long id = languageService.save(project, dto);
        return ResponseEntity.ok().body(id + ": 언어가 등록되었습니다");
    }
    @DeleteMapping("/lang/{id}")
    // 사용언어 삭제
    public ResponseEntity delete(@PathVariable Long id) {
        Long result = languageService.delete(id);
        return ResponseEntity.ok().body(result + ": 언어가 삭제되었습니다");
    }
}
