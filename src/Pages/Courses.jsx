import React, { Component } from "react";
import { Link } from "react-router-dom";
class Courses extends Component {
  state = {};
  render() {
    return (
      <div>
        <div class="row">
          <div class="col-sm">
            <h4>Registered Courses</h4>
            <table class="table table-hover table-light">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Course</th>
                  <th scope="col">Instructor</th>
                  <th scope="col">Assignments</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>English</td>
                  <td>Alice Johnson</td>
                  <td>3</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Theatre</td>
                  <td>Jean Paul Pierce</td>
                  <td>2</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Philosophy</td>
                  <td>Clayton Duba</td>
                  <td>6</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <div class="col-sm">
              <div class="col-sm">
                <button
                  type="button"
                  class="btn btn-primary btn-lg btn-block "
                  align-items="center"
                >
                  {" "}
                  Join Course
                </button>
              </div>
              <div class="col-sm"></div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm">
            <h4>Your Courses</h4>
            <table class="table table-hover table-light">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Course</th>
                  <th scope="col">Student Count</th>
                  <th scope="col">Assignments</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Journalism</td>
                  <td>17</td>
                  <td>3</td>
                </tr>

                <tr>
                  <th scope="row">2</th>
                  <Link to="/course">
                    <td>History</td>
                  </Link>
                  <td>19</td>
                  <td>2</td>
                </tr>

                <tr>
                  <th scope="row">3</th>
                  <td>Sociology</td>
                  <td>15</td>
                  <td>6</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <div class="col-sm">
              <div class="col-sm"></div>
              <div class="col-sm">
                <button
                  type="button"
                  class="btn btn-success btn-lg btn-block "
                  align-items="center"
                >
                  {" "}
                  Create Course
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Courses;
