import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addcurrsecquestions } from "../store/answeredQuestionsReducer";
import html from "../assets/images/icon-html.svg";
import css from "../assets/images/icon-css.svg";
import js from "../assets/images/icon-js.svg";
import acc from "../assets/images/icon-accessibility.svg";
import { ThemeContext } from "./ThemeToggleContext";
import { useLoader } from "../helpers/customhooks";
import { QuestiontileLandingPage } from "./StyledComp";
import { Tquestion, Tquestions } from "../types/types";

const QuestionsComp = ({
  title,
  icon,
  questions,
}: Tquestion): React.ReactElement => {
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  // useNavigate for navigating to the individual questions
  const navigate = useNavigate();
  const { showLoader, hideLoader } = useLoader();
  const data = useSelector((state: Tquestions) => state);

  return (
    <>
      <QuestiontileLandingPage
        className="Landingpagequestion-container"
        theme={theme}
        onClick={() => {
          showLoader("Loading questions");
          setTimeout(() => {
            navigate("./Question", { state: { title, questions, icon } });
            dispatch(addcurrsecquestions(questions));
            hideLoader();
          }, 500);
        }}>
        <img
          className="Landingpagequestion-icon"
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
          className={`h1-small Landingpagequestion-title-${
            theme === "dark" ? "dark" : "light"
          }`}>
          {title}
        </h1>
      </QuestiontileLandingPage>
    </>
  );
};

export default QuestionsComp;
