package com.proj.letsgitit.dto;

import com.proj.letsgitit.entity.CommunityComment;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CommunityCommentDto {
    private Long id;
    private String content;
    private String createdBy;

    public CommunityComment toEntity() {
        return CommunityComment.builder()
                .content(content)
                .build();
    }
}
