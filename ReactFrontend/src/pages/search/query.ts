export const searchMovies = async (query: string) => {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&language=en-US&page=1`, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2NkNzkzNGI5MjVjMDU1ZGIxNGViNzU3MDEwYmVhYiIsInN1YiI6IjY2MGM1MGZhOWM5N2JkMDE2M2E0MGIxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yd3grqYXesMBqLsF7QBjFzYAXZpvln0zsv3wX0OsfA0',
      },
    });
    return res.json();
  };
  
  export const searchTvShows = async (query: string) => {
    const res = await fetch(`https://api.themoviedb.org/3/search/tv?query=${encodeURIComponent(query)}&language=en-US&page=1`, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2NkNzkzNGI5MjVjMDU1ZGIxNGViNzU3MDEwYmVhYiIsInN1YiI6IjY2MGM1MGZhOWM5N2JkMDE2M2E0MGIxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yd3grqYXesMBqLsF7QBjFzYAXZpvln0zsv3wX0OsfA0',
      },
    });
    return res.json();
  };