import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 8px;
  align-items: center;
  background-color: var(--color-main-4);
  width: 100%;
  height: 100%;
  padding: 5px 10px;
  border-radius: 20px;
  box-sizing: border-box;
  color: var(--color-sub-1);
  p {
    font-size: 16px;
    margin-bottom: 20px;
  }
  @media (max-width: 768px) {
    display: grid;
    background-color: var(--color-sub-2);
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
    grid-template-areas: "graph" "hr" "commit";
    justify-items: center;
    padding: 0;
  }
`;

const Line = styled.hr`
  display: none;
  grid-area: hr;
  border: none;
  width: 100%;
  border-top: 1px solid var(--color-sub-3);
  @media (max-width: 768px) {
    display: block;
  }
`;

const CommitContainer = styled.div`
  max-width: 195px;
  height: 83px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 24px 7px 24px;
  gap: 30px;
  box-sizing: border-box;
  background-color: var(--color-sub-2);
  margin-right: 5px;
  border-radius: 10px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);
  @media (max-width: 768px) {
    grid-area: commit;
    padding: 0 10px;
    width: 100%;
    box-shadow: none;
  }
`;

const CommitDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  p {
    margin: 0;
    font-size: 15px;
  }
  span {
    font-size: 36px;
    font-weight: 500;
  }
`;

const ProgressBar = styled.div<{ width: number }>`
  width: 190px;
  height: 10px;
  position: relative;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 100%;
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 6px;
    background-color: var(--color-sub-3);
    width: 100%;
    border-radius: 30px;
  }
  &::after {
    width: ${(props) => props.width}%;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: var(--color-main-4);
    transition: width 0.5s ease-in-out;
    border-radius: 30px;
  }
`;
const Dot = styled.div`
  width: 16px;
  height: 16px;
  background: #f8d3a2;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const LevelContainer = styled.div`
  max-width: 283px;
  width: 100%;
  height: 83px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 10px;
  background-color: var(--color-sub-2);
  padding: 0 15px;
  box-sizing: border-box;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);
  @media (max-width: 768px) {
    flex-direction: column;
    grid-area: graph;
    box-shadow: none;
  }
`;

const Text = styled.div`
  display: flex;
  align-items: flex-end;
  margin-right: 10px;
  p {
    font-size: 20px;
    margin-bottom: 7px;
  }
  span {
    font-size: 36px;
    font-weight: 500;
  }
`;

export const CommitLevel = () => {
  return (
    <Wrapper>
      <CommitContainer>
        <CommitDetail>
          <p>내 커밋</p>
          <span>30</span>
        </CommitDetail>
        <CommitDetail>
          <p>팀 커밋</p>
          <span>226</span>
        </CommitDetail>
      </CommitContainer>
      <Line />
      <LevelContainer>
        <Text>
          <p>Lv.</p>
          <span>3</span>
        </Text>
        <ProgressBar width={30}>
          <Dot style={{ left: `${25}%` }} />
        </ProgressBar>
      </LevelContainer>
    </Wrapper>
  );
};
