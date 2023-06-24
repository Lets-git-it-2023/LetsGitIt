package com.proj.letsgitit.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.proj.letsgitit.dto.CommunityUpdateDto;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
public class Community extends BaseTimeEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "community_id")
    private Long id;
    private String title;
    private String content;
    private String createdBy;
    @Column(columnDefinition = "integer default 0", nullable = false)
    private int countVisit;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id") // 외래키를 설정
    @JsonBackReference
    private User user;

    // 댓글
    @OneToMany(mappedBy = "community")
    @JsonManagedReference
    private List<CommunityComment> communityComments = new ArrayList<>();

    public void updateVisit(int countVisit) {
        this.countVisit = countVisit;
    }

//    @Builder
//    public Community(CommunityDto dto) {
//        this.title = dto.getTitle();
//        this.content = dto.getContent();
//        this.createdBy = dto.getCreatedBy();
//        this.countVisit = dto.getCountVisit();
//    }

    @Builder
    public Community(String title, String content, String createdBy, int countVisit, User user) {
        this.title = title;
        this.content = content;
        this.createdBy = createdBy;
        this.countVisit = countVisit;
        if (this.user != null) {
            user.getCommunities().remove(this);
        }
    }

    public void update(CommunityUpdateDto dto) {
        this.title = dto.getTitle();
        this.content = dto.getContent();
    }
}
