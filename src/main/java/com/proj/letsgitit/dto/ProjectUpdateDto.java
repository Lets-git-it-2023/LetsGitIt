package com.proj.letsgitit.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
public class ProjectUpdateDto {
    private String title;
    private String content;
    private String region;
    private String meetingType;
    private String githubUrl;
    private String notionUrl;
    @Builder
    public ProjectUpdateDto(String title, String content, String region, String meetingType, String githubUrl, String notionUrl) {
        this.title = title;
        this.content = content;
        this.region = region;
        this.meetingType = meetingType;
        this.githubUrl = githubUrl;
        this.notionUrl = notionUrl;
    }
}
