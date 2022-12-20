import "./Styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Styles/Themes.Styles";
import { GlobalStyles } from "./Styles/Global.Styles";
import { useDarkMode } from "./Hooks/useDarkMode";
import { Fireflies } from "./Components/Fireflies";
import { NavBar } from "./Components/NavBar";
import { AboutMe } from "./Components/AboutMe/AboutMe";
import { MyWork } from "./Components/MyWork/MyWork";
import { ContactMe } from "./Components/ContactMe";

function App() {
  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <Fireflies />
      <GlobalStyles />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 px-0">
            <NavBar theme={theme} toggleTheme={themeToggler} />
            <AboutMe />
            <MyWork />
            <ContactMe />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
