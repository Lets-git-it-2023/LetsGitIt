import { useState } from "react";
import styled from "styled-components";
import { AiTwotoneMail } from "react-icons/ai";
import UserLinks from "./UserLinks";

const Wrapper = styled.div`
  width: 100%;
  background-color: var(--color-sub-2);
  color: var(--color-sub-3);
  padding: 40px 20px 20px 25px;
  border-radius: 20px;
  justify-content: flex-start;
  font-size: 1.25rem;
`;

const EmailIcon = styled(AiTwotoneMail)`
  fill: var(--color-sub-3);
  margin-right: 5px;
`;

const EmailContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 1.25rem;
`;

export default function UserInfo() {
  const [content, SetContent] = useState("유저 소개글");
  const [useremail, setUserEmail] = useState("user@gmail.com");

  return (
    <Wrapper>
      <EmailContainer>
        <EmailIcon />
        {useremail}
      </EmailContainer>
      <UserLinks />
      {content}
    </Wrapper>
  );
}
