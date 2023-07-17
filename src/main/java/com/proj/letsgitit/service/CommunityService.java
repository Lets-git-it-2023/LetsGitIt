package com.proj.letsgitit.service;

import com.proj.letsgitit.dto.CommunityDto;
import com.proj.letsgitit.dto.CommunityUpdateDto;
import com.proj.letsgitit.entity.Community;
import com.proj.letsgitit.entity.User;
import com.proj.letsgitit.repository.CommunityRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class CommunityService {
    private final CommunityRepository communityRepository;

    public Long save(User user, CommunityDto dto) {
        dto.setCreatedBy(user.getName());
        log.info("=> 작성자 이름 저장");
        Community community = communityRepository.save(dto.toEntity());
        log.info("=> 글 저장");
        community.setUser(user);
        log.info("=> 멤버 저장");
        return community.getId();
    }

    public Long update(Long id, CommunityUpdateDto dto) {
        Community community = communityRepository.findById(id).orElseThrow((() ->
                new IllegalStateException("해당 게시글이 존재하지 않습니다.")));
        community.update(dto);

        return community.getId();
    }
    // 페이징 구현 전체 글 조회
    public List<Community> findAll() {
        return communityRepository.findAll();
    }
    public Page<Community> findCommunity(String title, String content, int page, int sortType) {
        Pageable pageable = null;
        switch (sortType){
            case 0: // 최신순
                pageable = PageRequest.of(page, 9, Sort.by("id").ascending());
                break;
            case 1: // 댓글순
                pageable = PageRequest.of(page, 9, Sort.by("countComment").descending());
                break;
            case 2: // 스크랩순
                pageable = PageRequest.of(page, 9, Sort.by("countScrap").descending());
                break;
            case 3: // 조회수순
                pageable = PageRequest.of(page, 9, Sort.by("countVisit").descending());
                break;
        }

        return communityRepository.findByTitleContainingOrContentContaining(title, content, pageable);
    }
    public void updateVisit(Long id, CommunityDto dto) {
        Community community = communityRepository.findById(id).orElseThrow((() ->
                new IllegalStateException("해당 게시글이 존재하지 않습니다.")));

        community.updateVisit(dto.getCountVisit());
    }
    public void updateScrap(Long id, CommunityDto dto) {
        Community community = communityRepository.findById(id).orElseThrow((() ->
                new IllegalStateException("해당 게시글이 존재하지 않습니다.")));

        community.updateScrap(dto.getCountScrap());
    }

    public Long delete(Long id) {
        Community community = communityRepository.findById(id).orElseThrow((() ->
                new IllegalStateException("해당 게시글이 존재하지 않습니다.")));
        communityRepository.delete(community);
        return id;
    }

    public CommunityDto findById(Long id) {
        Community community = communityRepository.findById(id).get();
        CommunityDto dto = new CommunityDto(community);
        return dto;
    }

    public Community getCommunity(Long id) {
        Community community = communityRepository.findById(id).get();
        return community;
    }

    public int count(Long id) {
        return communityRepository.countByCommunityComments(id);
    }
}
