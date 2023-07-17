package com.proj.letsgitit.dto;

import java.time.LocalDateTime;
import java.util.List;

public class ProjectResponseDto {
    private Long id;
    private String title;
    private String cotent;
    private Long leaderId;
    private List<String> languages;
    private List<String> tools;
    private String region;
    private LocalDateTime completeDate; // 목표완료일
    private String projectType1;
    private String projectType2;
    private String githubUrl;
    private String notionUrl;

}
