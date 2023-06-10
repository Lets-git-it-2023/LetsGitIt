import React, { useState } from "react";
import styled from "styled-components";
import { IoMdChatbubbles, IoMdSend } from "react-icons/io";
import { RiMailLockFill } from "react-icons/ri";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-sub-2);
  width: 100%;
  height: 100%;
  border-radius: 16px;
  position: relative;
`;

const ChatIcon = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background-color: #525252;
  align-items: center;
  justify-content: center;
  display: flex;
  svg {
    width: 58px;
    height: 58px;
    fill: var(--color-sub-2);
  }
`;

const Send = styled.div`
  display: flex;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: var(--color-sub-4);
  align-items: center;
  justify-content: center;
  margin-left: 14px;
  cursor: pointer;
  svg {
    height: 14px;
    width: 14px;
    fill: var(--color-sub-3);
    :hover {
      fill: var(--color-main-4);
    }
  }
`;

const ChatBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0 35px;
  box-sizing: border-box;
  height: 40px;
`;

const InputWrapper = styled.div`
  flex-grow: 1;
  input {
    width: 100%;
    min-width: 260px;
    height: 40px;
    padding: 15px;
    box-sizing: border-box;
    border: 1px solid var(--color-sub-3);
    border-radius: 4px;
    color: var(--color-sub-3);
  }
`;

const ChatBox = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  align-items: center;
  padding: 0 35px;
  margin-bottom: 20px;
  box-sizing: border-box;
`;
const ChatItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 230px;
  overflow: auto;
  width: 100%;
  gap: 20px;

  ::-webkit-scrollbar {
    width: 8px;
    background-color: none;
  }

  ::-webkit-scrollbar-track {
    background-color: #525252;
    width: 2px;
    border-radius: 30px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--color-main-4);
    width: 8px;
    border-radius: 30px;
  }
`;
const ChatItem = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-template-rows: repeat(2, max-content);
  grid-template-areas:
    "avatar info"
    "avatar content";
`;

const UserChat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 20px;
`;

const MemberImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
  grid-area: avatar;
  margin-right: 10px;
`;

const NameandDate = styled.div`
  display: flex;
  flex-direction: row;
  grid-area: info;
  justify-content: center;
  align-items: center;
  p {
    margin: 0;
    margin-right: 15px;
    font-weight: 500;
    font-size: 0.95rem;
    color: var(--color-sub-1);
  }
  span {
    font-size: 0.68rem;
    font-weight: 400;
    color: var(--color-sub-3);
    margin: 0;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  grid-area: content;
  text-align: left;
  font-size: 0.81rem;
  font-weight: 400;
  color: var(--color-sub-1);
`;

const ProjectChatBox = () => {
  const [isMember, setIsmember] = useState(true);
  const chating = [
    {
      profileImg: "",
      username: "username1",
      time: "2023.05.23 18:34",
      content: "helllllllllllo",
      sender: false
    },
    {
      profileImg: "",
      username: "username1",
      time: "2023.05.23 18:34",
      content: "helllllllllllo",
      sender: false
    },
    {
      profileImg: "",
      username: "username",
      time: "2023.05.24 00:34",
      content: "hiiiiiii",
      sender: true
    },
    {
      profileImg: "",
      username: "username1",
      time: "2023.05.23 18:34",
      content: "helllllllllllo",
      sender: false
    },
    {
      profileImg: "",
      username: "username",
      time: "2023.05.24 00:34",
      content: "hiiiiiii",
      sender: true
    },
    {
      profileImg: "",
      username: "username1",
      time: "2023.05.23 18:34",
      content: "helllllllllllo",
      sender: false
    }
  ];
  return (
    <Wrapper>
      <ChatBox>
        {chating.length === 0 ? (
          <ChatIcon>
            {isMember ? <IoMdChatbubbles /> : <RiMailLockFill />}
          </ChatIcon>
        ) : (
          <ChatItemContainer>
            {chating.map((item, index) =>
              item.sender ? (
                <UserChat key={index}>
                  <NameandDate>
                    <p>{item.username}</p>
                    <span>{item.time}</span>
                  </NameandDate>
                  <ContentContainer>{item.content}</ContentContainer>
                </UserChat>
              ) : (
                <ChatItem key={index}>
                  <MemberImage
                    src={"http://dummyimage.com/600x500.png/5fa2dd/ffffff"}
                  />
                  <NameandDate>
                    <p>{item.username}</p>
                    <span>{item.time}</span>
                  </NameandDate>
                  <ContentContainer>{item.content}</ContentContainer>
                </ChatItem>
              )
            )}
          </ChatItemContainer>
        )}
      </ChatBox>
      {isMember && (
        <ChatBar>
          <InputWrapper>
            <input placeholder="프로젝트에 대해 팀원들과 채팅하세요" />
          </InputWrapper>
          <Send>
            <IoMdSend />
          </Send>
        </ChatBar>
      )}
    </Wrapper>
  );
};

export default ProjectChatBox;
