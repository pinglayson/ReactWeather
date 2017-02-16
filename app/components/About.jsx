var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>
        This is app is created for learning React.<br/>
        Course Details <a href="https://www.udemy.com/the-complete-react-web-app-developer-course/">here</a><br/>
        Link to git repository <a href="https://github.com/pinglayson/ReactWeather">here</a>
      </p>
    </div>
  )
}

module.exports = About;
