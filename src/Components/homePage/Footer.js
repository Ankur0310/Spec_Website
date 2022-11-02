import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div>
      <div>
        <footer>
          {/* <link rel="stylesheet" href="/stylesheets/footer.css"> */}
          <div className="main">
            <div className="col1">
              <h3 className="heading">
                <b>SPEC IIT(ISM) Dhanbad</b>
              </h3>
              <h6>
                <p>
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum a.
                </p>
              </h6>
            </div>

            <div className="col3">
              <h3 className="heading">
                <b>Get in touch</b>
              </h3>
              <div className="social">
                <a href="#">
                  <img src="../../img/icons8-instagram-48.png" alt="" />
                </a>
                <a href="#">
                  <img src="../../img/icons8-instagram-48.png" alt="" />
                </a>
                <a href="#">
                  <img src="../../img/icons8-youtube-48.png" alt="" />
                </a>
              </div>
            </div>

            <div className="col2">
              <h3 className="heading">
                <b>Quick links</b>
              </h3>
              <div className="links">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Sports</a>
                  </li>
                  <li>
                    <a href="#">Events</a>
                  </li>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <p className="terms">Made with ❤️ by SPEC Web Team</p>
        </footer>

        <script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          nomodule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        ></script>
      </div>
    </div>
  );
}

export default Footer;
