import React  from "react"
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost"

const GET_USUARIOS = gql `
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
    <div className="row">
      <div className="col-md-6 offset-md-3">
        {
          data.getUsuarios.map(({_id, name, email, numId, password, role, state}) => (
            <div key={_id} className="card m-2">
            <div className="card-body">
              <h4>{name}</h4>
              <p>{email}</p>
              <p>{numId}</p>
              <p>{password}</p>
              <p>{role}</p>
              <p>{state}</p>
            </div>
          </div>
          ))
        }
      </div>
    </div>
    )
}

export default UsuariosList