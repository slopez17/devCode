import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const CREATE_USUARIO = gql`
  mutation CreateUsuario($email: String!, $numId: String!, $name: String!, $password: String!, $role: String!) {
  createUsuario(input:{
    email: $email
    numId: $numId
    name: $name
    password: $password
    role: $role
  }){
    name
  }
}
`;

const CrearUsuario = () => {
  const [name, setName] = useState("");
  const [numId, setNumId] = useState("");
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("")
  const [createUsuario] = useMutation(CREATE_USUARIO)
  
  return (
    <div className="m-0 vh-100 row justify-content-center align-items-center bg-primary">
        <div className="card w-25">
          <div className="card-body">
            <form
              onSubmit={async e => {
                e.preventDefault();
                await createUsuario({ variables: { name, numId, email, password, role } });
              /* window.confirm("El usuario " + { name } + "ha sido registrado exitosamente"); */
                window.location.href = "/";
              }}
            >
            <h1 class="text-center h2 "> DevCode</h1>
            <h1 class="text-center h5 ">Registro de usuario</h1>
            <br></br>
              <div className="form-group">
                <label>
                  Nombre completo:
                </label>
                <input
                  type="text"
                  placeholder="Pedro Perez González"
                  onChange={e => setName(e.target.value)}
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
                  className="form-control"
                ></input>
              </div>
              
              <div className="form-group">
                <label>
                  Rol:
                </label>
                <select
                  onChange={e => setRole(e.target.value)}
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
                  Estado:
                </label>
                <input
                  readOnly
                  type="text"
                  value="Pendiente"
                  className="form-control"
                ></input>
            </div>
            <div class="btn-group d-flex" role="group">
              <button
                type="submit"
                class="btn btn-primary"
              >Guardar</button>
              <button
                type="button"
                class="btn btn-danger"
                onClick={e => { window.location.href = "/" }}
                >Cancelar</button>
            </div>
            </form>
          </div>
        </div>
      </div>
)
}

export default CrearUsuario