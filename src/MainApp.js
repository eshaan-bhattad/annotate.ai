import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Pages/components/Header";
import Home from "./Pages/Home";
import Footer from "./Pages/components/Footer";
import Assignments from "./Pages/Assignments";
import Courses from "./Pages/Courses";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function MainApp() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={Home} />
        <Route path="/Assignments" exact component={Assignments} />
        <Route path="/Courses" exact component={Courses} />
        <Route path="/Profile" exact component={Profile} />
        <Footer />
      </div>
    </Router>
  );
}

export default MainApp;
