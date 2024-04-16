import { DisplayType } from ".";
import { Rating } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";
import { Card } from "semantic-ui-react";
import { Link } from "react-router-dom";
import {Form }  from "semantic-ui-react";
import { useState } from "react";
import { useMutation } from '@tanstack/react-query';
import { rateMovie } from "./mutation";
import { rateTvShow } from "./mutation";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Label } from "semantic-ui-react";

interface DisplayData {
  id: number;
  overview: string;
  poster_path: string;
  title: string;
  name: string;
  vote_average: number;
  release_date: string;
  rating: number;
}

interface Props {
  data: DisplayData[];
  displayType: DisplayType;
  isRated?: boolean;
}

export const ColumnDisplay = (props: Props) => {
  const { data, displayType, isRated } = props;
  const [rating, setRating] = useState<number>(0);

  const onSuccess = () => {
    toast.success("Successfully rated movie");
  };

  const onError = () => {
    toast.error("Failed to rate movie");
  };

  const { mutate: rateMovieMutation } = useMutation({
    mutationKey: ["ratedMovie"],
    mutationFn: (id: number) => rateMovie(id, rating),
    onSuccess,
    onError,
  });

  const { mutate: rateTvShowMutation } = useMutation({
    mutationKey: ["ratedTvShow"],
    mutationFn: (id: number) => rateTvShow(id, rating),
    onSuccess,
    onError,
  });

  const rate = displayType === DisplayType.Movies ? rateMovieMutation : rateTvShowMutation;

  const title = data && data.length > 0 ? (
    displayType === DisplayType.Movies ? data[0].title : data[0].name
  ) : '';

  if (!data || data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <Grid
      textAlign="center"
      columns={3}
      stackable
      centered
      verticalAlign="top"
      padded="vertically"
    >
      {data.map((displayData: DisplayData) => (
        <Grid.Column key={displayData.id}>
          <Card.Group>
            <Link
              to={`${
                displayType === DisplayType.Movies ? "/movie" : "/tvshow"
              }/${displayData.id}`}
            >
              <Card
                style={{ height: 820 }}
                fluid
                image={`https://image.tmdb.org/t/p/original/${displayData.poster_path}`}
                header={
                  displayType === DisplayType.Movies
                    ? displayData.title
                    : displayData.name
                }
                meta={`Release Date: ${displayData.release_date} | Rating: ${displayData.vote_average}`}
                description={displayData.overview.slice(0, 350) + "..."}
              />
              {isRated && (
                <Label color="green">Your Rating: {displayData.rating}</Label>
              )}
            </Link>
            <Form style={{ marginTop: 10 }}>
              <Form.Group inline>
                <Form.Field>
                  <Form.Input
                    type="number"
                    min={1}
                    max={10}
                    step={1}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setRating(Number(e.target.value))
                    }
                    action={{
                      color: "violet",
                      labelPosition: "right",
                      icon: "star",
                      content: "Rate",
                      onClick: () => {
                        rate(displayData.id);
                      },
                    }}
                  />
                </Form.Field>
              </Form.Group>
            </Form>
          </Card.Group>
        </Grid.Column>
      ))}
    </Grid>
  );
};