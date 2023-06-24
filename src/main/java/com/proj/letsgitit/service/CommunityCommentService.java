package com.proj.letsgitit.service;

import com.proj.letsgitit.dto.CommunityCommentDto;
import com.proj.letsgitit.entity.Community;
import com.proj.letsgitit.entity.CommunityComment;
import com.proj.letsgitit.entity.User;
import com.proj.letsgitit.repository.CommunityCommentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class CommunityCommentService {

    private final CommunityCommentRepository communityCommentRepository;

    public Long save(User user, Community community, CommunityCommentDto dto) {
        CommunityComment comment = communityCommentRepository.save(dto.toEntity());

        comment.setCommunity(community);
        comment.setUser(user);

        return community.getId();
    }

}
