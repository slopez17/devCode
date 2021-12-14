import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import {
  Button,
  Container,
  FormGroup,
} from "reactstrap";


const CrearUsuario = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </FormGroup>

          <Button
            color="primary"
            type="submit"
          >
            Login
          </Button>


      <br />
      <br />

      <a tag="a" href="/register">Crea tu cuenta</a>
      
    </Container>
)
}

export default CrearUsuario