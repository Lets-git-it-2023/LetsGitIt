package com.proj.letsgitit.controller;

import com.proj.letsgitit.dto.LangDto;
import com.proj.letsgitit.service.LanguageService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequiredArgsConstructor
@RequestMapping("/lang")
public class LanguageController {
    private final LanguageService languageService;

    // 사용언어 추가
    @PostMapping("/add")
    public ResponseEntity save(@RequestBody LangDto dto) {
        Long id = languageService.save(dto);
        return ResponseEntity.ok().body(id + ": 언어가 등록되었습니다");
    }
    @DeleteMapping("/delete/{id}")
    // 사용언어 삭제
    public ResponseEntity delete(@PathVariable Long id) {
        Long result = languageService.delete(id);
        return ResponseEntity.ok().body(result + ": 언어가 삭제되었습니다");
    }
}
