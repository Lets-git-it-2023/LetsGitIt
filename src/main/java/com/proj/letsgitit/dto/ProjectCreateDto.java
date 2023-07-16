package com.proj.letsgitit.dto;

import com.proj.letsgitit.entity.Language;
import com.proj.letsgitit.entity.Tool;
import com.proj.letsgitit.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProjectCreateDto {
    // 팀 매칭 게시글에서 프로젝트 글이 생성될 때 가져오는 정보들
    private String title;
    private Long leaderId;
    private List<User> users;
    private List<Language> languages;
    private List<Tool> tools;
}
