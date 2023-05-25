import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "react-quill/dist/quill.snow.css";
import Editor from "../../Editor";
import ProjectDetailInfo from "./ProjectDetailInfo";
import ProjectDetailInput from "./ProjectDetailInput";

const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 10px;
  border: none;
  border-radius: 10px;
  color: var(--color-sub-2);
  font-size: 16px;
  font-weight: 600;
  z-index: 1;
  & + & {
    margin-left: 15px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 0px;
  right: 30px;
`;

const Title = styled.input`
  border: none;
  border-bottom: solid 2px var(--color-sub-3);
  color: var(--color-sub-1);
  padding: 5px 5px 5px 50px;
  font-size: 32px;
  position: relative;
  width: 100%;
`;

const Hr = styled.hr`
  border: none;
  border-top: 2px solid var(--color-sub-3);
`;

const HrWrapper = styled.div`
  display: flex;
  flex: 1;
  border-top: 2px solid var(--color-sub-3);
`;

const TitleContainer = styled.div`
  display: flex;
  color: var(--color-sub-1);
  padding: 5px 5px 0px 50px;
  font-size: 32px;
  ${Hr} {
    margin-bottom: 5px;
  }
`;

const Content = styled.div`
  border: none;
  color: var(--color-sub-1);
  font-size: 15px;
  display: flex;
  background-color: var(--color-sub-2);
  padding: 30px 5px 5px 50px;
  font-size: 15px;
  margin-left: 50px;
  min-height: 500px;
`;

const EditorWrapper = styled.div`
  display: flex;
  background-color: black;
  padding: 0px 0px 5px 50px;
  margin-bottom: 10px;
`;

const ProjectDetailInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  margin-left: 50px;
  width: 750px;
`;

const DetailInputContainer = styled.div`
  display: flex;
`;

const ProjectStatus = styled.div`
  height: 65px;
  width: 750px;
  display: flex;
  background-color: var(--color-sub-2);
  border-top: 2px solid var(--color-sub-3);
  padding: 0 0 0 30px;
  margin-top: 40px;
  font-size: 20px;
  font-weight: 550;
  box-sizing: border-box;
  p {
    width: 50%;
    color: var(--color-sub-1);
  }
`;

const ProjectInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
`;

interface PropsInterface {
  type: string;
  title: string;
  content: string;
  removeBackgroundColor: () => void;
}

const ProjectDetail = ({ type, title, content, removeBackgroundColor }: PropsInterface) => {
  const [projectTitle, setProjectTitle] = useState<string>(title);
  const [projectContent, setProjectContent] = useState<string>(content);
  const [isUser, setIsUser] = useState<boolean>(true); //User일 때
  const [isEditMode, setIsEditMode] = useState<boolean>(false); 
  const [currTitle, setCurrTitle] = useState(title);
  const [curContent, setCurContent] = useState(content);

  useEffect(()=>{
    if(type==="read"){
      setIsUser(false);
      setIsEditMode(false);
    }
  }, []);
  const onEditButton = () => {
    setIsEditMode(true);
    removeBackgroundColor();
  };

  const currTitleHandle = (e: any) => {
    console.log(e.target.value);
    setCurrTitle(e.target.value);
  };

  const onExitEditPage = () => {
    setIsEditMode(false);
    removeBackgroundColor();
    //setCurrTitle(title);
    //setCurContent(content);
  };

  const onSubmitEdit = () => {};

  const currContentHandle = (e: any) => {
    console.log(e);
    setCurContent(e);
  };

  return (
    <PortfolioContainer>
      {isUser ? ( //유저한테만 수정하기 버튼 보이기
        <ButtonContainer>
          <Button onClick={onEditButton} style={{ backgroundColor: "var(--color-main-4)" }}>
            수정하기
          </Button>
        </ButtonContainer>
      ) : ""}
      {isEditMode ? ( //수정모드
        <ButtonContainer>
          <Button
            style={{ backgroundColor: "var(--color-sub-3)" }}
            onClick={onExitEditPage}
          >
            나가기
          </Button>
          <Button style={{ backgroundColor: "var(--color-main-4)" }}>저장하기</Button>
        </ButtonContainer>
      ) : null}
      <TitleContainer>
        <Title
          value={currTitle}
          onChange={currTitleHandle}
          disabled={!isEditMode}
        />
        <HrWrapper>
          <Hr />
        </HrWrapper>
      </TitleContainer>
        {isEditMode ? (
          <>
          <EditorWrapper>
            <Editor content={content} type="project"/>
          </EditorWrapper>
          <ProjectInfoContainer>
            <ProjectStatus>
              <p>• 프로젝트 정보</p>
            </ProjectStatus>
            <DetailInputContainer>
              <ProjectDetailInput />
            </DetailInputContainer>
          </ProjectInfoContainer>
          </>
        ) : (
          <>
            <ProjectDetailInfoContainer>
              <ProjectDetailInfo />
            </ProjectDetailInfoContainer>
            <Content>{projectContent}</Content>
          </>
        )}
      
    </PortfolioContainer>
  );
};

export default ProjectDetail;
