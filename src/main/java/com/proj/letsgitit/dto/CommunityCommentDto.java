package com.proj.letsgitit.dto;

import com.proj.letsgitit.entity.CommunityComment;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CommunityCommentDto {
    private Long id;
    private String content;
    private String createdBy;
    private LocalDateTime lastModifiedTime;

    public CommunityComment toEntity() {
        return CommunityComment.builder()
                .content(content)
                .createdBy(createdBy)
                .build();
    }

    public CommunityCommentDto(CommunityComment comment) {
        id = comment.getId();
        content = comment.getContent();
        createdBy = comment.getCreatedBy();
        lastModifiedTime = comment.getLastModifiedTime();
    }
}
