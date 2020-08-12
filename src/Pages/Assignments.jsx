import React, { Component } from "react";
import { Link } from "react-router-dom";
class Assigments extends Component {
  state = {};
  render() {
    return (
      <div>
        <div class="row">
          <div class="col-sm">
            <table class="table table-hover table-dark">
              <thead>
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
                    <td>The Great Gatbsy</td>
                  </Link>
                  <td>English</td>
                  <td>09/02/2020</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>King Lear</td>
                  <td>Theatre</td>
                  <td>09/07/2020</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Nichomachean Ethics</td>
                  <td>Philosophy</td>
                  <td>08/24/2020</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-sm">
            <h1>
              <span class="badge badge-secondary " align-items="center">
                {" "}
                3 Remaining Assignments
              </span>
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Assigments;
