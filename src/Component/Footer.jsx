import React from "react";
import { Link } from "react-router-dom";
import "../Styles/styles.css";
function Footer() {
  return (
    <div className="footer-clean">
      <footer>
        <div className="container-xl">
          {/* Footer content */}
          <div className="row justify-content-center">
            {/* Columns with lists */}
            {/* Replace hrefs with <Link to="..."> for internal links */}
            <div className="col-sm-4 col-md-3 item">
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="{{ url_for('AI_suggestion.get_suggestion_page') }}">
                    Pet Care
                  </a>
                </li>
                <li>
                  <a href="{{ url_for('AI_suggestion.get_suggestion_page') }}">
                    Vets
                  </a>
                </li>
                <li>
                  <a href="{{ url_for('pet_profile.pet_profile') }}">
                    Pet Profile
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li>
                  <a href="{{ url_for('main.about') + '#section1' }}">
                    Company
                  </a>
                </li>
                <li>
                  <a href="{{ url_for('main.about') + '#section3' }}">Team</a>
                </li>
                <li>
                  <a href="{{ url_for('main.about') + '#section2' }}">Legacy</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-3 item">
              <h3>Careers</h3>
              <ul>
                <li>
                  <a href="#">Job openings</a>
                </li>
                <li>
                  <a href="#">Employee success</a>
                </li>
                <li>
                  <a href="#">Benefits</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 item social">
              <a href="#">
                <i className="icon ion-social-facebook"></i>
              </a>
              <a href="#">
                <i className="icon ion-social-twitter"></i>
              </a>
              <a href="#">
                <i className="icon ion-social-linkedin"></i>
              </a>
              <a href="#">
                <i className="icon ion-social-instagram"></i>
              </a>
              <p className="copyright">Pawspital © 2024</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
