import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Landing from './Views/Landing/Landing';
import About from './Views/About/About';
import Brothers from './Views/Brothers/Brothers';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/brothers">
            <Brothers />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
