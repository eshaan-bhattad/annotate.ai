import React, { Component } from "react";
import JumbotronMain from "./components/JumbotronMain";
import { Link } from "react-router-dom";
export default class Home extends Component {
  state = {};

  render() {
    return (
      <div>
        <div class="bg-muted">
          <JumbotronMain />
          <div>
            <container>
              <div class="row">
                <div class="col-lg">
                  <div>
                    <h4 class="justify-content-left">Recently Opened</h4>
                  </div>
                  <div class="row">
                    <div class="col-8 col-sm-6">
                      <div class="card text-white bg-primary mb-3">
                        <div class="card-header">English</div>
                        <div class="card-body">
                          <h5 class="card-title">The Little Prince</h5>
                          <p class="card-text">09/02/2020</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-4 col-sm-6">
                      <div class="card text-white bg-primary mb-3">
                        <div class="card-header">Philosophy</div>
                        <div class="card-body">
                          <h5 class="card-title">Nichomachean Ethics</h5>
                          <p class="card-text">08/24/2020</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-8 col-sm-6">
                      <div class="card text-white bg-primary mb-3">
                        <div class="card-header">Theatre</div>
                        <div class="card-body">
                          <h5 class="card-title">King Lear</h5>
                          <p class="card-text">09/07/2020</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-4 col-sm-6">
                      <div class="card text-white bg-primary mb-3">
                        <div class="card-header">English</div>
                        <div class="card-body">
                          <h5 class="card-title">The Count of Monte Cristo</h5>
                          <p class="card-text">10/13/2020</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg">
                  <div>
                    <h4 class="justify-content-left">Due Soon</h4>
                  </div>
                  <div class="row">
                    <div class="col-8 col-sm-6">
                      <div class="card text-white bg-danger mb-3">
                        <div class="card-header">Philosophy</div>
                        <div class="card-body">
                          <h5 class="card-title">Nichomachean Ethics</h5>
                          <p class="card-text">08/24/2020</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-4 col-sm-6">
                      <div class="card text-white bg-danger mb-3">
                        <div class="card-header">English</div>
                        <div class="card-body">
                          <Link to="/Book">
                            <h5 class="card-title text-white">
                              The Little Prince
                            </h5>
                          </Link>
                          <p class="card-text">09/02/2020</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-8 col-sm-6">
                      <div class="card text-white bg-danger mb-3">
                        <div class="card-header">Theatre</div>
                        <div class="card-body">
                          <h5 class="card-title">King Lear</h5>
                          <p class="card-text">09/07/2020</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-4 col-sm-6">
                      <div class="card text-white bg-danger mb-3">
                        <div class="card-header">English</div>
                        <div class="card-body">
                          <h5 class="card-title">The Count of Monte Cristo</h5>
                          <p class="card-text">10/13/2020</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </container>
          </div>
        </div>
      </div>
    );
  }
}
