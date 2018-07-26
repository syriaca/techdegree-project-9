import React, { Component } from 'react';
import './styles.css';
import Header from './components/Header';
import PhotoContainer from './components/PhotoContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <PhotoContainer />
      </div>
    );
  }
}

export default App;
