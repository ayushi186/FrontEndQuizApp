import React from "react";
import quizzes from "../data.json";
import QuestionsComp from "./QuestionsComp";
import { useContext } from "react";
import { ThemeContext } from "./ThemeToggleContext";
import { Equalinnerdiv, HeaderText, Outerwrapper } from "./StyledComp";
import { Tquestion } from "../types/types";

export const LandingpageComp: React.FC = () => {
  const data: Array<Tquestion>[] = Object.values(quizzes);
  const { theme } = useContext(ThemeContext);

  return (
    <Outerwrapper>
      <Equalinnerdiv theme={theme}>
        <Equalinnerdiv theme={theme} width={"100%"}>
          <HeaderText>Welcome to the</HeaderText>
          <h1 className="h1-bold">Frontend Quiz!</h1>
        </Equalinnerdiv>
      </Equalinnerdiv>
      <Equalinnerdiv theme={theme}>
        <>
          {data[0].map((i: Tquestion, idx: number) => {
            return (
              <QuestionsComp
                key={idx}
                title={i.title}
                icon={i.icon}
                questions={i.questions}></QuestionsComp>
            );
          })}
        </>
      </Equalinnerdiv>
    </Outerwrapper>
  );
};
