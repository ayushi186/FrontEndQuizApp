import React from "react";
import styled from "styled-components";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addcurrsecquestions } from "../store/answeredQuestionsReducer";
import html from "../assets/images/icon-html.svg";
import css from "../assets/images/icon-css.svg";
import js from "../assets/images/icon-js.svg";
import acc from "../assets/images/icon-accessibility.svg";
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

const Questiontile = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  margin: 20px;
  width: 564px;
  height: 86px;
  //border: var(--red) solid 1px;
  border-radius: 5px;
  background-color: var(--verylightblue);
  cursor: pointer;
  pointer: cursor !important;
`;

const QuestionsComp = ({ title, icon, questions }: Props) => {
  debugger;
  // useNavigate for navigating to the individual questions
  const navigate = useNavigate();
  const data = useSelector((state: Tquestions) => state);

  const dispatch = useDispatch();

  return (
    <>
      <Questiontile
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
        <h1 className="h1-small">{title}</h1>
      </Questiontile>
    </>
  );
};

export default QuestionsComp;
