package com.proj.letsgitit.controller;

import com.proj.letsgitit.dto.CommunityDto;
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
        CommunityDto communityDto = communityService.findById(dto.getCommunityId());
        log.info("=> 원래 스크랩 수 : " + communityDto.getCountScrap());
        communityDto.setCountScrap(communityDto.getCountScrap() + 1);
        log.info("=> 생성 후 스크랩 수 : " + communityDto.getCountScrap());
        communityService.updateScrap(dto.getCommunityId(), communityDto);

        return ResponseEntity.ok().body("스크랩이 생성되었습니다.");
    }

    // 북마크 취소
    @DeleteMapping("/community/scrap")
    public ResponseEntity delete(@RequestBody CommunityScrapDto dto) {
        scrapService.delete(dto);

        CommunityDto communityDto = communityService.findById(dto.getCommunityId());
        log.info("=> 원래 스크랩 수 : " + communityDto.getCountScrap());
        communityDto.setCountScrap(communityDto.getCountScrap() - 1);
        log.info("=> 취소 후 스크랩 수 : " + communityDto.getCountScrap());
        communityService.updateScrap(dto.getCommunityId(), communityDto);

        return ResponseEntity.ok().body("스크랩이 취소되었습니다.");
    }
}
