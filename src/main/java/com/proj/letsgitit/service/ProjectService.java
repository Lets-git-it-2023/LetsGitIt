package com.proj.letsgitit.service;

import com.proj.letsgitit.dto.ProjectCreateDto;
import com.proj.letsgitit.entity.Project;
import com.proj.letsgitit.entity.User;
import com.proj.letsgitit.entity.UserProject;
import com.proj.letsgitit.repository.ProjectRepository;
import com.proj.letsgitit.repository.UserProjectRepository;
import com.proj.letsgitit.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class ProjectService {
    private final ProjectRepository projectRepository;
    private final UserProjectRepository userProjectRepository;
    private final UserRepository userRepository;

    // 프로젝트 생성
    public Long create(ProjectCreateDto dto) {
        // 가져온 정보로 프로젝트 생성
        Project project = projectRepository.save(dto.toEntity());
        // dto 안에 있는 멤버들 정보로 프로젝트-유저 관계 생성
        List<Long> userList = dto.getUsers();
        List<UserProject> userProjects = new ArrayList<>();
        for(Long id : userList) {
            UserProject userProject = createUserProject(project.getId(), id);
            userProjects.add(userProject);
        }
        return project.getId();
    }

    // 프로젝트 - 유저 관계 생성
    public UserProject createUserProject(Long projectId, Long userId) {
        Project project = findById(projectId);
        User user = userRepository.findByUserId(userId);
        UserProject userProject =
                UserProject.builder()
                        .project(project)
                        .user(user)
                        .build();
        userProjectRepository.save(userProject);
        return userProject;
    }

    // 프로젝트 조회
    public Project findById(Long id) {
        Project project = projectRepository.findById(id).orElseThrow((() ->
                new IllegalStateException("해당 프로젝트가 존재하지 않습니다.")));

        return project;
    }
}
