import { useState } from 'react';
import { ButtonGroup } from 'semantic-ui-react';
import {Button} from 'semantic-ui-react';
import { ColumnDisplay } from './column-display';
import { fetchMovies } from './query';
import { fetchTvShows } from './query';
import { useQuery } from '@tanstack/react-query';
import {Navigate} from 'react-router-dom' 


export enum DisplayType{
    Movies = "movies",
    TvShows = "tvShows"
}

export const Home = () => {
        const [displayType, setDisplayType] = useState<DisplayType>(
            DisplayType.Movies
        )

        const {data: movieData, isLoading: isLoadingMovies} = useQuery({queryKey:["movies"], queryFn: fetchMovies})
        const {data: tvShowData, isLoading: isLoadingTvShows} = useQuery({queryKey:["tvShows"], queryFn: fetchTvShows})

        if(localStorage.getItem("guest_session_id") === null){
            return <Navigate to="/auth" />
        }



    return (
        <div style = {{marginTop:50, height:"auto"}} >
            {" "}
            <Button.Group>
                <Button 
                color={displayType == DisplayType.Movies ? "blue" : "black"} 
                onClick={() => setDisplayType(DisplayType.Movies)}>
                    Movies
                </Button>
                <Button 
                color={displayType == DisplayType.TvShows ? "blue" : "black"} 
                onClick={() => setDisplayType(DisplayType.TvShows)}>
                    TVShows
                </Button>
            </Button.Group>

            {isLoadingMovies || isLoadingTvShows ? (
            <div>Loading...</div>
        ):(
            <div style={{marginTop: 20}}>
                {displayType === DisplayType.Movies ? 
                (<ColumnDisplay data={movieData.results} 
                    displayType={DisplayType.Movies} /> 
            ): (
                <ColumnDisplay  data={tvShowData.results} 
                    displayType={DisplayType.TvShows} />
                )}

            </div>
        )}
        </div>
    );
}