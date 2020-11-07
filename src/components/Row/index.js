import React, {useState, useEffect} from 'react';

import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

import './style.css';

const Row = props => {

    const {title, handleFetchData, fetchUrl, fetchImageBaseUrl, showLarge} = props;

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');

    const videoOptions = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1
        }
    };

    useEffect(() => {
        const fetchData = async () => await handleFetchData(fetchUrl)
        .then((response) => setMovies(response));
        fetchData();
    },[fetchUrl]);

    const handleMovieClick = movie => {
        if(trailerUrl) setTrailerUrl('');
        else{
            movieTrailer(movie?.name || "")
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            })
            .catch((error) => console.log(error));
        }
    }

    return (
        <div className='row__container'>
            <h4 id="title">{title}</h4>
            <div className='row__posters'>
                {movies.map((movie) => {
                    const imgUrl = `${fetchImageBaseUrl}${movie.poster_path}`;
                    return <img 
                                key={movie.id} 
                                className={`row__poster ${showLarge ? 'row__poster__large' : ''}`}
                                src={imgUrl} 
                                alt={movie.name}
                                onClick={() => handleMovieClick(movie)}/>
                })}
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={videoOptions}/>}
        </div>
    );
}

export default Row;