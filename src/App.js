import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Route } from 'react-router-dom';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import SignUp from './components/SignUp';
import NewApps from './components/NewApps';
class App extends Component {
  render() {
    return (
      <BrowserRouter>{/*allows you to use routes in your project*/}
        <div className="App container">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            <h2 className="Brand">NinjaTech LG</h2>
          </header>
          <NavBar/>
          <Route path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/signup' component={SignUp}/>
          <Route path='/apps' component={NewApps}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
