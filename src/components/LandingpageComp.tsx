import React from "react";
import styled from "styled-components";
import quizzes from "../data.json";

import QuestionsComp from "./QuestionsComp";

import { useContext } from "react";
import { ThemeContext } from "./ThemeToggleContext";

const Outerwrapper = styled.div`
  height: 400px;
  width: 100%;
  margin: auto;
  display: flex;
  padding-top: 100px;
  //border: var(--green) solid 1px;
`;

const Equalinnerdiv = styled.div<{ theme: string }>`
  display: flex;
  height: 100%;
  flex-direction: column;
  flex: 1;
  //border: var(--red) solid 1px;
  text-align: left;
  padding: 30px;
  color: ${(props) => (props.theme === "dark" ? "white" : `var(--darkNavy)`)};
`;

const Unequalinnerdiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.5;
  visibility: none;
`;
const HeaderText = styled.h1<{ theme: string }>``;

type Tquestion = {
  title: string;
  icon: string;
  questions: Array<Tquestions>;
};

type Tquestions = {
  question: string;
  options: string[];
  answer: string;
};

export const LandingpageComp: React.FC = () => {
  const data: Array<Tquestion>[] = Object.values(quizzes);
  const { theme } = useContext(ThemeContext);

  return (
    <Outerwrapper>
      <Equalinnerdiv theme={theme}>
        <Equalinnerdiv theme={theme}>
          <HeaderText>Welcome to the</HeaderText>
          <h1 className="h1-bold">Frontend Quiz!</h1>
        </Equalinnerdiv>
        <Unequalinnerdiv></Unequalinnerdiv>
      </Equalinnerdiv>
      <Equalinnerdiv theme={theme}>
        <>
          {data[0].map((i: Tquestion, idx: number) => {
            return (
              <QuestionsComp
                key={idx}
                title={i.title}
                icon={i.icon}
                questions={i.questions}></QuestionsComp>
            );
          })}
        </>
      </Equalinnerdiv>
    </Outerwrapper>
  );
};
