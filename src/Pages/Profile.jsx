import React, { Component } from "react";

class Profile extends Component {
  render() {
    return (
      <div>
        <container>
          <div class="row">
            <div class="col">
              <img
                height="300px"
                src="/profile.png"
                class="rounded float-left"
                alt="..."
              ></img>
            </div>
            <div class="col">
              <form>
                <div class="form-group row">
                  <label for="staticEmail" class="col-sm-2 col-form-label">
                    John Smith
                  </label>
                </div>
                <div class="form-group row">
                  <label for="inputPassword" class="col-sm-2 col-form-label">
                    johnsmith@js.com
                  </label>
                </div>
              </form>
            </div>
            <div class="col"></div>
          </div>
        </container>
      </div>
    );
  }
}

export default Profile;
