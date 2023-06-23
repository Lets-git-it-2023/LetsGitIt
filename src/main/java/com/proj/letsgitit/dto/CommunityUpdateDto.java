package com.proj.letsgitit.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
public class CommunityUpdateDto {
    private String title;
    private String content;

    @Builder
    public CommunityUpdateDto(String title, String content) {
        this.title = title;
        this.content = content;
    }
}
