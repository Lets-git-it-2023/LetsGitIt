package com.proj.letsgitit.service;

import com.proj.letsgitit.dto.CommunityCommentDto;
import com.proj.letsgitit.entity.Community;
import com.proj.letsgitit.entity.CommunityComment;
import com.proj.letsgitit.entity.User;
import com.proj.letsgitit.repository.CommunityCommentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class CommunityCommentService {

    private final CommunityCommentRepository communityCommentRepository;

    // 댓글 등록
    public Long save(User user, Community community, CommunityCommentDto dto) {
        dto.setCreatedBy(user.getName());
        CommunityComment comment = communityCommentRepository.save(dto.toEntity());

        comment.setCommunity(community);
        comment.setUser(user);

        return community.getId();
    }

    // 게시글에 달린 댓글 전체 조회
    public List<CommunityCommentDto> getCommentList(Long id) {
        List<CommunityComment> communityComments = communityCommentRepository.findByCommunity_IdOrderByCreatedTime(id);

        List<CommunityCommentDto> dtoList = new ArrayList<>();

        for(CommunityComment comment : communityComments) {
            CommunityCommentDto commentDto = new CommunityCommentDto(comment);

            dtoList.add(commentDto);
        }
        return dtoList;
    }

}
