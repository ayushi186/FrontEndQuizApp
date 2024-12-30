import React, { useContext } from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addcurrsecquestions } from "../store/answeredQuestionsReducer";
import html from "../assets/images/icon-html.svg";
import css from "../assets/images/icon-css.svg";
import js from "../assets/images/icon-js.svg";
import acc from "../assets/images/icon-accessibility.svg";
import { ThemeContext } from "./ThemeToggleContext";
interface Props {
  title: string;
  icon: string;
  questions: Array<Tquestions>;
}

type Tquestions = {
  question: string;
  options: string[];
  answer: string;
};

const Questiontile = styled.div<{ theme: string }>`
  display: flex;
  align-items: center;
  flex: 1;
  margin: 20px;
  margin-top: 0px;
  width: 564px;
  height: 30px;
  //border: var(--red) solid 1px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.theme === "light" ? `var(--verylightblue)` : `var(--opnavy)`};
  color: ${(props) => (props.theme === "dark" ? "white" : "")}
  cursor: pointer;
  filter: ${(props) =>
    props.theme === "dark" ? `drop-shadow(0px 6px #313e51)` : ""};
  pointer: cursor !important;
`;

const QuestionsComp = ({ title, icon, questions }: Props) => {
  const { theme } = useContext(ThemeContext);

  // useNavigate for navigating to the individual questions
  const navigate = useNavigate();
  const data = useSelector((state: Tquestions) => state);

  const dispatch = useDispatch();

  return (
    <>
      <Questiontile
        theme={theme}
        onClick={() => {
          navigate("./Question", { state: { title, questions, icon } });
          dispatch(addcurrsecquestions(questions));
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
        <h1
          className="h1-small"
          style={{ color: `${theme} === "dark" ? "white" : ""` }}>
          {title}
        </h1>
      </Questiontile>
    </>
  );
};

export default QuestionsComp;
