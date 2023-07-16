package com.proj.letsgitit.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Language { // 사용 언어 및 툴
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "lang_id")
    private Long id;
    private String name;
    @Builder
    public Language(String name) {
        this.name = name;
    }
}
