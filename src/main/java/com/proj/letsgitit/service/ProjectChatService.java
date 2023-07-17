package com.proj.letsgitit.service;

import com.proj.letsgitit.dto.ProjectChatDto;
import com.proj.letsgitit.dto.ProjectChatUpdateDto;
import com.proj.letsgitit.entity.Project;
import com.proj.letsgitit.entity.ProjectChat;
import com.proj.letsgitit.entity.User;
import com.proj.letsgitit.repository.ProjectChatRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class ProjectChatService {
    private final ProjectChatRepository projectChatRepository;

    // 채팅 등록
    public Long save(User user, Project project, ProjectChatDto dto) {
        dto.setCreatedBy(user.getName());
        ProjectChat projectChat = projectChatRepository.save(dto.toEntity());

        projectChat.setProject(project);
        projectChat.setUser(user);

        return project.getId();
    }
    // 채팅 수정
    public Long update(Long id, ProjectChatUpdateDto dto) {
        ProjectChat chat = projectChatRepository.findById(id).orElseThrow((() ->
                new IllegalStateException("해당 채팅이 존재하지 않습니다."))
        );
        chat.update(dto);
        return chat.getId();
    }
    // 채팅 삭제

    // 프로젝트의 전체 채팅 내열 조회
    public List<ProjectChatDto> getChats(Long id) {
        List<ProjectChat> chats = projectChatRepository.findByProject_IdOrderByCreatedTimeAsc(id);
        List<ProjectChatDto> dtos = new ArrayList<>();

        for (ProjectChat chat : chats) {
            dtos.add(new ProjectChatDto(chat));
        }
        return dtos;
    }
}
