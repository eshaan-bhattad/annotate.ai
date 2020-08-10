import React, { Component } from "react";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#">
            <b>Anno.tate</b>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <Link to="/">
                <li class="nav-item active">
                  <a class="nav-link" href="">
                    Home <span class="sr-only">(current)</span>
                  </a>
                </li>
              </Link>
              <Link to="/Assignments">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Assignments
                  </a>
                </li>
              </Link>
              <Link to="/Courses">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Courses
                  </a>
                </li>
              </Link>
              <Link to="/Profile">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Profile
                  </a>
                </li>
              </Link>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
