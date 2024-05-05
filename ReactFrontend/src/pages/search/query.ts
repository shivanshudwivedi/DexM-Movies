export const searchMovies = async (query: string) => {
  const res = await fetch(`http://localhost:5001/search/movie?query=${encodeURIComponent(query)}`);
  return res.json();
};

export const searchTvShows = async (query: string) => {
  const res = await fetch(`http://localhost:5001/search/tv?query=${encodeURIComponent(query)}`);
  return res.json();
};