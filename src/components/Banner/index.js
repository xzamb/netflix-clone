import React, {useState, useEffect} from 'react';

import './style.css';

import {truncateMovieOverview} from '../../utils';

const Banner = ({fetchRandomMovie, fetchImageBaseUrl}) => {
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const fetchData = () => fetchRandomMovie()
        .then((response) => setMovie(response));
        
        fetchData();
    }, []);
    
    return(
        <header 
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(${fetchImageBaseUrl}${movie?.backdrop_path || movie?.poster_path})`
            }}
            >
            <div className="banner__container">
            <h3 className="banner__title">{movie?.name || movie?.original_name || ""}</h3>
                <button className="banner__button">Play</button>
                <button className="banner__button">My list</button>
                <h5 className="banner__description">{truncateMovieOverview(movie.overview, 300)}</h5>
            </div>
            <div className="banner__fadeBottom"></div>
        </header>
    );
}

export default Banner;