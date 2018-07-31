import React, { Component } from 'react';
import { BrowserRouter, Route, Switch}  from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import NotFound from './components/NotFound';
import PhotoContainer from './components/PhotoContainer';

import axios from 'axios';
import apiKey from './Config.js'
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
    this.searchPhotos();
  }

  searchPhotos = (query = 'opeth') => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=16&format=json&nojsoncallback=1`)
    .then(response => {
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
          <Header onSearch={this.searchPhotos}/>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/:query" component={ (props) => <PhotoContainer {...props}  data={this.state.photos}  loading={this.state.loading} /> } />
                <Route exact path="/search" component={ (props) => <PhotoContainer {...props}  data={this.state.photos}  loading={this.state.loading} /> } />
                <Route render={NotFound} />
              </Switch>
            
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
