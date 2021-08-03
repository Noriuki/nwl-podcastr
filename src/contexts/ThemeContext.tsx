//ThemeContext.js
import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.querySelector("html").classList.add("dark");
      setTheme("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
      setTheme("light");
    }
  }, []);

  function toggleThemeMode() {
    if (
      !localStorage.getItem("theme") ||
      localStorage.getItem("theme") === "light"
    ) {
      localStorage.theme = "dark";
      document.querySelector("html").classList.add("dark");
      setTheme("dark");
    } else {
      localStorage.theme = "light";
      document.querySelector("html").classList.remove("dark");
      setTheme("light");
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
