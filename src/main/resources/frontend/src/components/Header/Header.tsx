import { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100px;
`;
const NavWrapper = styled.div`
  display: flex;
  width: 400px;
  justify-content: space-between;
  margin-right: 50px;
`;
const NavStyle = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
  color: white;
  font-weight: 600;
  font-size: 17px;
  text-decoration: none;

  &.active{
    color: var(--color-main-4);
  }
`;

const InfoContainer = styled.div`
  display: flex;
  margin: 0 60px 0 30px;
  button {
    font-size: 17px;
    font-weight: 600;
    background-color: black;
    color: white;
    margin-right: 30px;
    border: none;
    cursor: pointer;

    :hover {
      text-decoration: underline;
      text-decoration-color: var(--color-main-4);
      text-decoration-thickness: 2px;
      text-underline-offset: 3px;
    }
  }
`;

const Dot = styled.div`
  display: inline-block;
  width: 12px;
  height: 12px;
  background: var(--color-main-4);
  border-radius: 10px;
  position: relative;
  top: -18px;
  left: 20px;
  visibility: hidden;
  &.new {
    visibility: visible;
  }
`;

const Button = styled.button`
  width: 80px;
  height: 24px;
  border-radius: 30px;
  text-align: center;
  font-size: 13px;
  background-color: var(--color-sub-4);
  color: var(--color-sub-1);
  margin-right: 30px;
  :hover{
    background-color: var(--color-sub-3);
    color: var(--color-sub-2);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-right: 30px;
`;

const Header = () => {
  const [isLogIn, setIsLogIn] = useState<Boolean>(true);
  const [newMessage, setNewMessage] = useState <Boolean>(true);
  const [newAlert, setNewAlert] = useState <Boolean>(false);

  const headers = [
    { name: "팀매칭", path: "/teammatching" },
    { name: "프로젝트", path: "/project" },
    { name: "커뮤니티", path: "/community" },
    { name: "마이페이지", path: "/mypage" }
  ];

  const onClickAlert = () => {};
  const onClickMessage = () => {};

  return (
    <>
      {isLogIn ? (
        <Wrapper>
          <NavWrapper>
            {headers.map((menu, index) => (
              <NavStyle to={menu.path} key={index}>
                <p>{menu.name}</p>
              </NavStyle>
            ))}
          </NavWrapper>
          <InfoContainer>
            <Dot className={newMessage ? "new" : ""} />
            <button onClick={onClickMessage}>쪽지</button>
            <Dot className={newAlert ? "new" : ""} />
            <button onClick={onClickAlert}>알림</button>
          </InfoContainer>
        </Wrapper>
      ) : (
        <Wrapper>
         
        <ButtonContainer>
          <Button>로그인</Button>
          <Button>회원가입</Button>
        </ButtonContainer>
        
       </Wrapper>
      )}
    </>
  );
};


export default Header;
