import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";
import { useMutation } from "@tanstack/react-query";
import { mutationLogin } from "./mutation";
import { useNavigate } from "react-router-dom";
import { FormEvent } from "react";

const Login = () => {
  const { data, mutate } = useMutation({ mutationKey: ['login'], mutationFn: mutationLogin });;

  const navigate = useNavigate();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    await mutate();
    localStorage.setItem("guest_session_id", data.guest_session_id);
    navigate("/");
  }

  return (<Grid textAlign='center' verticalAlign='middle' style={{ height: "100vh" }}>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        Welcome! Please login to continue.
      </Header>
      <Form size="large">
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Button color="teal" fluid size="large" onClick={handleLogin}> Login </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>);
};

export default Login;
