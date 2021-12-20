import React, { useState, useEffect } from "react";
import { Alert, Button, Container, FormGroup } from "reactstrap";
import { useLazyQuery, useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { useHistory } from "react-router";

const AUTH_USUARIO = gql`
  query AuthUsuario($email: String!, $password: String!) {
    authUsuario(email: $email, password: $password) {
      access
    }
  }
`;

const Login = () => {
  const history = useHistory();
  const [login, setLogin] = useState(false);
  const [loginMessage, setLoginMessge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authUsuario, { loading, error, data }] = useLazyQuery(AUTH_USUARIO);

  const [usuario, setUsuario] = useState({
    _id: "",
    email: "",
    numId: "",
    name: "",
    role: "",
    state: "",
    access: false,
  });

  useEffect(() => {
    if (data) {
      setUsuario({
        ...usuario,
        access: data.authUsuario.access,
      });
    }
  }, [data]);

  useEffect(() => {
    if (loading) return;
    if (usuario.access) return history.replace("/list-users");
    if (!usuario.access && login)
      setLoginMessge("Acceso no autorizado, revise los datos ingresados");
    if (!login) setLoginMessge("");
  }, [usuario, login, loading]);

  if (error) {
    return <Alert color="danger">Error :(</Alert>;
  }

  return (
    <div class="m-0 vh-100 row justify-content-center align-items-center bg-primary">
      <div class="card w-25">
        <div className="card-body">
          <h1 className="text-center">DevCode</h1>
          <br></br>
          <FormGroup>
            <label>Correo electrónico:</label>
            <input
              className="form-control"
              name="email"
              type="text"
              onChange={(e) => {
                setEmail(e.target.value);
                setLogin(false);
              }}
              placeholder="pedro01@ejemplo.com"
              required
            />
          </FormGroup>
          <FormGroup>
            <label>Contraseña:</label>
            <input
              className="form-control"
              name="password"
              type="password"
              placeholder="xxxxxxxxx"
              onChange={(e) => {
                setPassword(e.target.value);
                setLogin(false);
              }}
              required
            />
          </FormGroup>
          <div class="col text-center">
            <Button
              color="primary"
              type="submit"
              onClick={(e) => {
                authUsuario({ variables: { email, password } });
                setLogin(true);
              }}
            >
              Ingresar
            </Button>
            <p>{loginMessage}</p>
            <p>
              ¿Eres nuevo por aquí?{" "}
              <a href="/new-usuario" class="text-info">
                Regístrate!
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
