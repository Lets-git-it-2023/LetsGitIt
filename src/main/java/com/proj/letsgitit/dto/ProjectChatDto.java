package com.proj.letsgitit.dto;

import com.proj.letsgitit.entity.ProjectChat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProjectChatDto {
    private String content;
    private String createdBy;
    private LocalDateTime createdTime;

    public ProjectChat toEntity() {
        return ProjectChat.builder()
                .content(content)
                .createdBy(createdBy)
                .build();
    }

    public ProjectChatDto(ProjectChat chat) {
        content = chat.getContent();
        createdBy = chat.getCreatedBy();
        createdTime = chat.getCreatedTime();
    }
}
