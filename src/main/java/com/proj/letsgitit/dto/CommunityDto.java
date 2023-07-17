package com.proj.letsgitit.dto;

import com.proj.letsgitit.entity.Community;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CommunityDto {
    private Long id;
    private String title;
    private String content;
    private String createdBy;
    private int countVisit;
    private int countComment;
    private int countScrap;
    private LocalDateTime lastModifiedTime;

    public Community toEntity() {
        return Community.builder()
                .title(title)
                .content(content)
                .createdBy(createdBy)
                .build();
    }

    // response
    public CommunityDto(Community community) {
        id = community.getId();
        title = community.getTitle();
        content = community.getContent();
        createdBy = community.getCreatedBy();
        countVisit = community.getCountVisit();
        countComment = community.getCountComment();
        countScrap = community.getCountScrap();
        lastModifiedTime = community.getLastModifiedTime();
    }

    public void updateVisit(int countVisit) {
        this.countVisit = countVisit;
    }
}
