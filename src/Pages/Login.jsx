import React, { Component } from "react";

import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div class="card card-signin my-5">
              <div class="card-body">
                <h5 class="card-title text-center">Sign In</h5>
                <form class="form-signin">
                  <div class="form-label-group">
                    <input
                      name="username"
                      type="text"
                      class="form-control"
                      placeholder="Username"
                      required
                      autofocus
                    />
                    <label for="inputEmail"></label>
                  </div>

                  <div class="form-label-group">
                    <input
                      name="password"
                      type="text"
                      class="form-control"
                      placeholder="Password"
                      required
                    />
                  </div>

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
                  <button
                    class="btn btn-lg btn-dark btn-block text-uppercase"
                    type="submit"
                  >
                    <Link to="/Home">Sign in</Link>
                  </button>
                  <hr class="my-4" />
                  <Link to="/signup">
                    <label>
                      <p class="font-weight-light">Sign up</p>
                    </label>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
