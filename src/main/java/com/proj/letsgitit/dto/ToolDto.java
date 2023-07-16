package com.proj.letsgitit.dto;

import com.proj.letsgitit.entity.Tool;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ToolDto {
    private String name;
    public Tool toEntity() {
        return Tool.builder()
                .name(name)
                .build();
    }
}
