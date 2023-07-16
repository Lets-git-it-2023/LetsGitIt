package com.proj.letsgitit.controller;

import com.proj.letsgitit.dto.ToolDto;
import com.proj.letsgitit.entity.Project;
import com.proj.letsgitit.service.ProjectService;
import com.proj.letsgitit.service.ToolService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequiredArgsConstructor
@RequestMapping("/project/{projectId}")
public class ToolController {
    private final ToolService toolService;
    private final ProjectService projectService;

    // 사용 툴 추가
    @PostMapping("/tool")
    public ResponseEntity save(@PathVariable Long projectId,
                               @RequestBody ToolDto dto) {
        Project project = projectService.findById(projectId);
        Long id = toolService.save(project, dto);
        return ResponseEntity.ok().body(id + ": 툴이 등록되었습니다");
    }
    @DeleteMapping("/tool/{id}")
    // 사용 툴 삭제
    public ResponseEntity delete(@PathVariable Long id) {
        Long result = toolService.delete(id);
        return ResponseEntity.ok().body(result + ": 툴이 삭제되었습니다");
    }
}
