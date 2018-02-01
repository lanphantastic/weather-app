import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="container my-5">
          <div className="row">
            <div className="col-md-6 push-md-3 col-xl-4 push-xl-4 card">
              <div className="d-flex justify-content-between">
                <div className="d-inline-block">
                  <h3>Testing</h3>
                </div>
              </div>
            </div>
          </div>


          <div class="jumbotron">

            <h1 class="display-4">Hello, world!</h1>
            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr class="my-4"></hr>
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <div className="d-inline-block btn-grouop btn-group-sm" data-toggle="button">
              <label id="F" className="btn btn-primary active">
                <input type="radio" name="options" checked/>&deg; F
              </label>
              <label id="C" className="btn btn-primary">
                <input type="radio" name="options"/>&deg; C
              </label>
            </div>

            <div className="row mt-2">
              <div className="col-4 col-md-3">
                <img className="img-fluid" src="#" alt="weather icon"/>
              </div>

              <div className="col-4 col-md-4">
                <h1 className="big-font">76<span className="units">&deg; F</span></h1>
              </div>
              <div className="col-4 col-md-5">
                <div className="small-font">
                  <p>Humidity</p>
                  <p>Wind</p>
                  <p>Precipitation</p>
                  <p>UV: </p>
                </div>
              </div>
            </div>

            <form className="form-inline mt-4 justify-content-around">
              <input type="text" className="form-control mb-4 mb-sm-0" placeholder="City, State or Zip Code"/>
              <button className="btn btn-primary">Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
