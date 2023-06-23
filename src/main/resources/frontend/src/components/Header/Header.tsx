import { useState } from "react";
import styled from "styled-components";
import Model from "../Modal";
import Notice from "../../pages/Notice";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoPrimitiveDot } from "react-icons/go";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem;
  box-sizing: border-box;
`;

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 5fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  padding: 0 1rem;
  width: 100%;
  max-width: 1280px;
  height: 100px;
  @media (max-width: 768px) { 
    display: flex;
    flex-direction: column;
    height: auto;
    padding: 1rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-left: 30px;
  align-items: center;
  p{
    margin: 0;
    color: white;
    font-size: 20px;
    font-weight: bold;
    margin-right: 24px;
    white-space: nowrap;
    @media (max-width: 768px) {
      margin: 0;
    }
  }
  button{
    width: 80px;
    height: 24px;
    color: var(--color-sub-1);
    background-color: var(--color-sub-4);
    border: none;
    border-radius: 30px;
    text-align: center;
    cursor: pointer;
    @media (max-width: 768px) {
      display: none;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
    margin: 0;
    position: relative;
  }
`;


const NavWrapper = styled.div`
  display: flex;
  max-width: 524px;
  flex-grow: 1;
  width: 100%;
  justify-content: space-between;
  justify-self: end;
  gap: 10px;
  white-space: nowrap;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavStyle = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  font-weight: 600;
  font-size: 17px;
  text-decoration: none;
  &.active {
    color: var(--color-main-4);
  }
  @media (max-width: 768px) {
    padding-right: 0px;
    justify-content: center;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  white-space: nowrap;
  justify-self: end;
  button {
    font-size: 17px;
    font-weight: 600;
    background-color: black;
    color: white;
    border: none;
    cursor: pointer;
    margin: 0;
    :hover {
      text-decoration: underline;
      text-decoration-color: var(--color-main-4);
      text-decoration-thickness: 2px;
      text-underline-offset: 3px;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const NewAlert = styled.div`
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
  :hover {
    background-color: var(--color-sub-3);
    color: var(--color-sub-2);
  }
  @media (max-width: 768px) {
    margin-right: 5px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-right: 30px;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const HamburgerWrapper = styled.div`
  display: none;
  width: 100%;
  flex-direction: column;
  color: white;
  font-weight: 600;
  font-size: 17px;
    text-align: center;
    align-items: center;
    grid-area: menulist;
    svg {
      display: flex;
      align-items: flex-end;
    }
    button{
      height: 54px;
    }
  @media (max-width: 768px) {
    display: flex;
  }
`;

const IconContainer = styled.div`
  justify-content: flex-end;
  margin-right: 30px;
  display: none;
  position: absolute;
  right: 0;
  @media (max-width: 768px) {
    justify-content: center;
    display: flex;
  }
`;

const NewAlertContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 54px;
  button {
    font-size: 17px;
    font-weight: 600;
    color: white;
    border: none;
    cursor: pointer;
  }
  span {
    margin-left: 12px;
    
  }
`;

const MenuIcon = styled(GiHamburgerMenu)`
  fill: white;
`;

const AlertIcon = styled(GoPrimitiveDot)`
  width: 12px;
  height: 12px;
  fill: var(--color-main-4);
  margin-left: 3px;
  visibility: hidden;
  &.new {
    visibility: visible;
  }
`;

const Header = () => {
  const [isLogIn, setIsLogIn] = useState<Boolean>(true);
  const [newMessage, setNewMessage] = useState<Boolean>(false);
  const [newAlert, setNewAlert] = useState<Boolean>(true);
  const [showNotice, setShowNotice] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const headers = [
    { name: "팀매칭", path: "/matching" },
    { name: "프로젝트", path: "/project" },
    { name: "커뮤니티", path: "/community" },
    { name: "마이페이지", path: "/mypage" }
  ];

  const logout = () => {

  }

  return (
    <Wrapper>
      {isLogIn ? (
        <HeaderContainer>

          <LogoContainer>
            <p>Let's Git It</p>
            <button onClick={logout}>로그아웃</button>
            <IconContainer>
              <MenuIcon size={24} onClick={() => { setShowMenu(!showMenu)}} />
            </IconContainer>
          </LogoContainer>

          <NavWrapper>
            {headers.map((menu, index) => (
              <NavStyle to={menu.path} key={index}>
                <p>{menu.name}</p>
              </NavStyle>
            ))}
          </NavWrapper>

          <InfoContainer>
            <NewAlert className={newMessage ? "new" : ""} />
            <button onClick={() => navigate("/received/messages")}>쪽지</button>
            <NewAlert className={newAlert ? "new" : ""} />
            <button onClick={() => setShowNotice(true)}>알림</button>
          </InfoContainer>

          
            
            {showMenu && (
              <HamburgerWrapper>
                  {headers.map((menu, index) => (
                    <NavStyle to={menu.path} key={index}>
                      <p>{menu.name}</p>
                    </NavStyle>
                  ))}
                  <NewAlertContainer>
                    <button onClick={() => navigate("/received/messages")}>
                      <span>쪽지</span>
                    </button>
                    <AlertIcon className={newMessage ? "new" : ""} />
                  </NewAlertContainer>
                  <NewAlertContainer>
                    <button onClick={() => setShowNotice(!showMenu)}>
                      <span>알림</span>
                    </button>
                    <AlertIcon className={newAlert ? "new" : ""} />
                  </NewAlertContainer>
                  <button onClick={logout}>로그아웃</button>
              </HamburgerWrapper>
            )}
          
        </HeaderContainer>
      ) : (
        <HeaderContainer>
          <ButtonContainer>
            <Button>로그인</Button>
            <Button>회원가입</Button>
          </ButtonContainer>
        </HeaderContainer>
      )}

      {showNotice && (
        <Model
          Children={<Notice setShowNotice={setShowNotice} />}
          setShowNotice={setShowNotice}
        />
      )}
    </Wrapper>
  );
};

export default Header;
