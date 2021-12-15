import React from "react"
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost"
import Table from 'react-bootstrap/Table'

const GET_USUARIOS = gql`
  {
  getUsuarios{
    _id
    name
    email
    numId
    password
    role
    state
  }
  }
`

const UsuariosList = () => {

  const { loading, error, data } = useQuery(GET_USUARIOS)
  if (loading) return <p>Loading Messages...</p>;
  if (error) {
    return <p>Error</p>;
  }

  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>name</th>
            <th>email</th>
            <th>Documento</th>
            <th>Password</th>
            <th>Rol</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {data.getUsuarios.map(({ _id, name, email, numId, password, role, state }) => (
            <tr>
              <td>{_id}</td>
              <td>{name}</td>
              <td>{email}</td>
              <td>{numId}</td>
              <td>{password}</td>
              <td>{role}</td>
              <td>{state}</td>
              {/* <td><button>Edit</button>
                <button>Delete</button></td> */}
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default UsuariosList