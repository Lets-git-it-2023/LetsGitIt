package com.proj.letsgitit.controller;

import com.proj.letsgitit.dto.CommunityDto;
import com.proj.letsgitit.dto.CommunityUpdateDto;
import com.proj.letsgitit.entity.Community;
import com.proj.letsgitit.entity.User;
import com.proj.letsgitit.service.CommunityService;
import com.proj.letsgitit.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@Controller
@RequiredArgsConstructor
@RequestMapping("/community")
@Slf4j
public class CommunityController {

    private final UserService userService;
    private final CommunityService communityService;

    // 전체 게시글 조회
    @GetMapping("")
    public ResponseEntity getAllCommunity() {
        return ResponseEntity.ok().body(communityService.findAll());
    }

    // 게시글 등록
    @PostMapping("/post")
    public ResponseEntity saveCommunity(HttpServletRequest request, @RequestBody CommunityDto dto) {
        log.info("=> 멤버 찾기 시작");
        User user = userService.getUser(request);
        log.info("=> 멤버 찾음");
        log.info("=> 서비스 호출");
        Long id = communityService.save(user, dto);
        return ResponseEntity.ok().body(id + " : 글이 등록되었습니다.");
    }

    // 게시글 수정
    @PutMapping("/{id}")
    public ResponseEntity updateCommunity(@PathVariable Long id, @RequestBody CommunityUpdateDto dto) {
        Long communityId = communityService.update(id, dto);
        return ResponseEntity.ok().body(communityId + ": 글이 수정되었습니다.");
    }
    // 게시글 삭제
    @DeleteMapping("/{id}")
    public ResponseEntity deleteCommunity(@PathVariable Long id) {
        Long result = communityService.delete(id);
        return ResponseEntity.ok().body(result + ": 글이 삭제되었습니다.");
    }

    // 게시글 1개 조회
    @GetMapping("/{id}")
    public ResponseEntity findById(@PathVariable Long id) {
        CommunityDto dto = communityService.findById(id);
        int countVisit = dto.getCountVisit() + 1;

        Community community = Community.builder()
                .countVisit(countVisit)
                .build();
        communityService.updateVisit(id, new CommunityDto(community));

        return ResponseEntity.ok().body(dto);
    }

    @GetMapping("/count")
    public ResponseEntity count(@RequestParam Long id) {
        int count = communityService.count(id);

        return ResponseEntity.ok().body(count);
    }
}
