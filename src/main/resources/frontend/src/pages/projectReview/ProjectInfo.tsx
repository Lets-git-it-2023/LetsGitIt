import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--color-sub-1);
  margin-bottom: 10px;
  width: 100%;
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(auto, max-content);
  row-gap: 20px;
  padding: 10px;
  font-weight: 450;
  margin-bottom: 20px;
  align-items: start;
  font-size: 0.94rem;
  p{
    margin: 0;
    justify-content: flex-start;
  }
  span {
    display: flex;
    margin: 0;
    font-weight: 400;
    justify-content: flex-end;
    white-space: nowrap;
    @media (max-width: 1220px) {
      white-space: normal; 
    }
  }

`;

const Line = styled.hr`
  flex-grow: 1;
  height: 0px;
  width: 60%;
  border-top: 0.5px solid var(--color-sub-1);
`;

const Top = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  font-size: 0.94rem;
  font-weight: 550;
  span {
    margin-right: 10px;
  }
  margin-bottom: 10px;
`;

const LangList = styled.div`
  padding: 3px;
  color: var(--color-sub-1);
  border-left: 2px solid var(--color-sub-1);
  margin-left: 10px;
  flex-shrink: 0;
  margin-bottom: 10px;
`;

const LangContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

const ProjectInfo = () => {
  const [field, setField] = useState("공유 서비스");
  const [process, setProcess] = useState("2023.03.01 ~ 2023.04.12");
  const [langsTools, setLangsTools] = useState([
    "JAVA",
    "JAVA",
    "JAVA",
    "JAVA"
  ]);

  return (
    <Wrapper>
      <Top>
        <span>프로젝트 정보</span> <Line />
      </Top>
      <ContentContainer>
          <p>분야</p> <span>{field}</span>
          <p>진행 기간</p> <span>{process}</span>
          <p>언어/툴</p>
          <LangContainer>
            {langsTools.map((items) => (
              <LangList>{items}</LangList>
            ))}
          </LangContainer>
      </ContentContainer>
    </Wrapper>
  );
};

export default ProjectInfo;
