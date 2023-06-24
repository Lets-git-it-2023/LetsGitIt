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
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

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
}
