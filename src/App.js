import React, { Component } from 'react';
import { BrowserRouter, Route, Switch}  from 'react-router-dom';
import Header from './components/Header';
import PhotoContainer from './components/PhotoContainer';
import NotFound from './components/NotFound';
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
    this.handleSearchButton = this.handleSearchButton.bind(this);
  }

  componentDidMount() {
    this.getImages();
  }

  getImages = (query = 'cats') => {
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

  handleSearchButton = (e) => {
    this.getImages();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header click={this.handleSearchButton} />
            {
              (this.state.loading) ? <p>Now Loading...</p> :             
              <Switch>
                <Route exact path="/" render={() => <PhotoContainer data={this.state.photos} />} />
                <Route path="/cats" render={() => <PhotoContainer data={this.state.photos}/>} />
                <Route path="/dogs" render={() => <PhotoContainer data={this.state.photos}/>} />
                <Route path="/computers" render={() => <PhotoContainer data={this.state.photos}/>} />
                <Route render={NotFound} />
              </Switch>
            }
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
