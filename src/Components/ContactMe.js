export const ContactMe = () => {
  return (
    <footer className="contact-me pt-4" id="contact-me">
      <div className="container ">
        <div className="row text-center px-0">
          <div className="col-12 px-0">
            <h2>Contact Me</h2>
            <div className="col-12">
              <p>
                <i className="fa-solid fa-phone"></i> Phone: 479-466-3167
              </p>
            </div>
            <div className="col-12">
              <p>
                <i className="fa-solid fa-envelope"></i> Email:
                alepedpon1@gmail.com
              </p>
            </div>
          </div>
          <div className="col-12 px-0 my-4">
            <h2>Follow Me</h2>
            <div className="col-12 col-md-8 offset-md-2 d-flex justify-content-evenly">
              <a
                href="https://www.linkedin.com/in/alejandro-pedrazaaa/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/alejandro-pedrazaaa" target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.instagram.com/alejandro_pedrazaaa"
                target="_blank"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="col-12 px-0 pt-2">
            <p className="copyright">
              Copyright &copy; 2022 Alejandro Pedraza. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
