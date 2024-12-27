import { useContext } from "react";
import { ThemeContext } from "./ThemeToggleContext";
import styled from "styled-components";
import patternlight from "../assets/images/pattern-background-desktop-light.svg";
import patterndark from "../assets/images/pattern-background-desktop-dark.svg";
import React from "react";

interface IProps {
  children: React.ReactNode;
}
const Container = styled.div<{ theme: string }>`
  height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: ${(props) =>
    props.theme === "light" ? `var(--lightblue)` : `#3B4D66`};
  background-image: ${(props) =>
    props.theme === "light" ? `url(${patternlight})` : `url(${patterndark})`};
  background-position: center;
`;

export default function GlobalBackground({ children }: IProps) {
  const { theme } = useContext(ThemeContext);
  return <Container theme={theme}>{children}</Container>;
}
