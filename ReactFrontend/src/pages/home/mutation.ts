export const rateMovie = async (movieId: number, rating: number) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ value: rating }),
  };
  const res = await fetch(`http://localhost:5001/movie/${movieId}/rate`, options);
  console.log(res)
  return res.json();
};

export const rateTvShow = async (tvShowId: number, rating: number) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ value: rating }),
  };
  const res = await fetch(`http://localhost:5001/tv/${tvShowId}/rate`, options);
  return res.json();
};