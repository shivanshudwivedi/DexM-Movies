export const fetchMovies = async () => {
    const res = await fetch("http://localhost:5001/movie/popular");
    return res.json();
  };
  
  export const fetchTvShows = async () => {
    const res = await fetch("http://localhost:5001/tv/popular");
    return res.json();
  };