package com.proj.letsgitit.controller;

import com.proj.letsgitit.dto.CommunityScrapDto;
import com.proj.letsgitit.service.CommunityScrapService;
import com.proj.letsgitit.service.CommunityService;
import com.proj.letsgitit.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
@RequiredArgsConstructor
@Slf4j
class CommunityScrapController {

    private final CommunityScrapService scrapService;
    private final CommunityService communityService;
    private final UserService userService;
    // 북마크 생성
    @PostMapping("/community/scrap")
    public ResponseEntity save(@RequestBody CommunityScrapDto dto) throws Exception {
        scrapService.save(dto);
        return ResponseEntity.ok().body("스크랩이 생성되었습니다.");
    }

    // 북마크 취소
    @DeleteMapping("/community/scrap")
    public ResponseEntity delete(@RequestBody CommunityScrapDto dto) {
        scrapService.delete(dto);
        return ResponseEntity.ok().body("스크랩이 취소되었습니다.");
    }
}
