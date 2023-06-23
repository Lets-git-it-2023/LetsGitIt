import { useState } from "react";
import styled from "styled-components";
import UserInfo from "../../components/portfolio/User/UserInfo";
import UserSkill from "../../components/portfolio/User/UserSkill";
import MyPageTab from "./MyPageTab";
import { ReactComponent as arrowIcon } from "../../styles/Icons/leftarrowIcon.svg";
import profile from "../../styles/Icons/BasicProfile.png";
import { useNavigate } from "react-router-dom";

const ArrowIcon = styled(arrowIcon)`
  display: flex;
  margin: 0 5px 0 5px;
  max-width: 65px;
`;

const MyPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div<{ init: boolean }>`
  width: 95%;
  position: relative;
  max-width: 1280px;
  padding: 50px 5px;
  color: var(--color-sub-1);
  display: grid;
  gap: 10px;
  grid-template-rows: ${({ init }) =>
    init
      ? "repeat(4, minmax(max-content, 2rem))"
      : "repeat(3, minmax(min-content, 1rem))"};
  grid-template-columns: ${({ init }) =>
    init ? "1fr" : "repeat(3, minmax(min-content, auto))"};
  grid-template-areas: ${({ init }) =>
    init
      ? `
      "profile"
      "edit"
      "tab"`
      : `
      "info profile skill"
      "info edit skill"
      "tab tab tab"`};
  justify-content: center;
  position: relative;

  .username {
    font-size: 1.5rem;
  }
`;

const Avatar = styled.img`
  display: inline-block;
  width: 120px;
  height: 120px;
  border-radius: 5px;
  justify-content: center;
`;

const EditButton = styled.button`
  width: 132px;
  height: 37px;
  background-color: var(--color-sub-2);
  color: var(--color-sub-1);
  font-size: 1.125rem;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  text-align: center;
`;

const ProfileEditContainer = styled.div`
  grid-area: profile;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  grid-area: edit;

  align-items: flex-end;
  width: 100%;
  p {
    display: inline-flex;
  }
`;

const Comment = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 200px;
  color: var(--color-main-4);
  position: absolute;
  left: 56%;
  top: 26%;
  span {
    display: inline-flex;
    font-size: 1.125rem;
    max-width: 150px;
  }
  &.editMode {
    display: none;
  }
`;

const TabContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1280px;
  justify-content: center;
  grid-area: tab;
  box-sizing: border-box;
`;

const SkillContainer = styled.div`
  display: flex;
  grid-area: skill;
  max-width: 510px;
`;

const InfoContainer = styled.div`
  display: flex;
  grid-area: info;
  max-width: 510px;
`;

const UserNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: profile;
`;

const MyPage = () => {
  const [afterEditProfile, setAfterEditProfile] = useState(true);
  //false = before, true=after

  const [username, setUsername] = useState("username");
  const navigate = useNavigate();

  return (
    <MyPageContainer>
      <Wrapper init={!afterEditProfile}>
        {afterEditProfile && (
          <InfoContainer>
            <UserInfo />
          </InfoContainer>
        )}

        <UserNameContainer>
          <Avatar src={profile} alt="프로필 사진" />
          <p className="username">{username}</p>
        </UserNameContainer>

        {afterEditProfile && (
          <SkillContainer>
            <UserSkill type="" />
          </SkillContainer>
        )}

        <ProfileEditContainer>
          <EditButton
            className={afterEditProfile ? "editMode" : ""}
            onClick={() => navigate("/mypage/edit")}
          >
            프로필 수정
          </EditButton>
          <Comment className={afterEditProfile ? "editMode" : ""}>
            <ArrowIcon />
            <span>개발자로서의 나를 표현하세요</span>
          </Comment>
        </ProfileEditContainer>
        <TabContainer>
          <MyPageTab />
        </TabContainer>
      </Wrapper>
    </MyPageContainer>
  );
};

export default MyPage;
