import React, {useContext} from "react"
import { useQuery} from "@apollo/react-hooks";
import { gql } from "apollo-boost"

import EditarUsuario from "./EditUsuario";
import usuarioContext from "./usuarioContext";

const GET_USUARIOS_ADMIN = gql`
  {
  getUsuarios{
    _id
    name
    numId
    email
    role
    state
  }
  }
`

const UsuariosList = () => {

  const { loading, error, data } = useQuery(GET_USUARIOS_ADMIN)
  const context = useContext(usuarioContext);

/*   if (usuario.access) {
    window.confirm(usuario.email);
  } */

  if (loading) return <p>Loading Messages...</p>;
  if (error) {
    return <p>Error</p>;
  }

  return (
    <>
      <br></br>
      <p>Hola! {context.usuario.email}</p>
      <center><h3>Lista de Usuarios </h3></center>
      <br></br>
      <center><EditarUsuario/></center>
      <br></br>
      <center>
        <div class="container">
          <table class="table table-striped table-bordered table-hover table-sm"> 
            <thead class="table-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Documento de identidad</th>
                <th scope="col">Correo Electrónico</th>
                <th scope="col">Rol</th>
                <th scope="col">Estado</th>
                <th scope="col">Acción</th>
              </tr>
            </thead>
            <tbody>
              {data.getUsuarios.map(({ _id, name, email, numId, role, state }, index) => (
                <tr key={_id}>
                  {/* <td
                    class="text-center align-middle" scope="row">{index + 1}
                  </td> */}
                  <td class="align-middle">
                    {_id}
                  </td>
                  <td class="align-middle">
                    {name}
                  </td>
                  <td class="align-middle">
                    {numId}
                  </td>
                  <td class="align-middle">
                    {email}
                  </td>                
                  <td class="align-middle">
                    {role}
                  </td>
                  <td class="align-middle">
                    {state}
                  </td>
                  <td class="align-middle">
                    <button
                      type="button"
                      class="btn btn-danger">
                      Editar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </center>
    </>
  )
}

export default UsuariosList