import React, {Component} from 'react';
import movieTrailer from 'movie-trailer';

import './App.css';

import apiRequests from './api/requests';
import axios from './api/axios';

import Banner from './components/Banner';
import Row from './components/Row';
import Nav from './components/Nav';

const fetchImgUrl = 'https://image.tmdb.org/t/p/w500';
const fetchOriginalImageUrl = 'http://image.tmdb.org/t/p/original'; 

/*I've made this a 'container' component, in other words, 
this component is going to be responsible for the application logic and I just converted it to a class-based component, so we can have both component type examples in the project*/
class App extends Component {

  state = {
    trailerUrl: ''
  }

  fetchMovies = async fetchUrl => {
    return await axios.get(fetchUrl)
      .then((response) => response.data.results)
      .catch((error) => console.log(error));
  }

  getRandomMovie = () => {
    return this.fetchMovies(apiRequests.fetchNetflixOriginalsMovies)
    .then((response) => response[Math.floor(Math.random() * (response.length - 1))]);
  }

  getMovieUrlOnClick = movie =>{
    if(this.state.trailerUrl) this.setState({trailerUrl: ''})
    else {
        movieTrailer(movie?.title || "")
        .then(url => {
            const urlParams = new URLSearchParams(new URL(url).search);
            this.setState({trailerUrl: urlParams.get('v')}); 
        })
        .catch((error) => console.log(error));
    }
  }

  render(){
    return (
      <div className="App">
        <Nav/>
        <Banner 
          fetchRandomMovie={this.getRandomMovie}
          fetchImageBaseUrl={fetchOriginalImageUrl}/>
        <Row 
          title='Netflix Originals'
          fetchImageBaseUrl={fetchImgUrl}
          handleFetchData={this.fetchMovies}
          fetchUrl={apiRequests.fetchNetflixOriginalsMovies}
          showLarge/>

        <Row 
          title='Trending Now'
          fetchImageBaseUrl={fetchImgUrl}
          handleFetchData={this.fetchMovies} 
          fetchUrl={apiRequests.fetchTrendingMovies}
          showLarge={false}/>

        <Row 
          title='Top Rated'
          fetchImageBaseUrl={fetchImgUrl}
          handleFetchData={this.fetchMovies} 
          fetchUrl={apiRequests.fetchTopRatedMovies}
          showLarge={false}/>

        <Row 
          title='Action'
          fetchImageBaseUrl={fetchImgUrl}
          handleFetchData={this.fetchMovies} 
          fetchUrl={apiRequests.fetchActionMovies}
          showLarge={false}/>

        <Row 
          title='Comedy'
          fetchImageBaseUrl={fetchImgUrl}
          handleFetchData={this.fetchMovies} 
          fetchUrl={apiRequests.fetchComedyMovies}
          showLarge={false}/>

        <Row 
          title='Horror'
          fetchImageBaseUrl={fetchImgUrl}
          handleFetchData={this.fetchMovies}
          fetchUrl={apiRequests.fetchHorrorMovies}
          showLarge={false}/>

        <Row 
          title='Romance'
          fetchImageBaseUrl={fetchImgUrl}
          handleFetchData={this.fetchMovies} 
          fetchUrl={apiRequests.fetchRomanceMovies}
          showLarge={false}/>

        <Row 
          title='Documentaries'
          fetchImageBaseUrl={fetchImgUrl}
          handleFetchData={this.fetchMovies} 
          fetchUrl={apiRequests.fetchDocumentaries}
          showLarge={false}/>
      </div>
    );
  }
}

export default App;
