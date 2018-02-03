import React from 'react';

// COMPONENTS
import Title from './Title';
import Form from './Form';
import Weather from './Weather';

const API_KEY = "6089dd23d28c7b041878731c29412f3f"

class App extends React.Component {

  // initialize states. No need to use constructor and super anymore
  state = {
    weatherCondition: undefined,
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  // constructor(props){
  //   super(props);
  //   this.state = {
  //     inputValue: "",
  //     unitValue: "F",
  //     url: "http://api.wunderground.com/api/ef99d2b74d64e716/conditions/q/toronto,ontario.json"
  //     // url: "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={6089dd23d28c7b041878731c29412f3f}"
  //     // url: "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=6089dd23d28c7b041878731c29412f3f"
  //
  //   }
  //   this.getData = this.getData.bind(this);
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  //   this.handleClick = this.handleClick.bind(this);
  //
  // }

  // Arrow function is allow in React 16+ whereas React 15 and older, you'll have to use constructor, super(), this.setState() and bind.this on your custom functions
  getWeather = async (e) => {
    e.preventDefault();
    console.log(e);
    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`);
    const data = await api_call.json(); // JSON.parse is replaced
    if (city && country) {
      console.log(data);
      this.setState({
        weatherCondition: data['weather'][0]['description'],
        temperature: data['main']['temp'],
        city: data['name'],
        country: data['sys']['country'],
        humidity: data['main']['humidity'],
        error: ""
      });
    }
  }

  // getData(){
  //   let url = this.state.url;
  //   fetch(url).then(function(res) {
  //     return res.json();
  //   }).then(function(data) {
  //     this.setState({
  //       location: data.current_observation.display_location.full,
  //       date: data.current_observation.observation_time.substr(16),
  //       weather: data.current_observation.weather,
  //       icon: data.current_observation.icon_url,
  //       tempF: Math.round(data.current_observation.temp_f),
  //       tempC: Math.round(data.current_observation.temp_c),
  //       feelsLikeC: data.current_observation.feelslike_c,
  //       feelsLikeF: data.current_observation.feelslike_f,
  //       feelsLikeString: data.current_observation.feelslike_string,
  //       humidity: data.current_observation.relative_humidity,
  //       windMPH: data.current_observation.wind_mph,
  //       windKMH: data.current_observation.wind_kph,
  //       windchillC: data.current_observation.windchill_c,
  //       windchillF: data.current_observation.windchill_f,
  //       windchillString: data.current_observation.windchill_string,
  //       windDegree: data.current_observation.wind_degrees,
  //       windDirection: data.current_observation.wind_dir,
  //       precipitation: data.current_observation.precip_today_metric,
  //       uv: data.current_observation.UV,
  //       errorMsg: "",
  //     });
  //   }.bind(this)).catch(function(error) {
  //     this.setState({
  //       errorMsg: "Please, enter a valid city and state, or zip code."
  //     });
  //   }.bind(this));
  // }
  //
  // componentDidMount(){
  //   this.getData();
  // }
  //
  // handleChange(e){
  //   console.log(e);
  //   this.setState({
  //     inputValue: e.target.value
  //   });
  // }
  //
  // handleSubmit(e){
  //   e.preventDefault();
  //   this.setState({
  //     url:`http://api.wunderground.com/api/ef99d2b74d64e716/conditions/q/${this.state.inputValue}.json`
  //   }, () => {
  //     this.getData();
  //   });
  // }
  //
  // handleClick(e){
  //   this.setState({
  //     unitValue: e.target.id
  //   });
  //   console.log(this.state.unitValue);
  // }

  render() {
    return (
      <div className="App">
        <div>
          <Title />
          <Form getWeather={this.getWeather}/>
          <Weather
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            weatherCondition={this.state.weatherCondition}
            error={this.state.error}
          />
        </div>
      </div>
    );
  }
}

export default App;
