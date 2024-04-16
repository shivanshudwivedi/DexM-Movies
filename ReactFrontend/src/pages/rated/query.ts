const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2NkNzkzNGI5MjVjMDU1ZGIxNGViNzU3MDEwYmVhYiIsInN1YiI6IjY2MGM1MGZhOWM5N2JkMDE2M2E0MGIxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yd3grqYXesMBqLsF7QBjFzYAXZpvln0zsv3wX0OsfA0',
  },
};

export const fetchRatedMovies = async () => {
  try {
    const response = await fetch(
      'https://api.themoviedb.org/3/account/21180265/rated/movies?language=en-US&page=1&sort_by=created_at.asc',
      options
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching rated movies:', error);
    throw error;
  }
};

export const fetchRatedTvShows = async () => {
  try {
    const response = await fetch(
      'https://api.themoviedb.org/3/account/21180265/rated/tv?language=en-US&page=1&sort_by=created_at.asc',
      options
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching rated TV shows:', error);
    throw error;
  }
};
