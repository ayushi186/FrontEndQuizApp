import React, { SyntheticEvent, useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import ResultComp from "./ResultComp";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { trackwronglyansweredquestion } from "../store/wrongandrightAnsweredReducer";
import A from "../assets/images/A.svg";
import { IconA, IconB, IconC, IconD } from "./SVG";
import ProgressBar from "./ProgressBar";
import html from "../assets/images/icon-html.svg";
import css from "../assets/images/icon-css.svg";
import js from "../assets/images/icon-js.svg";
import acc from "../assets/images/icon-accessibility.svg";

import { ThemeContext } from "./ThemeToggleContext";
import { useLoader } from "../helpers/customhooks";

export type Tquestions = {
  question: string;
  options: string[];
  answer: string;
};

export const Container = styled.div<{
  direction?: string;
  theme: string;
  comp?: string;
}>`
  height: 100vh;
  // width: 93%;
  width: 100%;
  //width: ${(props) => (props.comp === "result" ? "100%" : "unset")};
  display: flex;
  flex-direction: ${(props) => props.direction};
  background-position: center;
  color: ${(props) => (props.theme === "light" ? `var(--darkNavy)` : "white")};
  padding: ${(props) => (props.comp === "result" ? "0px" : "50px")};
  padding: 0px;
  padding-top: 80px;
  //margin: auto;
  justify-content: ${(props) =>
    props.comp === "result" ? "space-evenly" : "unset"};
`;

const Questiontile = styled.div<{
  borderColor?: string;
  idx?: number;
  theme: string;
}>`
  cursor: pointer;
  color: ${(props) => (props.theme === "dark" ? "white" : "var(--darkNavy)")};
  display: flex;
  align-items: center;
  flex: 1;
  margin: 20px;
  margin-top: 0px;
  width: 564px;
  height: 76px;
  border: ${(props) =>
    props.theme === "light" ? "white solid 2px" : "var(--navy) solid 2px"};
  border-radius: 15px;

  background-color: ${(props) =>
    props.theme === "light" ? `var(--verylightblue)` : `var(--opnavy)`};
  filter: ${(props) =>
    props.theme === "dark" ? `drop-shadow(0px 6px #313e51)` : ""};
`;

export const SubmitButton = styled.button<{ bgColor: string; color: string }>`
  margin: 20px;
  width: 564px;
  height: 66px;
  border: white solid 2px;
  border-radius: 15px;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  cursor: pointer;
`;

const Options = styled.div<{
  borderColor?: string;
  idx?: number;
  theme: string;
}>`
  margin: 20px;
  width: 35px;
  height: 36px;
  text-align: center;
  border: white solid 2px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.theme === "light" ? `var(--verylightblue))` : `var(--navy)`};

  color: ${(props) => (props.theme === "light" ? `var(--darkNavy)` : "white")};
  cursor: pointer;
`;
const QuestionComp = () => {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const { theme } = useContext(ThemeContext);

  const { title, questions, icon } = state;
  const [questionCount, setQuestionCount] = useState(
    Object.keys(questions).length
  );
  // counter will track the id of the question which must be on the screen.
  const [counter, setCounter] = useState(0);
  const [reversecounter, setReverseCounter] = useState(
    Object.keys(questions).length
  );
  const [hoverstate, setHoverState] = useState<string>("#F4F6FA");
  const [selectedOption, setSelectedOption] = useState<string | null>();
  const [actualAnswer, setActualAnswers] = useState<string | null>();
  const [correctAnswer, setCorrectAnswer] = useState<string>("");
  const [index, setIndex] = useState<string>();
  const [clickCounter, setClickCounter] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [selectedDiv, setSelectedDiv] = useState<HTMLElement | null>();
  const [hoverelementId, setHoverElementId] = useState<string>();
  const { showLoader, hideLoader } = useLoader();

  const answerCheck = (counter: number, i: any) => {
    showLoader("submitting your answer");
    setTimeout(() => {
      setClickCounter(true);
      if (selectedOption === actualAnswer) {
        setCorrectAnswer("#26D782");
      } else {
        dispatch(trackwronglyansweredquestion(i));
        setCorrectAnswer("#EE5454");
      }
      hideLoader();
    }, 600);
  };
  const moveToNextQuestion = () => {
    showLoader("Moving on to next question");
    setTimeout(() => {
      setDisabled(false);
      setClickCounter(false);
      setCorrectAnswer("");
      setCounter(counter + 1);
      hideLoader();
    }, 600);
  };

  const storeAnswer = (e: SyntheticEvent) => {
    setSelectedOption(e.currentTarget.textContent);

    if (selectedOption) {
    }
  };

  if (counter !== reversecounter) {
    return (
      <>
        <Container direction="column" theme={theme}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              position: "absolute",
              top: "0px",
              width: "80%",
              justifyContent: "space-around",
              paddingTop: "10px",
            }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "40%",
              }}>
              <img
                style={{
                  width: "60px",
                  height: "60px",
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
              <h1 className="h1-small" style={{ width: "40%" }}>
                {title}
              </h1>
            </div>
            <div style={{ width: "40%" }}></div>
          </div>
          {questions.map((i: any, idx: number) => {
            if (idx === counter) {
              return (
                <>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "space-around",
                    }}
                    key={idx}>
                    <div
                      style={{
                        height: "75%",
                        width: "40%",
                      }}>
                      <p className="body-smallItalic">
                        Question {counter !== 0 ? counter + 1 : 1} of{" "}
                        {questionCount}
                      </p>
                      <h2 style={{ height: "80%" }} className="heading-medium">
                        {i.question}
                      </h2>
                      <ProgressBar
                        bgcolor={"#A729F5"}
                        completed={
                          counter !== 0 ? questionCount * counter : 1
                        }></ProgressBar>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        width: "40%",

                        color: theme === "dark" ? "white" : "",
                      }}>
                      <ul
                        style={{
                          flex: 1,
                          color: theme === "dark" ? "white" : "",
                        }}>
                        {i.options.map((o: string, idx: number) => {
                          const id = `${idx}_${o}`;
                          return (
                            <Questiontile
                              className="h1-medium2"
                              aria-disabled={clickCounter ? true : false}
                              style={{
                                borderColor: index === id ? correctAnswer : "",
                              }}
                              theme={theme}
                              id={`question_${id}`}
                              key={id}
                              onClick={(e: SyntheticEvent) => {
                                if (e.currentTarget.ariaDisabled === "false") {
                                  setDisabled(true);
                                  setCorrectAnswer("#A729F5");

                                  setIndex(id);
                                  setActualAnswers(i.answer);
                                  storeAnswer(e);
                                  setSelectedDiv(
                                    document.getElementById(`option${id}`)
                                  );
                                }
                              }}
                              onMouseEnter={(e: SyntheticEvent) => {
                                if (e.currentTarget.ariaDisabled === "false") {
                                  const elem = document.getElementById(
                                    `option${id}`
                                  );
                                  setHoverElementId(elem?.lastElementChild?.id);

                                  if (selectedDiv !== elem) {
                                    elem?.setAttribute(
                                      "style",
                                      "background-color : #F6E7FF"
                                    );
                                  }
                                }
                              }}
                              onMouseLeave={(e: SyntheticEvent) => {
                                if (e.currentTarget.ariaDisabled === "false") {
                                  const elem = document.getElementById(
                                    `option${id}`
                                  );
                                  setHoverElementId("");

                                  if (selectedDiv !== elem) {
                                    elem?.setAttribute(
                                      "style",
                                      "background-color : #F4F6FA"
                                    );
                                  }
                                }
                              }}>
                              <Options
                                id={`option${id}`}
                                theme={theme}
                                style={{
                                  borderColor:
                                    index === id ? correctAnswer : "",
                                  backgroundColor:
                                    index === id ? correctAnswer : hoverstate,
                                  backgroundImage:
                                    idx === 0
                                      ? A
                                      : idx === 1
                                      ? "B"
                                      : idx === 2
                                      ? "C"
                                      : idx === 3
                                      ? "D"
                                      : "",
                                }}>
                                {idx === 0 ? (
                                  <IconA
                                    fill={
                                      index === id
                                        ? "white"
                                        : idx.toString() == hoverelementId
                                        ? "#A729F5"
                                        : "grey"
                                    }></IconA>
                                ) : idx === 1 ? (
                                  <IconB
                                    fill={
                                      index === id
                                        ? "white"
                                        : idx.toString() == hoverelementId
                                        ? "#A729F5"
                                        : "grey"
                                    }></IconB>
                                ) : idx === 2 ? (
                                  <IconC
                                    fill={
                                      index === id
                                        ? "white"
                                        : idx.toString() == hoverelementId
                                        ? "#A729F5"
                                        : "grey"
                                    }></IconC>
                                ) : idx === 3 ? (
                                  <IconD
                                    fill={
                                      index === id
                                        ? "white"
                                        : idx.toString() == hoverelementId
                                        ? "#A729F5"
                                        : "grey"
                                    }></IconD>
                                ) : (
                                  ""
                                )}
                              </Options>
                              {o}
                            </Questiontile>
                          );
                        })}
                      </ul>
                      <div style={{ flex: 1 }}>
                        <SubmitButton
                          className="h1-medium2"
                          disabled={disabled ? false : true}
                          bgColor={disabled ? "#A729F5" : "#c681f0"}
                          color="white"
                          onClick={() => {
                            !clickCounter
                              ? answerCheck(counter, i)
                              : moveToNextQuestion();
                          }}>
                          {clickCounter
                            ? "Next Question "
                            : " Submit Your Answer"}
                        </SubmitButton>
                      </div>
                    </div>
                  </div>
                </>
              );
            }
          })}
        </Container>
      </>
    );
  } else {
    return (
      <ResultComp title={title} icon={icon} questionCount={questionCount} />
    );
  }
};

export default QuestionComp;
