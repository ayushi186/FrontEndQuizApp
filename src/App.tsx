import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { createBrowserRouter } from "react-router-dom";

import { LandingpageComp } from "./components/LandingpageComp";
import patternlight from "./assets/images/pattern-background-desktop-light.svg";

import { styled } from "styled-components";
import { type } from "@testing-library/user-event/dist/type";

const StyledSVG = styled.svg`
  //background-color: ${(props) => props.color};
`;

const Container = styled.div`
  height: 100vh;
  border: blue solid 1px;
  display: flex;
  background-color: var(--lightblue);
  background-image: url(${patternlight});
  background-position: center;
`;

interface Tquestion {
  title: string;
  icon: string;
  questions: Array<Tquestions>;
}

type Tquestions = {
  question: string;
  options: string[];
  answer: string;
};
function App() {
  //console.log("check", Object.values(quizzes)[0]);

  return (
    <div className="App">
      <Container>
        <LandingpageComp></LandingpageComp>
      </Container>
    </div>
  );
}

export default App;
