package com.proj.letsgitit.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.proj.letsgitit.dto.ProjectUpdateDto;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Project extends BaseTimeEntity { // 진행중인 프로젝트 게시판
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="project_id")
    private Long id;
    private String title; //프로젝트 제목
    private String content;
    @Column(name = "leader_id")
    private Long leaderId; // 팀장 아이디
    @OneToMany(mappedBy = "project", cascade = CascadeType.REMOVE)
    @JsonManagedReference
    private List<Language> languages = new ArrayList<>();
    @OneToMany(mappedBy = "project", cascade = CascadeType.REMOVE)
    @JsonManagedReference
    private List<Tool> tools = new ArrayList<>();
    private String region;
    private LocalDateTime completeDate; // 목표완료일
    @Column(name="project_type1")
    private String projectType1;
    @Column(name="project_type2")
    private String projectType2;
    @Column(name="github_url")
    private String githubUrl;
    @Column(name="notion_url")
    private String notionUrl;

    @OneToMany(mappedBy = "project", cascade = CascadeType.REMOVE)
    @JsonManagedReference
    private List<UserProject> userProjects = new ArrayList<>(); //소속된 팀원 및 팀장

    public void update(ProjectUpdateDto dto) {
        this.title = dto.getTitle();
        this.content = dto.getContent();
        this.completeDate = dto.getCompleteDate();
        this.projectType1 = dto.getProjectType1();
        this.projectType2 = dto.getProjectType2();
        this.region = dto.getRegion();
        this.notionUrl = dto.getNotionUrl();
        this.githubUrl = dto.getGithubUrl();
    }
}
