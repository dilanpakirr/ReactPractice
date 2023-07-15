import React from "react";
import Button from "./Button";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import Profile from "./Profile";

function Container() {
  const theme = useContext(ThemeContext);
  console.log(theme);
  return (
    <div className={theme.theme}>
      <Button />
      <Profile />
    </div>
  );
}

export default Container;
