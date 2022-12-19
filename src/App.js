import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Styles/Themes.Styles";
import { GlobalStyles } from "./Styles/Global.Styles";
import { useDarkMode } from "./Hooks/useDarkMode";
import { Fireflies } from "./Components/Fireflies";
import { NavBar } from "./Components/NavBar";
import { Profile } from "./Components/Profile/Profile";
import { MyWork } from "./Components/MyWork/MyWork";
import { Footer } from "./Components/Footer";

function App() {
  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <Fireflies />
      <GlobalStyles />
      <NavBar theme={theme} toggleTheme={themeToggler} />
      <Profile />
      <MyWork />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
