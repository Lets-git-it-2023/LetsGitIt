package com.proj.letsgitit.service;

import com.proj.letsgitit.dto.ToolDto;
import com.proj.letsgitit.entity.Project;
import com.proj.letsgitit.entity.Tool;
import com.proj.letsgitit.repository.ToolRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class ToolService {
    private final ToolRepository toolRepository;

    // 사용 툴 생성
    public Long save(Project project, ToolDto dto) {
        Tool tool = toolRepository.save(dto.toEntity());
        tool.setProject(project);
        return tool.getId();
    }

    // 사용 툴 삭제
    public Long delete(Long id) {
        Tool tool = toolRepository.findById(id)
                .orElseThrow((() -> new IllegalStateException("해당 언어가 존재하지 않습니다.")));
        toolRepository.delete(tool);
        return id;
    }

}
