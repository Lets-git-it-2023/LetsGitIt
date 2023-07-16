package com.proj.letsgitit.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;

import javax.persistence.*;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Language { // 사용 언어 및 툴
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "lang_id")
    private Long id;
    private String name;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "project_id") // 외래키를 설정
    @JsonBackReference
    private Project project;
}
