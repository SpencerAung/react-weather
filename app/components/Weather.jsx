var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('OpenWeatherMap');
var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    };
  },
  handleSearch: function(location) {
    var that = this;
    this.setState({isLoading: true});
    openWeatherMap.getTemp(location).then(function(newData) {
      that.setState({
        location: newData.name,
        temp: Math.floor(newData.main.temp),
        isLoading: false
      });
    }, function (errorMessage) {
      that.setState({
        location: null,
        temp: null,
        isLoading: false
      });
      alert(errorMessage);
    });

  },
  render: function() {
    var { temp, location, isLoading } = this.state;
    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp != null && location != null) {
        return <WeatherMessage temp={temp} location={location} />;
      }
    }
    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>

    );
  }
});

module.exports = Weather;
