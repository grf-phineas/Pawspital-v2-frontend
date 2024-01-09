import React from "react";
import { Link } from "react-router-dom";

function Header({ globalEmail, children }) {
  console.log(globalEmail);
  return (
    <div className="page-container">
      <div className="content-wrap">
        {/* 导航栏等内容 */}
        {globalEmail && (
          // 已认证用户的导航内容
          <nav className="navbar navbar-expand-lg navbar-light sticky-top custom-navbar">
            <div className="container-fluid mx-5 p-1">
              <div>
                <h2
                  className="font-effect-shadow-multiple"
                  style={{
                    fontFamily: "Sofia",
                    textShadow: "3px 3px 3px #ababab",
                  }}
                >
                  Pawspital
                </h2>
              </div>
              <div
                className="collapse navbar-collapse justify-content-end mx-4"
                id="navbarNav"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/home" className="nav-link px-3">
                      <h6>Home</h6>
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <a
                      className="nav-link px-3"
                      href="{{ url_for('main.about') }}"
                    >
                      <h6>About</h6>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link px-3"
                      href="{{ url_for('main.my_chats') }}"
                    >
                      <h6>My Chats</h6>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link px-3"
                      href="{{ url_for('main.contact') }}"
                    >
                      <h6>Contact</h6>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link px-3"
                      href="{{ url_for('pet_profile.pet_profile') }}"
                    >
                      <h6>My Pet</h6>
                    </a>
                  </li> */}
                </ul>
              </div>
              <Link className="navbar-brand px-1" to="/user_profile">
                <img
                  src="./img/logo.png"
                  alt="Avatar Logo"
                  style={{ width: "50px" }}
                  className="rounded-pill"
                />
              </Link>
              <div className="dropdown">
                <button
                  type="button"
                  className="btn btn-primary dropdown-toggle p-2"
                  data-bs-toggle="dropdown"
                >
                  <strong>My Profile</strong>
                </button>
                {/* <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      {{ name }}
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="{{ url_for('user_profile.user_profile') }}"
                    >
                      My Profile
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="{{ url_for('auth.logout') }}"
                    >
                      Logout
                    </a>
                  </li>
                </ul> */}
              </div>
            </div>
          </nav>
        )}
        <section className="py-xxl-10 pb-0" id="home">
          {/* ... background and container ... */}
          <div className="container-fluid mt-3">
            <div className="row">
              <div className="col-lg-2"></div>
              <div className="col-lg-8 p-3" style={{ minHeight: "320px" }}>
                {children} {/* This is where the content gets injected */}
              </div>
              <div className="col-lg-2"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Header;
