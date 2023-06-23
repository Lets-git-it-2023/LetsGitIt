package com.proj.letsgitit.dto;

import com.proj.letsgitit.entity.Community;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class CommunityDto {
    private Long id;
    private String title;
    private String content;
    private String createdBy;
    private int countVisit;

    @Builder
    public CommunityDto(String title, String content, String createdBy, int countVisit) {
        this.title = title;
        this.content = content;
        this.createdBy = createdBy;
        this.countVisit = countVisit;
    }

    public CommunityDto(Community community) {
        id = community.getId();
        title = community.getTitle();
        content = community.getContent();
        createdBy = community.getCreatedBy();
        countVisit = community.getCountVisit();
    }

    public void updateVisit(int countVisit) {
        this.countVisit = countVisit;
    }
}
