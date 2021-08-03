import styles from "./styles.module.scss";
import moment from "moment";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
export function Header() {
  const context = useContext(ThemeContext);
  const currentDate = moment().format("DD MMM YY");
  return (
    <header className={styles.headerContainer}>
      <img
        src={context.theme === "dark" ? "/logo-dark.svg" : "/logo.svg"}
        alt="Podcastr"
        width="163"
        height="40"
      />
      <p>O melhor para você ouvir, sempre</p>

      <span>{currentDate}</span>
      <button
        onClick={context.toggleThemeMode}
        style={{
          backgroundColor: "transparent",
          border: "none",
          marginLeft: "1rem",
          width: "40px",
          marginBottom: "0.2rem",
        }}
      >
        <img src={context.theme === "dark" ? "/moon.svg" : "/sun.svg"} width="35" />
      </button>
    </header>
  );
}
