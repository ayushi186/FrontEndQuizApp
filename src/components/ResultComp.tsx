import React from "react";
import { useSelector } from "react-redux";
import { Container } from "./QuestionComp";
import { ScoreCard } from "./StyledComp";

type Iprops = {
  title?: string;
  questionCount?: number | undefined;
};
type Ireducers = {
  answeredquestions: Array<Tquestions>;
  data: Array<Tquestion>;
};

type Tquestions = {
  question: string;
  options: string[];
  answer: string;
};
type Tquestion = {
  title: string;
  icon: string;
  questions: Array<Tquestions>;
};

const ResultComp = ({ title, questionCount }: Iprops) => {
  const cartItems = useSelector((state: Ireducers) => state.answeredquestions);
  const totalQ = questionCount;
  const totalqronganswerfed = cartItems.length;

  return (
    <>
      <Container>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            flex: 1,
          }}>
          <div>{title}</div>
          <h1>Quiz Completed </h1>
          <h2>You Scored ...</h2>
        </div>
        <ScoreCard>
          <div>{title}</div>
          <h1>{totalQ! - totalqronganswerfed}</h1>
          <h2>Out of {questionCount}</h2>
        </ScoreCard>
      </Container>
    </>
  );
};

export default ResultComp;
