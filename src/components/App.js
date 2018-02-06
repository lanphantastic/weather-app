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

  // Arrow function is allow in React 16+ whereas React 15 and older, you'll have to use constructor, super(), this.setState() and bind.this on your custom functions
  getWeather = async (e) => {
    e.preventDefault();
    console.log(e);
    console.log(e.target.elements);
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
    } else {
      this.setState({
        weatherCondition: undefined,
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter a city and a county"
      });
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 title-container">
                <Title />
              </div>
              <div className="col-sm-6 form-container">
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
          </div>
        </div>
      </div>
    );
  }
}

export default App;
