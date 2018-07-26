import React, { Component } from 'react';
import Header from './components/Header';
import PhotoContainer from './components/PhotoContainer';
import './css/styles.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <PhotoContainer />
      </div>
    );
  }
}

export default App;
