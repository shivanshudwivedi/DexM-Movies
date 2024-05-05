
export const fetchTvShowDetails = async (tvShowId: string) => {
  const res = await fetch(`http://localhost:5001/tv/${tvShowId}`);
  return res.json();
};