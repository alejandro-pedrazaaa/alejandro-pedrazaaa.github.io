import moon from "../Assets/Images/Toggle_Icons/Moon.svg";
import sun from "../Assets/Images/Toggle_Icons/Sun.svg";
import { Link } from "react-scroll";

export const NavBar = ({ theme, toggleTheme }) => {
  return (
    <nav className="navbar">
      <div className="container px-0">
        <div className="d-flex align-items-center">
          <span className="logo-text">&#60;AP&#62;</span>
        </div>
        <div className="d-flex align-items-center">
          <Link
            to="my-work"
            spy={true}
            smooth={true}
            offset={-5}
            duration={100}
          >
            My Work
          </Link>
          <Link
            to="contact-me"
            spy={true}
            smooth={true}
            offset={-5}
            duration={100}
            className="px-3"
          >
            Contact Me
          </Link>
          <button
            className="p-2 d-flex align-items-center justify-content-center"
            onClick={toggleTheme}
          >
            {theme === "light" ? (
              <img src={moon} alt="Moon icon" />
            ) : (
              <img src={sun} alt="Sun icon" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};
