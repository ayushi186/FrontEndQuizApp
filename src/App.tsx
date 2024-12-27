import React, { useContext, useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { createBrowserRouter } from "react-router-dom";

import { LandingpageComp } from "./components/LandingpageComp";
import patternlight from "./assets/images/pattern-background-desktop-light.svg";
import patterndark from "./assets/images/pattern-background-desktop-dark.svg";

import { styled } from "styled-components";
import ThemeToggle from "./components/ThemeToggel";
import { ThemeContext } from "./components/ThemeToggleContext";

const StyledSVG = styled.svg`
  //background-color: ${(props) => props.color};
`;

export const Container = styled.div<{ theme: string }>`
  height: 100vh;
  border: blue solid 1px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: ${(props) =>
    props.theme === "light" ? `var(--lightblue)` : `#3B4D66`};
  background-image: ${(props) =>
    props.theme === "light" ? `url(${patternlight})` : `url(${patterndark})`};
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
  return (
    <div className="App">
      <div className="toggle"></div>
      <LandingpageComp></LandingpageComp>
    </div>
  );
}

export default App;
