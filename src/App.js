import React, { Component } from 'react';
import { BrowserRouter, Route, Switch}  from 'react-router-dom';
import Header from './components/Header';
import PhotoContainer from './components/PhotoContainer';
import NotFound from './components/NotFound';
import {apiKey, apiSecret} from './Config.js'
import './css/styles.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Switch>
            <Route exact path="/" component={PhotoContainer} />
            <Route path="/cats" component={PhotoContainer} />
            <Route path="/dogs" component={PhotoContainer} />
            <Route path="/computers" component={PhotoContainer} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
