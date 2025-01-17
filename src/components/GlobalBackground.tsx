import { useContext } from "react";
import { ThemeContext } from "./ThemeToggleContext";
import React from "react";
import { GlobalContainer } from "./StyledComp";
import { IChildProps } from "../types/types";

export default function GlobalBackground({
  children,
}: IChildProps): React.ReactElement {
  const { theme } = useContext(ThemeContext);
  return <GlobalContainer theme={theme}>{children}</GlobalContainer>;
}
