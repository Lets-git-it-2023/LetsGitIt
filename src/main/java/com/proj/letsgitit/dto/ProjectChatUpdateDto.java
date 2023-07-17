package com.proj.letsgitit.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
public class ProjectChatUpdateDto {
    private String content;

    @Builder
    public ProjectChatUpdateDto(String content) {
        this.content = content;
    }
}
