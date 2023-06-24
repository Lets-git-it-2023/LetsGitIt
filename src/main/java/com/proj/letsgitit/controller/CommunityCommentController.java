package com.proj.letsgitit.controller;

import com.proj.letsgitit.dto.CommunityCommentDto;
import com.proj.letsgitit.entity.Community;
import com.proj.letsgitit.entity.User;
import com.proj.letsgitit.service.CommunityCommentService;
import com.proj.letsgitit.service.CommunityService;
import com.proj.letsgitit.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Controller
@RequiredArgsConstructor
@RequestMapping("/community/{communityId}")
public class CommunityCommentController {
    private final CommunityCommentService communityCommentService;
    private final CommunityService communityService;
    private final UserService userService;

    // 댓글 등록
    @PostMapping("")
    public ResponseEntity save(@PathVariable Long communityId,
                               HttpServletRequest request,
                               @RequestBody CommunityCommentDto dto) {
        User user = userService.getUser(request);
        Community community = communityService.getCommunity(communityId);

        Long id = communityCommentService.save(user, community, dto);

        return ResponseEntity.ok().body(id + " : 댓글이 등록되었습니다.");
    }

    // 하나의 개시글에 달린 댓글 전체 조회
    @GetMapping("/comments")
    public ResponseEntity getComments(@PathVariable Long communityId) {
        List<CommunityCommentDto> commentDtoList = communityCommentService.getCommentList(communityId);
        return ResponseEntity.ok().body(commentDtoList);
    }
}
