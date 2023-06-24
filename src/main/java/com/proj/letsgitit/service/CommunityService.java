package com.proj.letsgitit.service;

import com.proj.letsgitit.dto.CommunityDto;
import com.proj.letsgitit.dto.CommunityUpdateDto;
import com.proj.letsgitit.entity.Community;
import com.proj.letsgitit.entity.User;
import com.proj.letsgitit.repository.CommunityRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class CommunityService {
    private final CommunityRepository communityRepository;

    public Long save(User user, CommunityDto dto) {
        dto.setCreatedBy(user.getName());
        Community community = communityRepository.save(dto.toEntity());

        community.setUser(user);
        return community.getId();
    }

    public Long update(Long id, CommunityUpdateDto dto) {
        Community community = communityRepository.findById(id).orElseThrow((() ->
                new IllegalStateException("해당 게시글이 존재하지 않습니다.")));
        community.update(dto);

        return community.getId();
    }

    public List<Community> findAll() {
        return communityRepository.findAll();
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
}
