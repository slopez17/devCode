import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const CREATE_USUARIO = gql`
  mutation CreateUsuario(
    $email: String!,
    $numId: String!,
    $name: String!,
    $password: String!,
    $role: String!,
    $state: String!
  ) { createUsuario(
    email: $email,
    numId: $numId,
    name: $name,
    password: $password,
    role: $role,
    state: $state){
        email
    }
  }
`;


const CrearUsuario = () => {
    
    const [email, setEmail] = useState("")
    const [numId, setNumId] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("")
    const [state, setState] = useState("")

    const [createUsuario] = useMutation(CREATE_USUARIO);

    return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-body">
            <form
              onSubmit={async e => {
                e.preventDefault();
                await createUsuario({ variables: { email, numId, name, password, role, state } });
                window.location.href = "/";
              }}
            >
              <div className="form-group">
                <input
                  type="text"
                  placeholder="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="No Documento"
                  value={numId}
                  onChange={e => setNumId(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <textarea
                  type="text"
                  placeholder="Nombre"
                  onChange={e => setName(e.target.value)}
                  value={name}
                  className="form-control"
                ></textarea>
              </div>
              <div className="form-group">
                <textarea
                  type="text"
                  placeholder="Contraseña"
                  onChange={e => setPassword(e.target.value)}
                  value={password}
                  className="form-control"
                ></textarea>
              </div>
              <div className="form-group">
                <textarea
                  type="text"
                  placeholder="Rol"
                  onChange={e => setRole(e.target.value)}
                  value={role}
                  className="form-control"
                ></textarea>
              </div>
              <div className="form-group">
                <textarea
                  type="text"
                  placeholder="Estado"
                  onChange={e => setState(e.target.value)}
                  value={state}
                  className="form-control"
                ></textarea>
              </div>
              <button className="btn btn-success btn-block">Guardar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
)
}

export default CrearUsuario