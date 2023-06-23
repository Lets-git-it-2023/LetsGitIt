import React, { useState } from "react";
import styled from "styled-components";
import { BsGithub, BsArrowUpRight } from "react-icons/bs";
import { BiLinkAlt } from "react-icons/bi";
import { SiNotion } from "react-icons/si";

const URLButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-items: flex-end;
  gap: 10px;
  padding: 35px 10px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    justify-content: flex-start;
    flex-wrap: nowrap;
    overflow-x: scroll;
    white-space: nowrap;
    padding: 0 5px;
  }
`;

const URLButton = styled.button`
  max-width: 120px;
  height: 120px;
  min-width: 30px;
  flex: 0 0 calc(50% - 20px);
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
  box-sizing: border-box;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.3));
  white-space: pre-line;
  position: relative;
  :hover {
    color: var(--color-sub-2);
    background-color: var(--color-sub-3);
    svg {
      fill: var(--color-sub-2);
    }
  }
  @media (max-width: 768px) {
    min-width: 120px;
    height: 120px;
    box-sizing: border-box;
  }
`;

const ArrowUp = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  svg {
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
  font-size: 15px;
  display: flex;
  flex-direction: row;
  white-space: nowrap;
  svg {
    width: auto;
    height: 18px;
    fill: var(--color-sub-1);
    margin-right: 5px;
  }
  @media (max-width: 768px) {
    grid-area: link;
  }
`;

const ProjectLinks = () => {
  const [isInitial, setIsInitial] = useState(false);
  return (
    <>
      {isInitial ? (
        <URLButtonContainer>
          <URLButton>URL을{"\n"}추가하세요</URLButton>

          <URLButton>URL을{"\n"}추가하세요</URLButton>
        </URLButtonContainer>
      ) : (
        <URLButtonContainer>
          <URLButton>
            <ArrowUp>
              <BsArrowUpRight />
            </ArrowUp>
            <LinkContainer>
              <BsGithub />
              깃허브
            </LinkContainer>
          </URLButton>

          <URLButton>
            <ArrowUp>
              <BsArrowUpRight />
            </ArrowUp>
            <LinkContainer>
              <SiNotion />팀 노션
            </LinkContainer>
          </URLButton>

          <URLButton>
            <ArrowUp>
              <BsArrowUpRight />
            </ArrowUp>
            <LinkContainer>
              <BiLinkAlt />
              참고 링크
            </LinkContainer>
          </URLButton>
          <URLButton>
            <ArrowUp>
              <BsArrowUpRight />
            </ArrowUp>
            <LinkContainer>
              <BiLinkAlt />
              참고 링크
            </LinkContainer>
          </URLButton>
        </URLButtonContainer>
      )}
    </>
  );
};

export default ProjectLinks;
