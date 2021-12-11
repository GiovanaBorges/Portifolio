import React, { useState } from "react";
import { ButtonNight, ButtonSun } from "./ThemeSwitcher.style";

function ThemeSwitcher({ toggleTheme, theme }) {
  return (
    <>
      {theme.title == "light" ? (
        <ButtonNight size="35" onClick={() => toggleTheme()}>
          <h1>peido</h1>
        </ButtonNight>
      ) : (
        <ButtonSun size="35" onClick={() => toggleTheme()}>
          <h1>peido</h1>
        </ButtonSun>
      )}
    </>
  );
}

export default ThemeSwitcher;
