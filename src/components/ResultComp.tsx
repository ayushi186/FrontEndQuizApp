import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetwronglyansweredquestion } from "../store/wrongandrightAnsweredReducer";
import { Container, SubmitButton } from "./QuestionComp";
import { ScoreCard, ScoreCardOuter } from "./StyledComp";
import { ThemeContext } from "./ThemeToggleContext";
import { useNavigate } from "react-router-dom";
import html from "../assets/images/icon-html.svg";
import css from "../assets/images/icon-css.svg";
import js from "../assets/images/icon-js.svg";
import acc from "../assets/images/icon-accessibility.svg";
type Iprops = {
  title?: string;
  questionCount?: number | undefined;
  icon?: string;
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

export default function ResultComp({ title, questionCount, icon }: Iprops) {
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
            alignItems: "left",
            position: "absolute",
            top: "0px",
            left: "0px",
            padding: "10px",
            paddingLeft: "50px",
          }}>
          <img
            style={{
              width: "60px",
              height: "60px",
              marginLeft: "10px",
              marginRight: "10px",
            }}
            src={
              icon === "icon-html"
                ? html
                : icon === "icon-css"
                ? css
                : icon === "icon-js"
                ? js
                : acc
            }
          />
          <h1 className="h1-small">{title}</h1>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "40%",
          }}>
          <h1 className="h1-large-light">Quiz Completed </h1>
          <h1>You Scored ...</h1>
        </div>
        <ScoreCardOuter>
          <ScoreCard theme={theme}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                style={{
                  width: "60px",
                  height: "60px",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
                src={
                  icon === "icon-html"
                    ? html
                    : icon === "icon-css"
                    ? css
                    : icon === "icon-js"
                    ? js
                    : acc
                }
              />
              <div className="h1-small">{title}</div>
            </div>
            <h1>{totalQ! - totalqronganswerfed}</h1>
            <h2
              className="body-reg"
              style={{ color: theme === "light" ? "#626C7F" : "white" }}>
              Out of {questionCount}
            </h2>
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
