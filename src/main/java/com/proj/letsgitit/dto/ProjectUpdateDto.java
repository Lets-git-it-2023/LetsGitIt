package com.proj.letsgitit.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Setter
@Getter
@NoArgsConstructor
public class ProjectUpdateDto {
    private String title;
    private String content;
    private List<String> languages;
    private List<String> tools;
    private String region;
    private LocalDateTime completeDate; // 목표완료일
    private String projectType1;
    private String projectType2;
    private String githubUrl;
    private String notionUrl;
    @Builder
    public ProjectUpdateDto(String title, String content, List<String> languages, List<String> tools, String region, LocalDateTime completeDate, String projectType1, String projectType2, String githubUrl, String notionUrl) {
        this.title = title;
        this.content = content;
        this.languages = languages;
        this.tools = tools;
        this.region = region;
        this.completeDate = completeDate;
        this.projectType1 = projectType1;
        this.projectType2 = projectType2;
        this.githubUrl = githubUrl;
        this.notionUrl = notionUrl;
    }
}
