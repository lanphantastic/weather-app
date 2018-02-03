import React from 'react';

class Weather extends React.Component {
  render(){
    return (
      <div>
        {
          this.props.city && this.props.country &&
          <p>Location: { this.props.city }, { this.props.country }</p>
        }
        { this.props.temperature && <p>Temperature: { this.props.temperature }</p> }
        { this.props.humidity && <p>Humidity: { this.props.humidity }</p> }
        { this.props.weatherCondition && <p>Conditions: { this.props.weatherCondition }</p> }
        { this.props.error && <p>{ this.props.error }</p>}
      </div>
    );
  }
};

export default Weather;
