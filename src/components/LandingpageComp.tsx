import React, { useState } from "react";
import styled from "styled-components";
import quizzes from "../data.json";
import img from "./assets/images/icon-html.svg";
import QuestionsComp from "./QuestionsComp";
import { useSelector } from "react-redux";
import { type } from "os";
import QuestionComp from "./QuestionComp";

const Outerwrapper = styled.div`
  height: 80%;
  width: 90%;
  margin: auto;
  display: flex;
  //border: var(--green) solid 1px;
`;

const Equalinnerdiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  //border: var(--red) solid 1px;
  text-align: left;
  padding: 30px;
`;

const Unequalinnerdiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.5;
  visibility: none;
`;

const Sectiongrid = styled.div`
  flex: 1;
  margin: 20px;
  width: 564px;
  height: 86px;
  //border: var(--red) solid 1px;
  border-radius: 5px;
  background-color: var(--verylightblue);
`;
const HeaderText = styled.h1``;

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

type props = {
  data: Array<Tquestion>;
};

type TQuizzesData = {
  quizzes: Array<Tquestion>;
};
export const LandingpageComp: React.FC = () => {
  const data: Array<Tquestion>[] = Object.values(quizzes);

  return (
    <Outerwrapper>
      <Equalinnerdiv>
        <Equalinnerdiv>
          <HeaderText>Welcome to the</HeaderText>
          <h1 className="h1-bold">Frontend Quiz!</h1>
        </Equalinnerdiv>
        <Unequalinnerdiv></Unequalinnerdiv>
      </Equalinnerdiv>
      <Equalinnerdiv>
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
