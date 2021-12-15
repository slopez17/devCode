import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const CREATE_USUARIO = gql`
  mutation CreateUsuario($email: String!, $numId: String!, $name: String!, $password: String!, $role: String!, $state: String!) {
  createUsuario(input:{
    email: $email
    numId: $numId
    name: $name
    password: $password
    role: $role
    state: $state
  }){
    email
    numId
    name
    password
    role
    state
  }
}
`;


const CrearUsuario = () => {

  const [email, setEmail] = useState("")
  const [numId, setNumId] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [role, setRole] = useState("")
  const [state, setState] = useState("Pendiente")

  const [createUsuario] = useMutation(CREATE_USUARIO)
  
  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-body">
            <form
              onSubmit={async e => {
                e.preventDefault();
                await createUsuario({ variables: { email, numId, name, password, role, state } })
                window.location.href = "/login";
              }}
            >
              <div className="form-group">
                <label>
                  Nombre completo:
                </label>
                <input
                  type="text"
                  placeholder="Pedro Perez González"
                  onChange={e => setName(e.target.value)}
                  value={name}
                  className="form-control"
                ></input>
              </div>
              <div className="form-group">
                <label>
                Documento de identidad:
                </label>
                <input
                  type="text"
                  placeholder="32685608"
                  value={numId}
                  onChange={e => setNumId(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>
                  Correo electrónico:
                </label>
                <input
                  type="email"
                  placeholder="pedro01@ejemplo.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="form-control"
                />
              </div>
                
              <div className="form-group">
                <label>
                  Contraseña:
                </label>
                <input
                  type="password"
                  placeholder="Contraseña"
                  onChange={e => setPassword(e.target.value)}
                  value={password}
                  className="form-control"
                ></input>
              </div>
              <div className="form-group">
                <label>
                  Confirmar contraseña:
                </label>
                <input
                  type="password"
                  placeholder="Contraseña"
                  onChange={e => setPasswordConfirm(e.target.value)}
                  value={passwordConfirm}
                  className="form-control"
                ></input>
              </div>  
              
              <div className="form-group">
                <label>
                  Rol:
                </label>
                <select
                  onChange={e => setRole(e.target.value)}
                  value={role}
                  className="form-control"
                >
                  <option selected disabled="disabled" value=''>Seleccione una opción</option>
                  <option>Estudiante</option>
                  <option>Lider</option>
                  <option>Administrador</option>
                </select>
              </div>
              <div className="form-group">
                <label>
                  Estado
                </label>
                <input
                  readOnly
                  type="text"
                  value="Pendiente"
                  className="form-control"
                ></input>
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