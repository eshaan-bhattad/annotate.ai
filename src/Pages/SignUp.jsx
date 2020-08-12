import React, { Component } from "react";
import { Link } from "react-router-dom";
class SignUp extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div class="card card-signin my-5">
              <div class="card-body">
                <h5 class="card-title text-center">Sign Up</h5>
                <form class="form-signin">
                  <div class="form-label-group">
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <label for="inputEmail"></label>
                  <div class="form-label-group">
                    <input
                      type="text"
                      name="username"
                      class="form-control"
                      placeholder="Username"
                      required
                      autofocus
                    />
                  </div>
                  <label for="inputEmail"></label>

                  <div class="form-label-group">
                    <input
                      type="password"
                      id="inputPassword"
                      class="form-control"
                      placeholder="Password"
                      required
                      padding
                    />
                  </div>
                  <label for="inputEmail"></label>
                  <div class="custom-control custom-checkbox mb-3">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="customCheck1"
                    />
                    <label class="custom-control-label" for="customCheck1">
                      Remember password
                    </label>
                  </div>
                  <Link to="/home">
                    <button
                      class="btn btn-lg btn-primary btn-block text-uppercase"
                      type="submit"
                    >
                      Sign Up
                    </button>
                  </Link>
                  <hr class="my-4" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
