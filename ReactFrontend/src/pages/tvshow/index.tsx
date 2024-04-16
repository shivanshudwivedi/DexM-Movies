import { useParams } from "react-router-dom";
import { Segment } from "semantic-ui-react";
import { useQuery } from "@tanstack/react-query";
import { Header } from "semantic-ui-react";
import { fetchTvShowDetails } from "./query";
import { Loader } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";
import { Image } from "semantic-ui-react";
import { List } from "semantic-ui-react";
import { Label } from "semantic-ui-react";
import {Card } from "semantic-ui-react";
import { ListDescription } from "semantic-ui-react";
import { Accordion } from "semantic-ui-react";

interface Creator {
  id: number;
  name: string;
}

interface Genre {
  id: number;
  name: string;
}

interface Network {
  id: number;
  name: string;
}

interface ProductionCompany {
  id: number;
  name: string;
}

interface Season {
  id: number;
  season_number: number;
  air_date: string;
  episode_count: number;
}

interface TvShowDetails {
  name: string;
  poster_path: string;
  created_by: Creator[];
  episode_run_time: number[];
  genres: Genre[];
  imdb_id: string;
  networks: Network[];
  production_companies: ProductionCompany[];
  first_air_date: string;
  vote_average: number;
  seasons: Season[];
}

export const TvShow = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>Invalid TV Show ID</div>;
  }

  const { data, isLoading, error } = useQuery<TvShowDetails>({
    queryKey: ["tvshow", id],
    queryFn: () => fetchTvShowDetails(id),
  });

  if (isLoading) {
    return <Loader active />;
  }

  if (error) {
    return <div>Failed to load TV show details</div>;
  }

  if (!data) {
    return null;
  }

  const seasonsPanel = data.seasons.map((season) => ({
    key: season.id,
    title: `Season ${season.season_number}`,
    content: {
      content: (
        <Card
          style={{ height: "70px" }}
          meta={season.air_date}
          description={`${season.episode_count} episodes`}
        />
      ),
    },
  }));

  return (
    <div style={{ marginTop: 50 }}>
      <Segment>
        <Header>{data.name}</Header>
        <Grid columns={2} divided textAlign="left" style={{ marginTop: 20 }}>
          <Grid.Row>
            <Grid.Column width={6}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <Image
                  src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                  size="medium"
                  centered
                />
              </div>
            </Grid.Column>
            <Grid.Column width={10}>
              <List>
                <List.Item>
                  <List.Header>Created By: </List.Header>
                  {data.created_by.map((creator) => creator.name).join(", ")}
                </List.Item>
                <List.Item>
                  <List.Header>Episode Run Time: </List.Header>
                  {data.episode_run_time.join(", ")}
                </List.Item>
                <List.Item>
                  <List.Header>Genres </List.Header>
                  {data.genres.map((genre) => (
                    <Label key={genre.id}>{genre.name}</Label>
                  ))}
                </List.Item>
                <List.Item>
                  <List.Header>IMDB ID: </List.Header>
                  {data.imdb_id}
                </List.Item>
                <List.Item>
                  <List.Header>Networks </List.Header>
                  {data.networks.map((network) => network.name).join(", ")}
                </List.Item>
                <List.Item>
                  <List.Header>Production Companies: </List.Header>
                  {data.production_companies.map((company) => company.name).join(", ")}
                </List.Item>
                <List.Item>
                  <List.Header>Release Date: </List.Header>
                  {data.first_air_date}
                </List.Item>
                <List.Item>
                  <List.Header>Vote Average: </List.Header>
                  {data.vote_average}
                </List.Item>
                <List.Item>
                  <List.Header>Seasons: </List.Header>
                  <ListDescription style={{ height: "200px", overflow: "scroll" }}>
                    <Accordion defaultActiveIndex={0} panels={seasonsPanel} styled />
                  </ListDescription>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
};