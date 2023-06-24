package com.proj.letsgitit.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

@Entity @EntityListeners(AuditingEntityListener.class)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CommunityComment extends BaseTimeEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="community_comment_id")
    private Long id;
    private String content;
    private String createdBy; // 댓글 작성자
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id") // 외래키를 설정
    @JsonBackReference
    private User user;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "community_id") // 외래키를 설정
    @JsonBackReference
    private Community community;
    
    // 일단 대댓글 없다고 가정하고 만듦

//    public void update(CommunityCommentDto dto) {
//        this.content = dto.getContent();
//    }
}
