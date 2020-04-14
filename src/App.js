import React from 'react';
import './assets/style/App.scss';

import Navbar from './assets/js/components/Navbar';
import Home from './assets/js/pages/Home';
import About from './assets/js/pages/About';
import Contact from './assets/js/pages/Contact';
import Footer from './assets/js/components/Footer';

import ScrollToTop from './assets/js/components/ScrollToTop';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <ScrollToTop />
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
      <Footer />
    </Router>
  );
}

export default App;
