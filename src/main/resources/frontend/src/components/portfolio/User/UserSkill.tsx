import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as MedalIcon } from "../../../styles/Icons/MedalIcon.svg";

const Wrapper = styled.div`
  width: 100%;
  background-color: var(--color-sub-2);
  color: var(--color-sub-1);
  padding: 20px;
  border-radius: 20px;
  justify-content: flex-start;
  font-size: 1.25rem;
`;

const ToolContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.125rem;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
`;


const Tool = styled.div`
  display: flex;
  height: 30px;
  align-items: center;
  border-left: 5px solid white;
  padding: 0 8px;
  margin-top: 8px;
  margin-left: 5px;
`;

const Medalcontainer = styled.div`
  display: inline-flex;
  justify-content: space-between;
  svg {
    margin-right: 10px;
    height: 60px;
  }
`;

const LanguageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px 0;
  flex-wrap: wrap;
`;

const Language = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 35% 65%;
  grid-template-rows: 1fr;
  align-items: center;
  margin-bottom: 12px;
  font-size: 1.25rem;

  span {
    margin-left: 10px;
    display: inline-block;
  }
`;

const Graph = styled.div`
  display: flex;
  width: 100%;
`;
  
const ProgressBar = styled.div<{width: number}>`
  width: 100%;
  height: 10px;
  position: relative;
  border-radius: 4px;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 2px;
    background-color: var(--color-sub-3);
    width: 100%;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${(props) => props.width}%;
    background-image: linear-gradient(to right, #7c08ed, #f9d5a2);
    transition: width 0.5s ease-in-out;
    border-radius: 4px;
  }
`;

  const DotContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: -4px;
`;

const Dot = styled.div`
  display: flex;
  width: 6px;
  height: 6px;
  background: var(--color-main-4);
  border-radius: 10px;
  z-index:1;
`;

interface LanguageItemProps {
  name: string;
  percentage: number;
}

  const LanguageItem: React.FC<LanguageItemProps> = ({ name, percentage }) => {
    return (
      <Language>
        <span>{name}</span>
        <Graph>
        <ProgressBar width={percentage} />
        {percentage === 100 ? (
          null
        ) : (
          <DotContainer>
            <Dot />
          </DotContainer>
        )}
        </Graph>
      </Language>
    );
  };

  interface ToolItemProps {
    tool: string;
  }
  
  const ToolItem: React.FC<ToolItemProps> = React.memo(({ tool }) => 
  <Tool>{tool}</Tool>);
  

  type UserSkillProps = {
    type: "portfolio" | ""; 
  }
export default function UserSkill(props : UserSkillProps) {
  const { type } = props;
  const [componentType, setComponentType] = useState<boolean>(true);
  useEffect(()=> {
    if(type === "portfolio"){
      setComponentType(false);
    }
  },[])
  const [languages, setLanguages] = useState([
    { name: "C++", percentage: 100 },
    { name: "Python", percentage: 80 },
    { name: "Java", percentage: 60 },
    { name: "javascript", percentage: 40 },
    { name: "Kotlin", percentage: 40 }
  ]);
  const [tool, setTool] = useState<string[]>([]);

  useEffect(() => {
    const tools = "ReactiveX Firebase Realm Git Bitrise";
    setTool(tools.split(" "));
  }, []);

  return (
    <Wrapper>
      {componentType &&
      <Medalcontainer>
      <MedalIcon />
      <MedalIcon />
      <MedalIcon />
    </Medalcontainer>
      }
    
      <LanguageContainer>
        {languages.map((language) => (
          <LanguageItem
            key={language.name}
            name={language.name}
            percentage={language.percentage}
          />
        ))}
      </LanguageContainer>

      <ToolContainer>
        {tool.map((t, index) => (
          <ToolItem key={index} tool={t} />
        ))}
      </ToolContainer>
    </Wrapper>
  );
}
