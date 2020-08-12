import React, { Component } from "react";
import App from "../App.css";

class Profile extends Component {
  style = App;
  render() {
    return (
      <div>
        <container>
          <div class="row">
            <div class="col-md">
              <div class="card bg-dark text-white">
                <h5 class="card-title">Name</h5>
                <form>
                  <div class="form-group row">
                    <div class="col-sm-10"></div>
                  </div>
                  <div class="form-group row">
                    <div class="col-sm-10">
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        id="name"
                        readonly
                        placeholder="Eshaan"
                      ></input>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div class="col-md">
              <div class="card bg-dark text-white">
                <h5 class="card-title">Username</h5>
                <form>
                  <div class="form-group row">
                    <div class="col-sm-10"></div>
                  </div>
                  <div class="form-group row">
                    <div class="col-sm-10">
                      <input
                        type="text"
                        name="username"
                        class="form-control"
                        id="username"
                        placeholder="Type new username"
                      ></input>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-md">
              <div class="card bg-dark text-white">
                <h5 class="card-title">Password</h5>
                <form>
                  <div class="form-group row">
                    <div class="col-sm-10"></div>
                  </div>
                  <div class="form-group row">
                    <div class="col-sm-10">
                      <input
                        type="text"
                        name="password"
                        class="form-control"
                        id="password"
                        placeholder="Type old password"
                      ></input>
                    </div>
                  </div>
                </form>
                <form>
                  <div class="form-group row">
                    <div class="col-md-10"></div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-10">
                      <input
                        type="text"
                        name="password"
                        class="form-control"
                        id="password"
                        placeholder="Type new password"
                      ></input>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <button type="button" class="btn btn-success">
                Update Profile
              </button>
            </div>
          </div>
        </container>
      </div>
    );
  }
}

export default Profile;
