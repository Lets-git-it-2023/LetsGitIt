package com.proj.letsgitit.repository;

import com.proj.letsgitit.entity.Community;
import com.proj.letsgitit.entity.CommunityScrap;
import com.proj.letsgitit.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CommunityScrapRepository extends JpaRepository<CommunityScrap, Long> {
    Optional<CommunityScrap> findByUserAndCommunity(User user, Community community);
}
