import React from "react";
import { ButtonNight, ButtonSun } from "./ThemeSwitcher.style";

function ThemeSwitcher({ toggleTheme, theme }) {
  return (
    <>
      {theme.title === "light" ? (
        <ButtonNight size="35" onClick={() => toggleTheme()} />
      ) : (
        <ButtonSun size="35" onClick={() => toggleTheme()} />
      )}
    </>
  );
}

export default ThemeSwitcher;
