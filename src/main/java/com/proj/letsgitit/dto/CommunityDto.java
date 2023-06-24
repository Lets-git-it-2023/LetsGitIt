package com.proj.letsgitit.dto;

import com.proj.letsgitit.entity.Community;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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

    public Community toEntity() {
        return Community.builder()
                .title(title)
                .content(content)
                .build();
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
