package com.proj.letsgitit.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.proj.letsgitit.dto.ProjectChatUpdateDto;
import lombok.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

@Entity
@EntityListeners(AuditingEntityListener.class)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProjectChat extends BaseTimeEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="project_chat_id")
    private Long id;
    private String content;
    private String createdBy; // 댓글 작성자
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id") // 외래키를 설정
    @JsonBackReference
    private User user;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "project_id") // 외래키를 설정
    @JsonBackReference
    private Project project;

    public void update(ProjectChatUpdateDto dto) {
        this.content = dto.getContent();
    }
}
