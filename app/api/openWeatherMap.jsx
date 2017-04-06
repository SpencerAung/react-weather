var axios = require('axios');

const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?appid=90e30a8470927741ee7ef358a82c7ca5&units=imperial";
//90e30a8470927741ee7ef358a82c7ca5
module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
        //for newer version of axios
        // throw new Error(res.response.data.message);
        // or
        // throw new Error('Unable to fetch weather for that location.');
      } else {
        return res.data;
      }
    }, function(err) {
      throw new Error(err.response.data.message);

    });
  }
}
