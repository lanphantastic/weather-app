import React from 'react';

// COMPONENTS
import Title from './Title';
import Form from './Form';
import Weather from './Weather';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      inputValue: "",
      unitValue: "F",
      url: "http://api.wunderground.com/api/ef99d2b74d64e716/conditions/q/toronto,ontario.json"
      // url: "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={6089dd23d28c7b041878731c29412f3f}"
      // url: "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=6089dd23d28c7b041878731c29412f3f"

    }
    this.getData = this.getData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  getData(){
    let url = this.state.url;
    fetch(url).then(function(res) {
      return res.json();
    }).then(function(data) {
      console.log(data);
      this.setState({
        location: data.current_observation.display_location.full,
        date: data.current_observation.observation_time.substr(16),
        weather: data.current_observation.weather,
        icon: data.current_observation.icon_url,
        tempF: Math.round(data.current_observation.temp_f),
        tempC: Math.round(data.current_observation.temp_c),
        feelsLikeC: data.current_observation.feelslike_c,
        feelsLikeF: data.current_observation.feelslike_f,
        feelsLikeString: data.current_observation.feelslike_string,
        humidity: data.current_observation.relative_humidity,
        windMPH: data.current_observation.wind_mph,
        windKMH: data.current_observation.wind_kph,
        windchillC: data.current_observation.windchill_c,
        windchillF: data.current_observation.windchill_f,
        windchillString: data.current_observation.windchill_string,
        windDegree: data.current_observation.wind_degrees,
        windDirection: data.current_observation.wind_dir,
        precipitation: data.current_observation.precip_today_metric,
        uv: data.current_observation.UV,
        errorMsg: "",
      });
    }.bind(this)).catch(function(error) {
      this.setState({
        errorMsg: "Please, enter a valid city and state, or zip code."
      });
    }.bind(this));
  }

  componentDidMount(){
    this.getData();
  }

  handleChange(e){
    console.log(e);
    this.setState({
      inputValue: e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({
      url:`http://api.wunderground.com/api/ef99d2b74d64e716/conditions/q/${this.state.inputValue}.json`
    }, () => {
      this.getData();
    });
  }

  handleClick(e){
    this.setState({
      unitValue: e.target.id
    });
    console.log(this.state.unitValue);
  }

  render() {
    console.log(this.state.url);
    return (
      <div className="App">
        <div>
          <Title />
        </div>
        <div className="container my-5">
          {/*)<div className="row">
            <div className="col-md-6 push-md-3 col-xl-4 push-xl-4 card">
              <div className="d-flex justify-content-between">
                <div className="d-inline-block">
                  <h3>Testing</h3>
                </div>
              </div>
            </div>
          </div>
          */}

          <div className="jumbotron">

            <h1 className="display-4">{this.state.location}</h1>
            <p className="lead"> {this.state.date}</p>
            <hr className="my-4"></hr>
            <p>{this.state.weather}</p>
            <div className="d-inline-block btn-grouop btn-group-sm" data-toggle="button">
              <label id="F" onClick={this.handleClick} className="btn btn-primary active">
                <input type="radio" name="options" checked/>&deg; F
              </label>
              <label id="C" onClick={this.handleClick} className="btn btn-primary">
                <input type="radio" name="options"/>&deg; C
              </label>
            </div>

            <div className="row mt-2">
              <div className="col-4 col-md-3">
                <img className="img-fluid" src={this.state.icon} alt="weather icon"/>
              </div>

              <div className="col-4 col-md-4">
                {
                  this.state.unitValue === 'F' ?
                  <h1 className="big-font">{this.state.tempC}<span className="units">&deg;F</span></h1>
                  :
                  <h1 className="big-font">{this.state.tempF}<span className="units">&deg;C</span></h1>
                }
              </div>
              <div className="col-4 col-md-5">
                <div className="small-font">
                  <p>Humidity: {this.state.humidity}</p>
                  <p>Wind: {this.state.windMPH} km/h {this.state.windDegree}&deg; {this.state.windDirection}</p>
                  <p>Precipitation: {this.state.precipitation}</p>
                  <p>UV: {this.state.UV}</p>
                </div>
              </div>
            </div>

            <form onSubmit={this.handleSubmit} className="form-inline mt-4 justify-content-around">
              <input
                value={this.state.inputValue}
                onChange={this.handleChange}
                type="text"
                className="form-control mb-4 mb-sm-0"
                placeholder="City, State or Zip Code"
                />
              <button className="btn btn-primary">Submit
              </button>
            </form>
            <p className="text-danger text-center mt-2">{this.state.errorMsg}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
