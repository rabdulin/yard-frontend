import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './style.css';

import Header from './Header';
import Footer from './Footer';
import Complexes from './Complexes/List';
import Complex from './Complexes/Show';

export default function () {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Complexes} />
        <Route exact path="/complex" component={Complex} />
        <Footer />
      </div>
    </Router>
  );
}
