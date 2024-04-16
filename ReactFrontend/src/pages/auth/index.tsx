import { Header, Form, Grid, Segment, Button } from 'semantic-ui-react';
import { useMutation } from '@tanstack/react-query';
import { mutationLogin } from './mutation';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

export const Auth = () => {
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationKey: ['login'],
    mutationFn: mutationLogin,
    onSuccess: (data) => {
      localStorage.setItem("guest_session_id", data.guest_session_id);
      console.log(data.guest_session_id);
      navigate("/");
    },
  });

  const handleLogin = useCallback(async () => {
    await mutate();
  }, [mutate]);

  return (
    <Grid textAlign='center' verticalAlign='middle' style={{ height: '100vh' }}>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="violet" textAlign="center">
          Welcome! Login by registering as a guest below.
        </Header>
        <Form size="large">
          <Segment stacked>
            <Button color="violet" size="large" fluid onClick={handleLogin}>
              Login
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};