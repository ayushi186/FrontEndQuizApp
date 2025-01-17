import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetwronglyansweredquestion } from "../store/wrongandrightAnsweredReducer";
import { Container, SubmitButton } from "./StyledComp";
import { ScoreCard, ScoreCardOuter } from "./StyledComp";
import { ThemeContext } from "./ThemeToggleContext";
import { useNavigate } from "react-router-dom";
import html from "../assets/images/icon-html.svg";
import css from "../assets/images/icon-css.svg";
import js from "../assets/images/icon-js.svg";
import acc from "../assets/images/icon-accessibility.svg";
import { IAnsweredQreducers, IResultprops } from "../types/types";

export default function ResultComp({
  title,
  questionCount,
  icon,
}: IResultprops): React.ReactElement {
  const cartItems = useSelector(
    (state: IAnsweredQreducers) => state.answeredquestions
  );
  const totalQ = questionCount;
  const totalqronganswerfed = cartItems.length;

  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <Container theme={theme} comp="result" className="Result-Container">
        <div className="Result-title">
          <img
            className="Result-icon"
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
        <div className="Result-content">
          <h1 className="h1-large-light">Quiz Completed </h1>
          <h1>You Scored ...</h1>
        </div>
        <ScoreCardOuter>
          <ScoreCard theme={theme}>
            <div className="Result-content--inner">
              <img
                className="Result-content--img"
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
              className={`body-reg result-content-title-${
                theme === "dark" ? "dark" : "light"
              }`}>
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
