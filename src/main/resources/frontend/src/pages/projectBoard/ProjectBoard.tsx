import React, {useState} from "react";
import styled from "styled-components";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import GoBack from "../../components/GoBack";
import CommitGraph from "./CommitGraph";
import CommitLevel from "./CommitLevel";
import ProjectChatBox from "./ProjectChatBox";
import { ProjectDday } from "./ProjectDday";
import Language from "./Language";
import ProjectMembers from "../../components/Project/ProjectMembers";
import { BsFillSendFill, BsGithub, BsArrowUpRight }from "react-icons/bs";
import { BiLinkAlt } from "react-icons/bi";
import { SiNotion } from "react-icons/si";

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(4, minmax(auto, max-content));
  grid-template-rows: repeat(5, minmax(auto, max-content));
  gap: 40px;
  margin-bottom: 100px;
  width: 100%;
  grid-template-areas:
    "back back back back"
    "team title title title"
    "team dday dday lang"
    "team dday dday level"
    "team month today chat";
`;

const BackContainer = styled.div`
  display: flex;
  width: 100%;
  grid-area: back;
`;

const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: team;
  max-width: 290px;
  height: 100%;
  border-radius: 20px;
  background-color: var(--color-sub-2);
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
  height: 50px;
  padding: 12px 20px;
  font-size: 1.5rem;
  font-weight: 500;

  svg {
    width: 16px;
    height: 16px;
    fill: var(--color-sub-1);
    cursor: pointer;
  }
`;

const DdayContainer = styled.div`
  max-width: 400px;
  height: 100%;
  grid-area: dday;
`;

const LangContainer = styled.div`
  display: flex;
  grid-area: lang;
  max-width: 510px;
  height: 127px;
`;

const ChatContainer = styled.div`
  max-width: 510px;
  height: 330px;
  grid-area: chat;
`;

const CommitGraphContainer = styled.div`
  max-width: 180px;
  height: 330px;
  grid-area: month;
`;

const TodayCommitContainer = styled.div`
  max-width: 180px;
  height: 330px;
  grid-area: today;
`;

const CommitLevelContainer = styled.div`
  max-width: 510px;
  height: 105px;
  grid-area: level;
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

  svg{
    width: 12px;
    height: 11px;
    fill: var(--color-sub-3);
    :hover{
      fill: var(--color-main-4);
    }
  }
`;

const URLButton = styled.button`
  max-width: 120px;
  max-height: 120px;
  min-height: 65px;
  min-width: 30px;
  flex: 0 0 calc(30% - 20px);
  padding: 25px;
  border-radius: 10px;
  color: var(--color-sub-3);
  background-color: var(--color-sub-4);
  font-size: 0.93rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.3));
  white-space: pre-line;
  position: relative;
`;

const ArrowUp = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  svg{
    height: 24px;
    width: 24px;
    fill: var(--color-sub-1);
  }
`;

const LinkContainer = styled.div`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  color: var(--color-sub-1);
  font-size: 15px;
  display: flex;
  flex-direction: row;
  white-space: nowrap;
  svg{
    width: auto;
    height: 18px;
    fill: var(--color-sub-1);
    margin-right: 5px;
  }
`;

const URLButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-items: flex-end;
  gap: 10px;
  padding: 35px 10px;
  box-sizing: border-box;
`;

const ProjectMemberContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: center;
`;

export const ProjectBoard = () => {
  const [isInitial , setIsInitial] = useState(false);
  const [proejctLink, setProjectLinks] = useState(
    {
      github: "github.com",
      notion: "notion.com",
      link1: "link1",
      link2: null
    }
    )
  
  const onClickEditButton = () => {
    //go to edit page
  };
  const teamMember = [
    {
      username: "user1",
      image: "",
      part: "안드로이드"
    },{
      username: "user2",
      image: "",
      part: "서버"
    }
  ]

  return (
    <Wrapper>
      <BackContainer>
        <GoBack />
      </BackContainer>
      <TeamContainer>
        <ProjectMemberContainer>
        <ProjectMembers 
        team={teamMember}
        UserButton={<IconButton><AiFillHome/></IconButton>}
        OthersButton={
          <ButtonContainer>
          <IconButton><AiFillHome/></IconButton>
          <IconButton><BsFillSendFill/></IconButton>
        </ButtonContainer>
        }
        />
        </ProjectMemberContainer>
        {isInitial ?
        <URLButtonContainer>
          <URLButton>
            URL을{"\n"}추가하세요
          </URLButton>

          <URLButton>
            URL을{"\n"}추가하세요
          </URLButton>
        </URLButtonContainer>
      :
      <URLButtonContainer>
        <URLButton>
         <ArrowUp><BsArrowUpRight/></ArrowUp>
         <LinkContainer><BsGithub />깃허브</LinkContainer>
        </URLButton>

        <URLButton>
        <ArrowUp><BsArrowUpRight /></ArrowUp>
         <LinkContainer><SiNotion />팀 노션</LinkContainer>
        </URLButton>

        <URLButton>
        <ArrowUp><BsArrowUpRight /></ArrowUp>
         <LinkContainer><BiLinkAlt />참고 링크</LinkContainer>
        </URLButton>
        <URLButton>
        <ArrowUp><BsArrowUpRight /></ArrowUp>
         <LinkContainer><BiLinkAlt />참고 링크</LinkContainer>
        </URLButton>
    </URLButtonContainer>
      }
      </TeamContainer>

      <TitleContainer>
        커리어 SNS 기반 멘토링 플랫폼 프로젝트{" "}
        <AiFillSetting onClick={onClickEditButton} />
      </TitleContainer>

      <DdayContainer>
        <ProjectDday />
      </DdayContainer>
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
  );
};
