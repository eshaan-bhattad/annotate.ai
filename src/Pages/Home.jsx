import React, { Component } from "react";
import JumbotronMain from "./components/JumbotronMain";
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
                        <div class="card-header">Header</div>
                        <div class="card-body">
                          <h5 class="card-title">Secondary card title</h5>
                          <p class="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-4 col-sm-6">
                      <div class="card text-white bg-primary mb-3">
                        <div class="card-header">Header</div>
                        <div class="card-body">
                          <h5 class="card-title">Secondary card title</h5>
                          <p class="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-8 col-sm-6">
                      <div class="card text-white bg-primary mb-3">
                        <div class="card-header">Header</div>
                        <div class="card-body">
                          <h5 class="card-title">Secondary card title</h5>
                          <p class="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-4 col-sm-6">
                      <div class="card text-white bg-primary mb-3">
                        <div class="card-header">Header</div>
                        <div class="card-body">
                          <h5 class="card-title">Secondary card title</h5>
                          <p class="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
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
                        <div class="card-header">Course</div>
                        <div class="card-body">
                          <h5 class="card-title">Novel Title</h5>
                          <p class="card-text">Due Date</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-4 col-sm-6">
                      <div class="card text-white bg-danger mb-3">
                        <div class="card-header">Course</div>
                        <div class="card-body">
                          <h5 class="card-title">Novel Title</h5>
                          <p class="card-text">Due Date</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-8 col-sm-6">
                      <div class="card text-white bg-danger mb-3">
                        <div class="card-header">Course</div>
                        <div class="card-body">
                          <h5 class="card-title">Novel Title</h5>
                          <p class="card-text">Dude Date</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-4 col-sm-6">
                      <div class="card text-white bg-danger mb-3">
                        <div class="card-header">Course</div>
                        <div class="card-body">
                          <h5 class="card-title">Novel Title</h5>
                          <p class="card-text">Due Date</p>
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
