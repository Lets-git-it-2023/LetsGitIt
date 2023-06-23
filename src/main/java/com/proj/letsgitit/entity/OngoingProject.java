package com.proj.letsgitit.entity;

import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Table(name="board")
public class OngoingProject extends BaseTimeEntity { // 진행중인 프로젝트 게시판
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="post_id")
    int postId;
    @Column
    int type;
    @Column
    String title;
    @Column
    String content;


}
