export const fetchMovieDetails = async (movieId: string) : Promise<any> => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?&language=en-US`, {
      headers: {
        Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2NkNzkzNGI5MjVjMDU1ZGIxNGViNzU3MDEwYmVhYiIsInN1YiI6IjY2MGM1MGZhOWM5N2JkMDE2M2E0MGIxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yd3grqYXesMBqLsF7QBjFzYAXZpvln0zsv3wX0OsfA0'
      },
    });
    
    return res.json();
  };