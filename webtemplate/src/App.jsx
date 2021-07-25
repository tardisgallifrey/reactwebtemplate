import './css/App.css';
import React from 'react';
import { Link } from 'react-router-dom';
//above needed to make Links to pages work

//Design Considerations
//
//Home page needs menu with/
//C, C++, C#, Reactjs, Nodejs, CSS, HTML, SQL, RaspberryPI, Arduino, PI-Pico, Electronics
//A Page Minimum for each of the above
//Reactjs breakout includes .map(), element, function, component, class component, state


//This loads one page, one almost empty page
//Enter here and then the main page loads
//Could add log in later, maybe
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>My New Web Site</h1>
          <Link to="/home" >Enter</Link>
        </header>
      </div>
    )
  }
}
export default App;