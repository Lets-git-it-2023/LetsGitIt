package com.proj.letsgitit.service;

import com.proj.letsgitit.dto.CommunityScrapDto;
import com.proj.letsgitit.entity.Community;
import com.proj.letsgitit.entity.CommunityScrap;
import com.proj.letsgitit.entity.User;
import com.proj.letsgitit.repository.CommunityRepository;
import com.proj.letsgitit.repository.CommunityScrapRepository;
import com.proj.letsgitit.repository.UserRepository;
import com.sun.jdi.request.DuplicateRequestException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class CommunityScrapService {
    private final CommunityScrapRepository scrapRepository;
    private final UserRepository userRepository;
    private final CommunityRepository communityRepository;
    // 스크랩 생성
    public void save(CommunityScrapDto dto) throws Exception {
        User user = userRepository.findById(dto.getUserId())
                .orElseThrow(()-> new IllegalArgumentException("해당 유저가 존재하지 않습니다. user Id : " + dto.getUserId()));
        Community community = communityRepository.findById(dto.getCommunityId())
                .orElseThrow(()-> new IllegalArgumentException("해당 게시글가 존재하지 않습니다. community Id: " + dto.getCommunityId()));

        // 이미 스크랩되어있으면 에러
        if(scrapRepository.findByUserAndCommunity(user, community).isPresent()) {
            throw new DuplicateRequestException("이미 스크랩한 글입니다.");
        }

        CommunityScrap scrap = CommunityScrap.builder()
                .user(user)
                .community(community)
                .build();

        scrapRepository.save(scrap);
    }

    // 스크랩 취소
    public void delete(CommunityScrapDto dto) {
        User user = userRepository.findById(dto.getUserId())
                .orElseThrow(()-> new IllegalArgumentException("해당 유저가 존재하지 않습니다. user Id : " + dto.getUserId()));
        Community community = communityRepository.findById(dto.getCommunityId())
                .orElseThrow(()-> new IllegalArgumentException("해당 게시글가 존재하지 않습니다. community Id: " + dto.getCommunityId()));
        CommunityScrap scrap = scrapRepository.findByUserAndCommunity(user, community)
                .orElseThrow(() -> new IllegalArgumentException("취소할 스크랩이 없습니다."));

        scrapRepository.delete(scrap);
    }
}
