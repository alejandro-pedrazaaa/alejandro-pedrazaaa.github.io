import "./navbar.css";
import moon from "../../Assets/Images/Toggle_Icons/Moon.svg";
import sun from "../../Assets/Images/Toggle_Icons/Sun.svg";

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
          <a href="#work" className="align-middle">
            Work
          </a>
          <a href="#contact-me" className="px-3 align-middle">
            Contact Me
          </a>
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
