package com.proj.letsgitit.repository;

import com.proj.letsgitit.entity.Community;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CommunityRepository extends JpaRepository<Community, Long> {

    @Query("SELECT count(*) from CommunityComment c where c.community.id = :id")
    int countByCommunityComments(@Param("id") Long id);

}
