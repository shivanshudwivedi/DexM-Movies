export const fetchMovieDetails = async (movieId: string) => {
  const res = await fetch(`http://localhost:5001/movie/${movieId}`);
  return res.json();
};