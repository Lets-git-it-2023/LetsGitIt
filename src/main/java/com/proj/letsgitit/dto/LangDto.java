package com.proj.letsgitit.dto;

import com.proj.letsgitit.entity.Language;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LangDto {
    private String name;
    public Language toEntity() {
        return Language.builder()
                .name(name)
                .build();
    }
}
