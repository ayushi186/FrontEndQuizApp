import React, { useContext, useState } from "react";
import { ThemeContext } from "./ThemeToggleContext";
import sunlight from "../assets/images/icon-sun-light.svg";
import sundark from "../assets/images/icon-sun-dark.svg";
import moonlight from "../assets/images/icon-moon-light.svg";
import moondark from "../assets/images/icon-moon-dark.svg";

import Switch from "react-js-switch";

export default function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="toogle">
      <div className="toggle-icon">
        <img src={theme === "light" ? sunlight : sundark} />
      </div>
      <Switch
        initialValue={false}
        backgroundColor={{ on: "#A729F5", off: "#A729F5" }}
        borderColor={{ on: "var(--navy)", off: "white" }}
        onChange={handleThemeToggle}></Switch>
      <div className="toggle-icon">
        <img src={theme === "light" ? moonlight : moondark} />
      </div>
    </div>
  );
}
