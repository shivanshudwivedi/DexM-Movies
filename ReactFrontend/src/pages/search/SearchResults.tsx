import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import { Loader, Message } from 'semantic-ui-react';
import { DisplayType } from '../home';
import { ColumnDisplay} from '../home/column-display';
import { searchMovies, searchTvShows } from './query';

export const SearchResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('query');

  const { data: movieResults, isLoading: isLoadingMovies } = useQuery({
    queryKey: ['searchMovies', query],
    queryFn: () => searchMovies(query || ''),
    enabled: !!query,
  });

  const { data: tvShowResults, isLoading: isLoadingTvShows } = useQuery({
    queryKey: ['searchTvShows', query],
    queryFn: () => searchTvShows(query || ''),
    enabled: !!query,
  });

  if (isLoadingMovies || isLoadingTvShows) {
    return <Loader active />;
  }

  if (!query) {
    return <Message info>Please enter a search query.</Message>;
  }

  return (
    <div style={{ marginTop: 50 }}>
      <h2>Search Results for "{query}"</h2>
      {movieResults && movieResults.results.length > 0 && (
        <div>
          <h3>Movies</h3>
          <ColumnDisplay data={movieResults.results} displayType={DisplayType.Movies} />
        </div>
      )}
      {tvShowResults && tvShowResults.results.length > 0 && (
        <div>
          <h3>TV Shows</h3>
          <ColumnDisplay data={tvShowResults.results} displayType={DisplayType.TvShows} />
        </div>
      )}
      {movieResults?.results.length === 0 && tvShowResults?.results.length === 0 && (
        <Message warning>No results found for "{query}".</Message>
      )}
    </div>
  );
};