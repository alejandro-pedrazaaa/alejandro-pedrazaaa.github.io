import { useState } from "react";

export const useDarkMode = () => {
  const [theme, setTheme] = useState("dark");

  const setMode = (mode) => {
    setTheme(mode);
  };

  const themeToggler = () => {
    theme === "light" ? setMode("dark") : setMode("light");
  };

  return [theme, themeToggler];
};
