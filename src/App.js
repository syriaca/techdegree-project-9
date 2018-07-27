import React, { Component } from 'react';
import { BrowserRouter, Route, Switch}  from 'react-router-dom';
import Header from './components/Header';
import PhotoContainer from './components/PhotoContainer';
import NotFound from './components/NotFound';
import axios from 'axios';
import {apiKey, apiSecret} from './Config.js'
import './css/styles.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true
    };
  }

  componentDidMount() {
    this.getImages();
  }

// https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=e353d76704d31c88446431e60d72aedf&tags=sunsets&per_page=16&format=json&nojsoncallback=1

  getImages = () => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=sunsets&per_page=16&format=json&nojsoncallback=1`)
    .then(response => {
      console.log(response.data);
      this.setState({
        photos: response.data.photos.photo,
        loading: false
      });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

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
