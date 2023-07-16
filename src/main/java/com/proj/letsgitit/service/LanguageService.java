package com.proj.letsgitit.service;

import com.proj.letsgitit.dto.LangDto;
import com.proj.letsgitit.entity.Language;
import com.proj.letsgitit.repository.LanguageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class LanguageService {
    private final LanguageRepository languageRepository;

    // 사용 언어 생성
    public Long save(LangDto dto) {
        Language language = languageRepository.save(dto.toEntity());
        return language.getId();
    }
    // 사용 언어 삭제
    public Long delete(Long id) {
        Language language = languageRepository.findById(id)
                .orElseThrow((() -> new IllegalStateException("해당 언어가 존재하지 않습니다.")));
        languageRepository.delete(language);
        return id;
    }
    // 수정은 없음
}
