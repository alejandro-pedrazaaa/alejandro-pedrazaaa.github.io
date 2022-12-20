import moon from "../Assets/Images/Toggle_Icons/Moon.svg";
import sun from "../Assets/Images/Toggle_Icons/Sun.svg";
import { Link } from "react-scroll";

export const NavBar = ({ theme, toggleTheme }) => {
  return (
    <nav className="navbar">
      <div className="container-fluid p-0">
        <div>
          <a className="navbar-brand" href="#home">
            &#60;AP&#62;
          </a>
        </div>
        <div className="d-flex align-items-center">
          <Link
            to="my-work"
            spy={true}
            smooth={true}
            offset={-5}
            duration={100}
            className="p-2"
          >
            My Work
          </Link>
          <Link
            to="contact-me"
            spy={true}
            smooth={true}
            offset={-5}
            duration={100}
            className="p-2"
          >
            Contact Me
          </Link>
          <button className="p-2" onClick={toggleTheme}>
            {theme === "light" ? (
              <img
                src={moon}
                alt="Moon icon"
                className="d-flex justify-content-center"
              />
            ) : (
              <img
                src={sun}
                alt="Sun icon"
                className="d-flex justify-content-center"
              />
            )}
          </button>{" "}
        </div>
      </div>
    </nav>
  );
};
