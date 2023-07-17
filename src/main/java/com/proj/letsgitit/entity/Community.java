package com.proj.letsgitit.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.proj.letsgitit.dto.CommunityUpdateDto;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Community extends BaseTimeEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "community_id")
    private Long id;
    private String title;
    @Lob //대용량 데이터
    private String content;
    private String createdBy;
    @Column(columnDefinition = "integer default 0", nullable = false)
    private int countVisit;     // 조회수
    @Column(columnDefinition = "integer default 0", nullable = false)
    private int countComment;   // 댓글수
    @Column(columnDefinition = "integer default 0", nullable = false)
    private int countScrap;     // 스크랩 수

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id") // 외래키를 설정
    @JsonBackReference
    private User user;

    // 댓글
    @OneToMany(mappedBy = "community", cascade = CascadeType.REMOVE)
    @JsonManagedReference(value = "community")
    private List<CommunityComment> communityComments = new ArrayList<>();

    // 스크랩
    @OneToMany(mappedBy = "community", cascade = CascadeType.REMOVE)
    @JsonManagedReference(value = "community")
    private List<CommunityScrap> communityScraps = new ArrayList<>();

    public void updateVisit(int countVisit) {
        this.countVisit = countVisit;
    }
    public void updateScrap(int countScrap) {
        this.countScrap = countScrap;
    }

    public void update(CommunityUpdateDto dto) {
        this.title = dto.getTitle();
        this.content = dto.getContent();
    }

    public int getCountComment() {
        if(communityComments != null)
            return communityComments.size();
        else
            return 0;
    }
}
