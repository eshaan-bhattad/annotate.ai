import React from "react";
import "./App.css";
import Header from "./Pages/components/Header";
import Home from "./Pages/Home";
import Footer from "./Pages/components/Footer";
import Assignments from "./Pages/Assignments";
import Courses from "./Pages/Courses";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import Course from "./Pages/Course";
import Student from "./Pages/Student";
import Book from "./Pages/Book/Book.jsx";
function MainApp() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={Home} />
        <Route path="/Assignments" exact component={Assignments} />
        <Route path="/Courses" exact component={Courses} />
        <Route path="/Profile" exact component={Profile} />
        <Route path="/Book" exact component={Book} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/course" exact component={Course} />
        <Route path="/Student" exact component={Student} />

        <Footer></Footer>
      </div>
    </Router>
  );
}

export default MainApp;
