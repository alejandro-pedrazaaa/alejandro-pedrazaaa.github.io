import "./footer.css";

export const Footer = () => {
  return (
    <footer className="container-fluid">
      <div className="row">
        <div className="col-12 contact-me">
          <h2>Contact Me</h2>
          <div className="col-12">
            <p>
              <i className="fa-solid fa-phone"></i> Phone: 123-456-7890
            </p>
          </div>
          <div className="col-12">
            <p>
              <i className="fa-solid fa-envelope"></i> Email:
              contact@alejandropedrazaaa.com
            </p>
          </div>
        </div>
        <div className="col-12 follow-me">
          <h2>Follow Me</h2>
          <div className="col-12">
            <a>
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a>
              <i className="fa-brands fa-github"></i>
            </a>
            <a>
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="col-12 copyright">
          <p>Copyright &copy; 2022 alejandropedrazaaa.com</p>
        </div>
      </div>
    </footer>
  );
};
