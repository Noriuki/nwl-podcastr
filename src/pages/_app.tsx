import "../styles/global.scss";
var moment = require("moment");
var momentDurationFormatSetup = require("moment-duration-format");

momentDurationFormatSetup(moment);

import { Header } from "../components/Header";
import { Player } from "../components/Player";

import styles from "../styles/app.module.scss";

import { PlayerContextProvider } from "../contexts/PlayerContext";
import { ThemeProvider } from "../contexts/ThemeContext";

function MyApp({ Component, pageProps }) {
  moment.locale("pt-BR");
  return (
    <ThemeProvider>
      <PlayerContextProvider>
        <div className={styles.wrapper}>
          <main>
            <Header />
            <Component {...pageProps} />
          </main>
          <Player />
        </div>
      </PlayerContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
