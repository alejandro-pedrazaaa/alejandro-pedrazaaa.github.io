import "./Styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Styles/Themes.Styles";
import { GlobalStyles } from "./Styles/Global.Styles";
import { useDarkMode } from "./Hooks/useDarkMode";
import { Fireflies } from "./Components/Fireflies";
import { NavBar } from "./Components/NavBar";
import { AboutMe } from "./Components/Profile/AboutMe";
import { MyWork } from "./Components/MyWork/MyWork";
import { ContactMe } from "./Components/ContactMe";

function App() {
  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <Fireflies />
      <GlobalStyles />
      <NavBar theme={theme} toggleTheme={themeToggler} />
      <AboutMe />
      <MyWork />
      <ContactMe />
    </ThemeProvider>
  );
}

export default App;
