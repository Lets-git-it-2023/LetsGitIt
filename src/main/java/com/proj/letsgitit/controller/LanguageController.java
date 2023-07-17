package com.proj.letsgitit.controller;

import com.proj.letsgitit.service.LanguageService;
import com.proj.letsgitit.service.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("/project/{projectId}")
public class LanguageController {
    private final LanguageService languageService;
    private final ProjectService projectService;
    // 사용언어 수정
    //@PostMapping("/lang")
    //public ResponseEntity save(@PathVariable Long projectId,
    //                            @RequestParam List<String> lang) {
        //Long id = languageService.save(projectId, lang);
    //    return ResponseEntity.ok().body(id + ": 프로젝트에 사용 언어가 추가 및 수정되었습니다");
    //}
}
