import React, { Component } from "react";
import { Link } from "react-router-dom";
class Course extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1 class="display-4">History</h1>
        <div class="row">
          <div class="col-sm">
            <h4>Assignments</h4>
            <table class="table table-hover table-light">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Title</th>
                  <th scope="col">Course</th>
                  <th scope="col">Due Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <Link to="/Book">
                    <td>Civil War</td>
                  </Link>
                  <td>History</td>
                  <td>09/02/2020</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Globalization</td>
                  <td>History</td>
                  <td>09/07/2020</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>The Great Thinkers of the East</td>
                  <td>History</td>
                  <td>08/24/2020</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-sm">
            <div class="col-sm">
              <button
                type="button"
                class="btn btn-success btn-lg btn-block "
                align-items="center"
              >
                {" "}
                New Assignment
              </button>
            </div>
            <div class="col-sm">
              <button
                type="button"
                class="btn btn-danger btn-lg btn-block"
                align-items="center"
              >
                {" "}
                Delete Assignment
              </button>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm">
            <h4>Students</h4>
            <table class="table table-hover table-light">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Completed</th>
                  <th scope="col">Annotations</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <Link to="/Student">
                    <td>George Scott</td>
                  </Link>
                  <td>4</td>
                  <td>16</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Paris Floyd</td>
                  <td>4</td>
                  <td>32</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Justin Michaels</td>
                  <td>3</td>
                  <td>24</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-sm">
            <div class="col-sm">
              <button
                type="button"
                class="btn btn-primary btn-lg btn-block "
                align-items="center"
              >
                {" "}
                Invite Student
              </button>
            </div>
            <div class="col-sm">
              <button
                type="button"
                class="btn btn-danger btn-lg btn-block"
                align-items="center"
              >
                {" "}
                Remove Student
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Course;
