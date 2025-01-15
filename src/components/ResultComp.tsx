import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetwronglyansweredquestion } from "../store/wrongandrightAnsweredReducer";
import { Container, SubmitButton } from "./QuestionComp";
import { ScoreCard, ScoreCardOuter } from "./StyledComp";
import { ThemeContext } from "./ThemeToggleContext";
import { useNavigate } from "react-router-dom";
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

export default function ResultComp({ title, questionCount }: Iprops) {
  const cartItems = useSelector((state: Ireducers) => state.answeredquestions);
  const totalQ = questionCount;
  const totalqronganswerfed = cartItems.length;

  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <Container theme={theme} comp="result">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "40%",
          }}>
          <div>{title}</div>
          <h1 className="h1-large-light">Quiz Completed </h1>
          <h1>You Scored ...</h1>
        </div>
        <ScoreCardOuter>
          <ScoreCard theme={theme}>
            <div>{title}</div>
            <h1>{totalQ! - totalqronganswerfed}</h1>
            <h2>Out of {questionCount}</h2>
          </ScoreCard>
          <SubmitButton
            onClick={() => {
              navigate("/");
              dispatch(resetwronglyansweredquestion());
            }}
            className="h1-medium2"
            bgColor={"#A729F5"}
            color="white">
            Play Again
          </SubmitButton>
        </ScoreCardOuter>
      </Container>
    </>
  );
}
