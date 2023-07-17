package com.proj.letsgitit.controller;

import com.proj.letsgitit.dto.CommunityCommentDto;
import com.proj.letsgitit.dto.CommunityDto;
import com.proj.letsgitit.dto.CommunityUpdateDto;
import com.proj.letsgitit.entity.Community;
import com.proj.letsgitit.entity.User;
import com.proj.letsgitit.service.CommunityCommentService;
import com.proj.letsgitit.service.CommunityService;
import com.proj.letsgitit.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequiredArgsConstructor
@RequestMapping("/community")
@Slf4j
public class CommunityController {

    private final UserService userService;
    private final CommunityService communityService;
    private final CommunityCommentService commentService;

    // 전체 게시글 조회
    @GetMapping("")
    public ResponseEntity<Object> getAllCommunity(@RequestParam(required = false, defaultValue = "", value = "searchText") String searchText,
                                                  @RequestParam(required = false, defaultValue = "0", value = "page") int page,
                                                  @RequestParam(required = false, defaultValue = "0", value="sortType") int sortType) {
        Page<Community> communityList = communityService.findCommunity(searchText, searchText, page, sortType);

        return ResponseEntity.ok().body(communityList);
    }

    // 게시글 등록
    @PostMapping(value = "")
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

        // 댓글
        List<CommunityCommentDto> comments = commentService.getCommentList(id);
        // 작성순으로 정렬
        comments.sort(Comparator.comparing(CommunityCommentDto::getId));
        Map<String, Object> result = new HashMap<>();
        result.put("community", dto);
        result.put("comments", comments);
        return ResponseEntity.ok().body(result);
    }

    @GetMapping("/count")
    public ResponseEntity count(@RequestParam Long id) {
        int count = communityService.count(id);

        return ResponseEntity.ok().body(count);
    }
}
