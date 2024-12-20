import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="Container main-conetnt">
        {" "}
        <div className="leftSide">
          <img src="./images/footerlogo.png" alt="Medingen Logo" />
          <h4 className="Medigen">Mediangen</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at
            urna et leo rhoncus mattis. Maecenas vel scelerisque nunc.
          </p>
        </div>
        <div className="rightSide">
          <div className="row">
            <div className="col ">
              <h5>Website</h5>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/features">Features</a>
                </li>
                <li>
                  <a href="/how-it-works">How it works</a>
                </li>
                <li>
                  <a href="/testimonials">What's our customers say?</a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h5>Follow Us</h5>
              <ul>
                <li>
                  <a href="https://www.instagram.com/medingen">Instagram</a>
                </li>
                <li>
                  <a href="https://www.facebook.com/medingen">Facebook</a>
                </li>
                <li>
                  <a href="https://twitter.com/medingen">Twitter</a>
                </li>
                <li>
                  <a href="https://www.youtube.com/medingen">Youtube</a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h5>More</h5>
              <ul>
                <li>
                  <a href="/help-center">Help Center</a>
                </li>
                <li>
                  <a href="/become-member">Become a Member</a>
                </li>
                <li>
                  <a href="/events">Events</a>
                </li>
                <li>
                  <a href="/terms-conditions">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p className="copy">&copy; 2024 Medingen. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
