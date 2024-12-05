import React, {
  BaseSyntheticEvent,
  SyntheticEvent,
  useRef,
  useState,
} from "react";
import { useLocation } from "react-router-dom";
import ResultComp from "./ResultComp";
import styled from "styled-components";
import patternlight from "../assets/images/pattern-background-desktop-light.svg";
import { useDispatch } from "react-redux";
import { trackwronglyansweredquestion } from "../store/wrongandrightAnsweredReducer";
import A from "../assets/images/A.svg";
import { IconA, IconB, IconC, IconD } from "./SVG";
import ProgressBar from "./ProgressBar";
import html from "../assets/images/icon-html.svg";
import css from "../assets/images/icon-css.svg";
import js from "../assets/images/icon-js.svg";
import acc from "../assets/images/icon-accessibility.svg";

interface IProps {
  title: string;
  icon: string;
  questions: Array<Tquestions>;
}

export type Tquestions = {
  question: string;
  options: string[];
  answer: string;
};

export const Container = styled.div<{ direction?: string }>`
  height: 100vh;
  border: blue solid 1px;
  display: flex;
  flex-direction: ${(props) => props.direction};
  background-color: var(--lightblue);
  background-image: url(${patternlight});
  background-position: center;
  padding: 50px;
`;

const Questiontile = styled.div<{ borderColor?: string; idx?: number }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  flex: 1;
  margin: 20px;
  width: 564px;
  height: 66px;
  border: white solid 2px;
  border-radius: 15px;
  background-color: var(--verylightblue);
`;

const SubmitButton = styled.button<{ bgColor: string; color: string }>`
  margin: 20px;
  width: 564px;
  height: 66px;
  border: white solid 2px;
  border-radius: 15px;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  cursor: pointer;
`;

const Options = styled.div<{ borderColor?: string; idx?: number }>`
  margin: 20px;
  width: 35px;
  height: 36px;
  text-align: center;
  border: white solid 2px;
  border-radius: 10px;
  //background-color: var(--verylightblue);
  cursor: pointer;
`;
const QuestionComp = () => {
  const dispatch = useDispatch();
  const { state } = useLocation();
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
  const [selectedDiv, setSelectedDiv] = useState<HTMLElement | null>();
  const [hoverelementId, setHoverElementId] = useState<string>();
  //console.log("selectedOption", selectedOption);

  const answerCheck = (counter: number, i: any) => {
    setClickCounter(true);
    if (selectedOption === actualAnswer) {
      setCorrectAnswer("#26D782");
    } else {
      dispatch(trackwronglyansweredquestion(i));
      setCorrectAnswer("#EE5454");
    }
  };
  const moveToNextQuestion = () => {
    debugger;
    setClickCounter(false);
    setCorrectAnswer("");
    setCounter(counter + 1);
  };

  const storeAnswer = (e: SyntheticEvent) => {
    setSelectedOption(e.currentTarget.textContent);

    if (selectedOption) {
      console.log(selectedOption);
    }
  };

  if (counter !== reversecounter) {
    return (
      <>
        <Container direction="column">
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
            <h1 className="h1-small">{title}</h1>
          </div>
          {questions.map((i: any, idx: number) => {
            if (idx === counter) {
              return (
                <>
                  <div
                    style={{ display: "flex", width: "100%", flex: 0.5 }}
                    key={idx}>
                    <div
                      style={{
                        width: "50%",
                        paddingRight: "80px",
                        height: "75%",
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
                        width: "50%",
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                      }}>
                      <ul style={{ flex: 1 }}>
                        {i.options.map((o: string, idx: number) => {
                          const id = `${idx}_${o}`;
                          return (
                            <Questiontile
                              style={{
                                borderColor: index === id ? correctAnswer : "",
                              }}
                              id={`question_${id}`}
                              key={id}
                              onClick={(e: SyntheticEvent) => {
                                setCorrectAnswer("#A729F5");

                                setIndex(id);
                                setActualAnswers(i.answer);
                                storeAnswer(e);
                                setSelectedDiv(
                                  document.getElementById(`option${id}`)
                                );
                                console.log(idx);
                              }}
                              onMouseEnter={(e: SyntheticEvent) => {
                                const elem = document.getElementById(
                                  `option${id}`
                                );
                                setHoverElementId(elem?.lastElementChild?.id);

                                console.log(elem?.lastElementChild?.id);
                                if (selectedDiv !== elem) {
                                  elem?.setAttribute(
                                    "style",
                                    "background-color : #F6E7FF"
                                  );
                                  // elem?.firstChild?.setAttribute(
                                  //   "style",
                                  //   "fill : #F6E7FF"
                                  // );
                                }

                                //setHoverState("#F6E7FF");
                              }}
                              onMouseLeave={(e: SyntheticEvent) => {
                                const elem = document.getElementById(
                                  `option${id}`
                                );
                                setHoverElementId("");
                                console.log(index);
                                console.log(elem);
                                if (selectedDiv !== elem) {
                                  elem?.setAttribute(
                                    "style",
                                    "background-color : #F4F6FA"
                                  );
                                }

                                //setHoverState("#F6E7FF");
                              }}>
                              <Options
                                id={`option${id}`}
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
                          bgColor="#A729F5"
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
    return <ResultComp title={title} questionCount={questionCount} />;
  }
};

export default QuestionComp;
