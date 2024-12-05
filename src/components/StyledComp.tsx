import styled from "styled-components";

export const ContainerStyles = styled.div`
  height: 20;
  width: "100%";
  background-color: white;
  border-radius: 15px;

  margin: 50;
`;

export const FillerStyles = styled.div<{
  bgcolor?: string;
  completed?: number;
}>`
  height: 20px;
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

export const ScoreCard = styled.div`
  background-color: white;
  align-items: center;
  border-radius: 15px;
  flex: 1;
  display: flex;
  width: 350px;
  height: 350px;
  flex-direction: column;
  justify-content: space-around;
`;
