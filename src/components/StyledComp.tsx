import styled from "styled-components";

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
