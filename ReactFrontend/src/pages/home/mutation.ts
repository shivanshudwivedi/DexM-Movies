export const rateMovie = async (movieId: number, rating: number) => {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2NkNzkzNGI5MjVjMDU1ZGIxNGViNzU3MDEwYmVhYiIsInN1YiI6IjY2MGM1MGZhOWM5N2JkMDE2M2E0MGIxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yd3grqYXesMBqLsF7QBjFzYAXZpvln0zsv3wX0OsfA0',
    },
    body: JSON.stringify({ value: rating }),
  };

  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/rating`, options);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error rating movie:', error);
    throw error;
  }
};

export const rateTvShow = async (tvShowId: number, rating: number) => {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2NkNzkzNGI5MjVjMDU1ZGIxNGViNzU3MDEwYmVhYiIsInN1YiI6IjY2MGM1MGZhOWM5N2JkMDE2M2E0MGIxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yd3grqYXesMBqLsF7QBjFzYAXZpvln0zsv3wX0OsfA0',
    },
    body: JSON.stringify({ value: rating }),
  };

  try {
    const response = await fetch(`https://api.themoviedb.org/3/tv/${tvShowId}/rating`, options);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error rating TV show:', error);
    throw error;
  }
};