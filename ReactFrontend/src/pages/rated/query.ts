export const fetchRatedMovies = async () => {
  try {
    const response = await fetch('http://localhost:5001/rated/movies');
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
    const response = await fetch('http://localhost:5001/rated/tv');
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching rated TV shows:', error);
    throw error;
  }
};