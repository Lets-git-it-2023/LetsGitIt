package com.proj.letsgitit.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class CommunityScrapDto {
    private Long userId;
    private Long communityId;

    public CommunityScrapDto(Long userId, Long communityId) {
        this.userId = userId;
        this.communityId = communityId;
    }
}
