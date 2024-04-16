import { Container } from 'semantic-ui-react'
import { Menu } from 'semantic-ui-react'
import { DisplayType } from '../home';
import { useState } from 'react';
import { Segment } from 'semantic-ui-react';
import { Header } from 'semantic-ui-react';
import { fetchRatedMovies, fetchRatedTvShows } from './query';
import { ColumnDisplay } from '../home/column-display';
import { useQuery } from '@tanstack/react-query';
import { Loader } from 'semantic-ui-react';
import { Navigate } from 'react-router-dom';
export const Rated = () => {
    const [activeTabs, setActiveTabs] = useState<DisplayType>(DisplayType.Movies);
  
    const { data: ratedMovies, isLoading: isLoadingRatedMovies } = useQuery({
      queryKey: ["movie"],
      queryFn: fetchRatedMovies,
    });
  
    const { data: ratedTvShows, isLoading: isLoadingRatedTvShows } = useQuery({
      queryKey: ["ratedTvShows"],
      queryFn: fetchRatedTvShows,
    });
  
    if (isLoadingRatedMovies || isLoadingRatedTvShows) {
      return <Loader active />;
    }

    if(localStorage.getItem("guest_session_id") === null){
        return <Navigate to="/auth" />
    }

  
    return (
      <Container style={{ marginTop: 50 }}>
        <Menu pointing secondary>
          <Menu.Item
            name="Movies"
            active={activeTabs === DisplayType.Movies}
            onClick={() => setActiveTabs(DisplayType.Movies)}
          />
          <Menu.Item
            name="TvShows"
            active={activeTabs === DisplayType.TvShows}
            onClick={() => setActiveTabs(DisplayType.TvShows)}
          />
        </Menu>
        <Segment>
          {activeTabs === DisplayType.Movies ? (
            <div>
              <Header as="h2">Rated Movies</Header>
              <ColumnDisplay data={ratedMovies.results} displayType={DisplayType.Movies} />
            </div>
          ) : (
            <div>
              <Header as="h2">Rated TV Shows</Header>
              <ColumnDisplay data={ratedTvShows.results} displayType={DisplayType.TvShows} />
            </div>
          )}
        </Segment>
      </Container>
    );
  };