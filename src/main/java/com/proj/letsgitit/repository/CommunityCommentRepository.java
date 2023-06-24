package com.proj.letsgitit.repository;

import com.proj.letsgitit.entity.CommunityComment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommunityCommentRepository extends JpaRepository<CommunityComment, Long> {

    public List<CommunityComment> findByCommunity_IdOrderByCreatedTime(Long id);
}
