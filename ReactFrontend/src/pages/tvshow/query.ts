export const fetchTvShowDetails = async (tvShowId: string) => {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/tv/${tvShowId}?&language=en-US`, {
      headers: {
        Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2NkNzkzNGI5MjVjMDU1ZGIxNGViNzU3MDEwYmVhYiIsInN1YiI6IjY2MGM1MGZhOWM5N2JkMDE2M2E0MGIxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yd3grqYXesMBqLsF7QBjFzYAXZpvln0zsv3wX0OsfA0',
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch TV show details");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching TV show details:", error);
    throw error;
  }
};