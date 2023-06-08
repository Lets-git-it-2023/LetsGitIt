import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 20px;
    background-color: var(--color-sub-2);
    color: var(--color-sub-1);
    width: 100%;
    align-items: center;
    justify-items: left;
    flex-wrap: wrap;

    & > div {
    flex-basis: calc(33.33% - 10px); 
  }
    
`;

const ArrayContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const StyledSpan = styled.span`
    border-left: 2px solid var(--color-sub-1);
    padding: 4px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    min-width: 310px;
    text-align: left;
    align-items: center;
    p{
        font-weight: 500;
        font-size: 1rem;
        margin-left: 20px;
        margin-right: 20px;
        width: 110px;
    }
    span{
        font-weight: 400;
        font-size: 1rem;
        margin-right: 10px;
    }

`;

const ProjectDetailInfo = () => {
    const [projectInfo, setProjectInfo] = useState({
        field: "공유서비스",
        member : 4,
        language: ["JAVA", "Python"],
        term: "2023.03.01 ~ 2023.04.12",
        position: "IOS",
        tools: ["Github"]
    });

    return (
        <Wrapper>
            <Container><p>프로젝트 분야</p> <span>{projectInfo.field}</span></Container>
            <Container> <p>프로젝트 인원 수</p> <span>{projectInfo.member}</span></Container>
            <Container><p>프로그래밍 언어</p> 
            <ArrayContainer>
            {projectInfo.language.map((lang) => (
                <StyledSpan key={lang}>{lang}</StyledSpan>
            ))}
            </ArrayContainer> </Container>
            <Container><p>진행기간</p> <span>{projectInfo.term}</span> </Container>
            <Container><p>포지션</p> <span>{projectInfo.position}</span> </Container>
            <Container> <p>소프트웨어 툴</p> 
            <ArrayContainer>
                {projectInfo.tools.map((tool) => (
                <StyledSpan key={tool}>{tool}</StyledSpan>
            ))}
            </ArrayContainer></Container>
        </Wrapper>
    );
}

export default ProjectDetailInfo;