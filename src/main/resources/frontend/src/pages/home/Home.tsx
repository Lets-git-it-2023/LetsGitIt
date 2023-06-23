import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HomeTab from "./HomeTab";
import Intro from "./Intro";
import Animation from "./Animation";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const Wrapper = styled.div`
  justify-content: center;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: repeat(2, minmax(max-content, 25rem));
  grid-template-columns: repeat(2, minmax(max-content, 30rem));
  gap: 1rem;
  width: 90%;
  padding: 10px;
  grid-template-areas: "ani intro"
  "tab tab";
  @media (max-width: 768px) {
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: 1fr;
    padding: 0 2rem;
  }
`;

const HomeTabContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1 / -1;
  grid-area: tab;
  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

const IntroWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 90%;
  grid-area: intro;
  padding-right: 10px;
  @media (max-width: 768px) {
    justify-content: center;
    
  }
`;

const AnimationWrapper = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  justify-content: flex-end;
  grid-area: ani;
  padding-top: 20px;
  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

export default function SignOutHome() {
  return (
    <Container>
    <Wrapper>
      <AnimationWrapper>
        <Animation />
      </AnimationWrapper>

      <IntroWrapper>
        <Intro />
      </IntroWrapper>

      <HomeTabContainer>
          <HomeTab />
      </HomeTabContainer>
    </Wrapper>
    </Container>
  );
}
