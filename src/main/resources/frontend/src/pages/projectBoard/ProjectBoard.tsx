import React, { useState } from "react";
import styled from "styled-components";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import GoBack from "../../components/GoBack";
import CommitGraph from "./CommitGraph";
import { CommitLevel } from "./CommitLevel";
import ProjectChatBox from "./ProjectChatBox";
import { MiniDday, ProjectDday } from "./ProjectDday";
import Language from "./Language";
import ProjectMembers from "../../components/Project/ProjectMembers";
import { BsFillSendFill } from "react-icons/bs";
import ProjectLinks from "./ProjectLinks";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  align-content: center;
  grid-template-columns: repeat(4, max-content);
  grid-template-rows: repeat(5, max-content);
  gap: 30px;
  margin-bottom: 100px;
  width: 100%;
  max-width: 1280px;
  grid-template-areas:
    "back back back back"
    "team title title title"
    "team dday dday lang"
    "team dday dday level"
    "team month today chat";
  @media (max-width: 768px) {
    padding: 1rem;
    box-sizing: border-box;
    row-gap: 20px;
    column-gap: 15px;
    grid-template-rows: repeat(auto, 1fr);
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "title title"
      "team team"
      "lang lang"
      "dday level"
      "month today"
      "chat chat"
      "link link";
  }
`;

const BackContainer = styled.div`
  display: flex;
  width: 100%;
  grid-area: back;
  @media (max-width: 768px) {
    display: none;
  }
`;

const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-area: team;
  //max-width: 290px;
  height: 100%;
  border-radius: 20px;
  background-color: var(--color-sub-2);
  @media (max-width: 768px) {
    width: 100%;
    background-color: transparent;
    grid-area: "";
  }
`;

const TitleContainer = styled.div`
  display: flex;
  grid-area: title;
  width: 100%;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-sub-2);
  border-radius: 14px;
  color: var(--color-sub-1);
  max-width: 950px;
  //height: 50px;
  padding: 12px 20px;
  font-size: 1.5rem;
  font-weight: 500;

  svg {
    width: 16px;
    height: 16px;
    fill: var(--color-sub-1);
    cursor: pointer;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const DdayContainer = styled.div`
  max-width: 400px;
  height: 100%;
  grid-area: dday;
  @media (max-width: 768px) {
    display: none;
  }
`;

const MiniDdayContainer = styled.div`
  max-width: 400px;
  height: 100%;
  grid-area: dday;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const LangContainer = styled.div`
  display: flex;
  grid-area: lang;
  //max-width: 510px;
`;

const ChatContainer = styled.div`
  width: 100%;
  height: 330px;
  grid-area: chat;
`;

const CommitGraphContainer = styled.div`
  height: 330px;
  grid-area: month;
`;

const TodayCommitContainer = styled.div`
  //max-width: 180px;
  height: 330px;
  grid-area: today;
`;

const CommitLevelContainer = styled.div`
  max-width: 510px;
  height: 100%;
  width: 100%;
  grid-area: level;
  box-sizing: border-box;
  @media (max-width: 768px) {
    padding: 0;
    background-color: var(--color-sub-2);
    border-radius: 10px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: 100%;
`;

const IconButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: var(--color-sub-2);
  cursor: pointer;

  svg {
    width: 12px;
    height: 11px;
    fill: var(--color-sub-3);
    :hover {
      fill: var(--color-main-4);
    }
  }
`;

const ProjectMemberContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: center;
  @media (max-width: 768px) {
    grid-area: team;
  }
`;

const ProjectLinksContainer = styled.div`
  width: 100%;
  @media (max-width: 768px) {
    grid-area: link;
  }
`;

export const ProjectBoard = () => {
  const [isInitial, setIsInitial] = useState(false);
  const [proejctLink, setProjectLinks] = useState({
    github: "github.com",
    notion: "notion.com",
    link1: "link1",
    link2: null
  });

  const onClickEditButton = () => {
    //go to edit page
  };
  const teamMember = [
    {
      username: "user1",
      image: "",
      part: "안드로이드"
    },
    {
      username: "user2",
      image: "",
      part: "서버"
    }
  ];

  return (
    <Container>
      <Wrapper>
        <BackContainer>
          <GoBack />
        </BackContainer>

        <TeamContainer>
          <ProjectMemberContainer>
            <ProjectMembers
              team={teamMember}
              UserButton={
                <IconButton>
                  <AiFillHome />
                </IconButton>
              }
              OthersButton={
                <ButtonContainer>
                  <IconButton>
                    <AiFillHome />
                  </IconButton>
                  <IconButton>
                    <BsFillSendFill />
                  </IconButton>
                </ButtonContainer>
              }
            />
          </ProjectMemberContainer>
          <ProjectLinksContainer>
            <ProjectLinks />
          </ProjectLinksContainer>
        </TeamContainer>

        <TitleContainer>
          커리어 SNS 기반 멘토링 플랫폼 프로젝트{" "}
          <AiFillSetting onClick={onClickEditButton} />
        </TitleContainer>

        <DdayContainer>
          <ProjectDday />
        </DdayContainer>
        <MiniDdayContainer>
          <MiniDday />
        </MiniDdayContainer>

        <LangContainer>
          <Language />
        </LangContainer>
        <CommitLevelContainer>
          <CommitLevel />
        </CommitLevelContainer>
        <ChatContainer>
          <ProjectChatBox />
        </ChatContainer>
        <CommitGraphContainer>
          <CommitGraph type="month" />
        </CommitGraphContainer>
        <TodayCommitContainer>
          <CommitGraph type="today" />
        </TodayCommitContainer>
      </Wrapper>
    </Container>
  );
};
