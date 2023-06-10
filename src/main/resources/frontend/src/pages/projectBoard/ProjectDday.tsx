import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: var(--color-sub-1);
  padding: 20px;
  font-size: 0.93rem;
  border-radius: 20px;
  background-color: var(--color-sub-2);
  box-sizing: border-box;
`;

const GraphContainer = styled.div`
  display: flex;
  flex: 1;
`;

const DonutContainer = styled.div`
  position: relative;
  width: 180px;
  height: 180px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledSVG = styled.svg`
  width: 100%;
  height: 100%;
`;

const OuterCircle = styled.circle`
  fill: none;
  stroke: var(--color-sub-4);
  stroke-width: 10;
  @media (max-width: 768px) {
    stroke-width: 20;
  }
`;

const ProgressCircle = styled.circle<{ progress: number }>`
  fill: none;
  stroke: var(--color-main-4);
  stroke-width: 10;
  stroke-dasharray: ${(props) => 2 * Math.PI * 90};
  stroke-dashoffset: ${(props) => 2 * Math.PI * 90 * (1 - props.progress)};
  stroke-linecap: round;
  transform: rotate(-90deg);
  transform-origin: center;
  @media (max-width: 768px) {
    stroke-width: 20;
  }
`;

const InnerCircle = styled.circle`
  fill: var(--color-sub-4);
  filter: drop-shadow(0 5px rgba(0, 0, 0, 0.5));
`;

const Text = styled.div<{ initial: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: ${({ initial }) => (initial ? "0.875rem" : "0.75rem")};
  text-align: center;
  justify-content: center;
  color: var(--color-sub-1);
  span {
    font-size: 2rem;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const MiniText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  justify-content: center;
  color: var(--color-sub-1);
  line-height: 2;

  display: flex;
  flex-direction: row;
  align-items: flex-end;
  p {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;
  }
  .percent {
    font-size: 0.68rem;
    font-weight: 500;
    margin-bottom: 7px;
  }
`;

const DayInfo = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  box-sizing: border-box;
  span {
    font-size: 0.93rem;
  }
  p {
    font-size: 2.5rem;
    font-weight: 500;
    margin: 0;
  }
  hr {
    width: 100%;
    background-color: #717171;
    border: none;
    height: 1px;
    margin: 15px 0;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ProjectDday = () => {
  const [initial, setInitial] = useState(false);
  const [date, setDate] = useState({
    start: "2023.05.23",
    end: "2023/08.30"
  });
  const percent = 10;
  return (
    <Wrapper>
      <GraphContainer>
        <DonutContainer>
          <StyledSVG viewBox="0 0 200 200">
            <OuterCircle cx="100" cy="100" r="90" />
            <ProgressCircle
              cx="100"
              cy="100"
              r="90"
              progress={initial ? 0 : percent / 100}
            />
            <InnerCircle cx="100" cy="100" r="70" />
          </StyledSVG>
          <Text initial={initial ? true : false}>
            {initial ? (
              <>
                프로젝트 기간을
                <br />
                추가하세요
              </>
            ) : (
              <>
                프로젝트 완료까지
                <br />
                <span>{percent}%</span>
              </>
            )}
          </Text>
        </DonutContainer>
      </GraphContainer>
      <DayInfo>
        {initial ? (
          <>
            <p>DAY 1</p>
            <span>{date.start}</span>
          </>
        ) : (
          <>
            <span>
              {date.start}
              <br />~ {date.end}
            </span>
            <hr />
            <p>DAY 82</p>
            <span>{date.start}</span>
          </>
        )}
      </DayInfo>
    </Wrapper>
  );
};

export const MiniDday = () => {
  const percent = 82;
  return (
    <Wrapper>
      <GraphContainer>
        <DonutContainer>
          <StyledSVG viewBox="0 0 200 200">
            <OuterCircle cx="100" cy="100" r="90" />
            <ProgressCircle cx="100" cy="100" r="90" progress={percent / 100} />
          </StyledSVG>
          <MiniText>
            <p>{percent}</p>
            <p className="percent">%</p>
          </MiniText>
        </DonutContainer>
      </GraphContainer>
    </Wrapper>
  );
};
