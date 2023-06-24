package com.proj.letsgitit.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
public class CommunityCommentUpdateDto {
    private String content;

    @Builder
    public CommunityCommentUpdateDto(String content) {
        this.content = content;
    }
}
