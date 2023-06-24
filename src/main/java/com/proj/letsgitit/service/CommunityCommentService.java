package com.proj.letsgitit.service;

import com.proj.letsgitit.dto.CommunityCommentDto;
import com.proj.letsgitit.dto.CommunityCommentUpdateDto;
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
    
    // 댓글 수정
    public Long update(Long id, CommunityCommentUpdateDto dto) {
        CommunityComment comment = communityCommentRepository.findById(id).orElseThrow((() ->
                        new IllegalStateException("해당 댓글이 존재하지 않습니다."))
        );
        comment.update(dto);
        return comment.getId();
    }

    // 댓글 삭제
    public Long delete(Long id) {
        CommunityComment comment = communityCommentRepository.findById(id).orElseThrow((() ->
                new IllegalStateException("해당 댓글이 존재하지 않습니다."))
        );
        communityCommentRepository.delete(comment);
        return id;
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
