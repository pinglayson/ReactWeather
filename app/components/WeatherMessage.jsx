var React = require('react');

var WeatherMessage = ({location, temp}) => {
  return (
    <p>It's {temp} in {location}</p>
  );
}

module.exports = WeatherMessage;
