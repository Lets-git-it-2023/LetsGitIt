package com.proj.letsgitit.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Setter
@Getter
@NoArgsConstructor
@Table
public class CommunityScrap extends BaseTimeEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="scrap_id")
    private Long id;
    @ManyToOne
    @JoinColumn(name="user_id")
    @JsonBackReference
    private User user;
    @ManyToOne
    @JoinColumn(name="community_id")
    @JsonBackReference
    private Community community;

}
