import React, { useState, useEffect } from "react";
import {
  Alert,
  Button,
  Container,
  FormGroup,
} from "reactstrap";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { useHistory } from "react-router";

 const AUTH_USUARIO = gql`
  query AuthUsuario($email: String!, $password: String!) {
  authUsuario(
    email: $email,
    password: $password
  ){
    access
  }
}
`;

const Login = () => {
  const history = useHistory();
  const [login, setLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, error, data, refetch } = useQuery(AUTH_USUARIO, { variables: { email, password } });
  
  const [usuario, setUsuario] = useState({
    _id: "",
    email: "",
    numId: "",
    name: "",
    role: "",
    state: "",
    access: false
  });

  useEffect(() => {
    if (data) {
      setUsuario({
        ...usuario,
        access: data.authUsuario.access 
      });     
    }
  }, [data]);

  useEffect(() => {
    if (loading) return;
    if (usuario.access && login) return (history.replace("/list-users"));
  }, [usuario, login, loading]);

  if (error) {
    return <Alert color="danger">
      Error :(
    </Alert>;
  }
  
  return (
    <Container>
      <FormGroup>
        <label>
          Email:
        </label>
        <input
          className="form-control"
          name="email"
          type="text"
          onChange={e => setEmail(e.target.value)}
          placeholder="pedro01@ejemplo.com"
          required
        />
      </FormGroup>
      <FormGroup>
        <label>
          Clave:
        </label>
        <input
          className="form-control"
          name="password"
          type="password"
          placeholder="password"
          onChange={e => setPassword(e.target.value)}
          required
        />
      </FormGroup>

      <Button
        color="primary"
        type="submit"
        onClick={e => setLogin(true)}
      >
        Login
      </Button>


      <br />
      <br />

      <a tag="a" href="/new-usuario">Crea tu cuenta</a>
    
    </Container>
  )
}

export default Login;