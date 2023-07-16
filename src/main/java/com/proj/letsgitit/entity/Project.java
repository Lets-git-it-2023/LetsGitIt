package com.proj.letsgitit.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@Table(name="project")
public class Project extends BaseTimeEntity { // 진행중인 프로젝트 게시판
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="project_id")
    private Long id;
    private String title; //프로젝트 제목
    private String content;
    private Long leader; // 팀장 아이디
    @OneToMany(mappedBy = "project", cascade = CascadeType.REMOVE)
    @JsonManagedReference
    private List<Language> languages = new ArrayList<>();
    @OneToMany(mappedBy = "project", cascade = CascadeType.REMOVE)
    @JsonManagedReference
    private List<Tool> tools = new ArrayList<>();
    private String region;
    @Column(name="meeting_type")
    private String meetingType;
    @Column(name="github_url")
    private String githubUrl;
    @Column(name="notion_url")
    private String notionUrl;


}
