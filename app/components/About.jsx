var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a weather application build on React. I've built this project following the course, <a href="https://www.udemy.com/the-complete-react-web-app-developer-course/learn/v4/content" target="_blank">The Complete React Web App Developer Course</a>. You can visit the github repository <a href="https://github.com/susuaung/react-weather">here</a>.</p>
      <p>
        Here are some of the tools I used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the Javascript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.
        </li>
      </ul>
    </div>
  );
};

module.exports = About;
