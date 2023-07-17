package com.proj.letsgitit.repository;

import com.proj.letsgitit.entity.ProjectChat;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProjectChatRepository extends JpaRepository<ProjectChat, Long> {
    List<ProjectChat> findByProject_IdOrderByCreatedTimeAsc(Long id);
}
