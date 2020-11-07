const apiKey = 'a00e6eadd995b6db24ff70af2e35e572';

const requests = {
    fetchTrendingMovies: `/trending/all/week?api_key=${apiKey}`, //&language=en-US
    fetchNetflixOriginalsMovies: `/discover/tv?api_key=${apiKey}&with_networks=213`,
    fetchTopRatedMovies: `/movie/top_rated?api_key=${apiKey}`, //&language=en-US
    fetchActionMovies: `/discover/movie?api_key=${apiKey}&with_genre=28`,
    fetchComedyMovies: `/discover/movie?api_key=${apiKey}&with_genre=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${apiKey}&with_genre=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${apiKey}&with_genre=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${apiKey}&with_genre=99`
}

export default requests;