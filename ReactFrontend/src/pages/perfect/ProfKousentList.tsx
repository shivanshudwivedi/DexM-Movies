import React from 'react';
import { List } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';
import { Segment } from 'semantic-ui-react';
import { useState } from 'react';

export const ProfKousenList = () => {
  const movieList = [
    "Addams Family Values (wildly underrated)",
    "Caddyshack (incredibly quotable)",
    "The Princess Bride",
    "Mystery Men (again, criminally underrated)",
    "The Caine Mutiny",
    "Galaxy Quest (the best Star Trek movie, and it technically isn't one)",
    "Monty Python and the Holy Grail",
    "Star Wars, episodes 4 and 5 only, though maybe 8",
    "The Adventures of Buckaroo Banzai: Across the 8th Dimension",
    "Batman Begins, The Dark Knight (2008), and The Batman (the 2022 version)",
    "Casablanca",
    "It's a Wonderful Life",
    "Spider-Man: Across the Spider-Verse",
    "Animal House",
    "The Terminator (just the first one)",
    "Good Will Hunting",
    "The Hunt for Red October",
    "RoboCop (the original, not the awful remake)",
    "Chicken Run",
    "Gandhi",
    "Amadeus",
    "Beverly Hills Cop (the first one only)",
    "2001: A Space Odyssey",
    "Aliens (the original is okay too, but the sequel is better)",
    "Apollo 13",
    "Heaven Can Wait",
    "The Longest Yard (original, from 1974)",
    "Young Frankenstein",
    "Blazing Saddles",
    "The Rocky Horror Picture Show",
    "The Pirates of Penzance (best Gilbert & Sullivan movie ever; Kevin Kline is brilliant)",
    "Men in Black (the first one only)",
    "Arrival",
    "A League of Their Own",
    "The Fifth Element",
    "The Martian",
    "The Sting",
    "The Incredibles",
    "Paul",
    "Rocky (the original and still by far the best, before they became a cliche)",
    "The Lord of the Rings: The Fellowship of the Ring (but all three are good)",
    "A Few Good Men (Cruise vs Nicholson duel for the ages)",
    "The Shawshank Redemption",
    "The Godfather (parts 1 and 2)",
    "Kung Fu Panda (just the first one, though the second is okay)",
    "The Matrix (the first one only)",
    "Inception",
    "V for Vendetta"
  ];


  const [randomMovie, setRandomMovie] = useState('');
  const [movieDetails, setMovieDetails] = useState<any>(null);

  const suggestMovie = async () => {
    const randomIndex = Math.floor(Math.random() * movieList.length);
    const selectedMovie = movieList[randomIndex];
    setRandomMovie(selectedMovie);

    try {
      const response = await fetch(`http://localhost:5001/search/movie?query=${encodeURIComponent(selectedMovie)}`);
      const data = await response.json();
      if (data.results.length > 0) {
        const movie = data.results[0];
        setMovieDetails(movie);
      } else {
        setMovieDetails(null);
      }
    } catch (error) {
      console.error('Error fetching movie details:', error);
      setMovieDetails(null);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', backgroundColor: 'black', color: 'white' }}>
      <h1 style={{ marginTop: '50px' , fontSize: '3rem' }}> Prof. Kousen's Movie Suggestion</h1>
      <Segment inverted style={{ width: '80%', height: '80%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'auto' }}>
        {randomMovie && (
          <>
            <h2 style={{ fontSize: '4rem', marginBottom: '20px' }}>{randomMovie}</h2>
            {movieDetails ? (
              <>
                <Image src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={randomMovie} style={{ maxWidth: '400px', maxHeight: '600px', marginBottom: '20px' }} />
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '1.2rem' }}><strong>Overview:</strong> {movieDetails.overview}</p>
                  <p style={{ fontSize: '1.2rem' }}><strong>Release Date:</strong> {movieDetails.release_date}</p>
                  <p style={{ fontSize: '1.2rem' }}><strong>Rating:</strong> {movieDetails.vote_average}</p>
                </div>
              </>
            ) : (
              <p>No movie details available</p>
            )}
          </>
        )}
        <Button color="blue" onClick={suggestMovie} style={{ marginTop: '40px' }}>
          Suggest Me a Movie
        </Button>
      </Segment>
    </div>
  );
};