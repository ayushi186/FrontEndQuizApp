import styled from "styled-components";
import patternlight from "../assets/images/pattern-background-desktop-light.svg";
import patterndark from "../assets/images/pattern-background-desktop-dark.svg";

export const ContainerStyles = styled.div`
  height: 10px;
  width: "100%";
  background-color: white;
  border-radius: 15px;

  margin: 50;
`;

export const FillerStyles = styled.div<{
  bgcolor?: string;
  completed?: number;
}>`
  height: 10px;
  width: ${(props) => props.completed}%;
  background-color: ${(props) => props.bgcolor};
  borderradius: "inherit";
  textalign: "right";
  border-radius: 15px;
`;
export const LabelStyles = styled.span`
  padding: 5;
  color: "white";
  fontweight: "bold";
`;

export const ScoreCard = styled.div<{ theme: string; inner?: boolean }>`
  background-color: ${(props) =>
    props.theme === "light" ? "white" : "var(--navy)"};
  align-items: center;
  border-radius: 15px;
  width: 100%;
  display: flex;

  height: 350px;
  flex-direction: column;
  justify-content: space-around;
`;

export const ScoreCardOuter = styled.div`
  align-items: center;
  border-radius: 15px;
  width: 40%;
  display: flex;

  height: 500px;
  flex-direction: column;
  justify-content: space-around;
`;

export const LoaderWrapper = styled.div<{ theme: string }>`
  position: absolute;
  z-index: 99999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  background-color: ${(props) =>
    props.theme === "light" ? "white" : "var(--navy)"};
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

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

export const Questiontile = styled.div<{
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

export const Options = styled.div<{
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

export const GlobalContainer = styled.div<{ theme: string }>`
  height: 100vh;
  // margin: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: ${(props) =>
    props.theme === "light" ? `var(--lightblue)` : `var(--darkNavy)`};
  background-image: ${(props) =>
    props.theme === "light" ? `url(${patternlight})` : `url(${patterndark})`};
  background-position: center;
`;

export const Outerwrapper = styled.div`
  height: 400px;
  width: 100%;
  margin: auto;
  display: flex;
  padding-top: 100px;
  justify-content: space-around;
  //border: var(--green) solid 1px;
`;

export const Equalinnerdiv = styled.div<{ theme: string; width?: string }>`
  display: flex;
  height: 100%;
  flex-direction: column;
  //flex: 1;
  //width: 100%;
  width: ${(props) => (props.width ? props.width : "40%")};
  //border: var(--red) solid 1px;
  text-align: left;
  padding: 30px;
  color: ${(props) => (props.theme === "dark" ? "white" : `var(--darkNavy)`)};
`;

export const Unequalinnerdiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.5;
  visibility: none;
`;
export const HeaderText = styled.h1<{ theme: string }>``;

export const QuestiontileLandingPage = styled.div<{ theme: string }>`
  display: flex;
  align-items: center;
  flex: 1;
  margin: 20px;
  margin-top: 0px;
  //width: 564px;
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
