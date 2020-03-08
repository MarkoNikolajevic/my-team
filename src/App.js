import React from 'react';
import './assets/style/App.scss';

import Navbar from './assets/js/components/Navbar.js';
import Home from './assets/js/pages/Home.js';
import About from './assets/js/pages/About.js';
import Contact from './assets/js/pages/Contact.js';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
