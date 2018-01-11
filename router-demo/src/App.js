import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  NavLink,
  Redirect
} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/hello" component={Hello} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const Home = () => {
  return <h1>HOME </h1>;
};

const Contact = () => {
  return <h1> CONTACT</h1>;
};

const NotFound = () => {
  return <h1>YOU BROKE THE INTERNET </h1>;
};

const Hello = () => {
  return <h1> KITTENS </h1>;
};

const NavBar = () => (
  <div>
    <NavLink to="/" exact activeClassName="selected">
      Home
    </NavLink>
    <NavLink to="/" exact activeClassName="selected">
      Contact
    </NavLink>
  </div>
);

export default App;
