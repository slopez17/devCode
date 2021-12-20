import React from "react"
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost"
import { Link } from 'react-router-dom'

const GET_AVANCES = gql`
  {
  getAvances{
    _id
    projectId
    description
    advanceDate
    leaderOb
    
  }
  }
`

const AvanceList = () => {

  const { loading, error, data } = useQuery(GET_AVANCES)
  if (loading) return <p>Loading Messages...</p>;
  if (error) {
    return <p>Error</p>;
  }

  return (
      <>
      <br></br>
      <center><h2>Avances del Proyecto</h2></center>
      <div className="row">

        <div className="col-md-6 offset-md-3">
          {
            data.getAvances.map(({ _id, projectId, description, advanceDate, leaderOb }) => (
              <div key={_id} className="card m-2">
                <div className="card-body">
                  <h6>ID Avance: </h6><p>{projectId}</p>
                  <h6>Descripción: </h6><p>{description}</p>
                  <h6>Fecha: </h6><p>{advanceDate}</p>
                  <h6>Observaciones Lider</h6><p>{leaderOb}</p>
                </div>
              </div>
            ))
          }
          <Link className="nav-link" to="/create-avance">
            <button className="btn btn-success btn-block">Crear nuevo avance</button>
          </Link>
        </div>

      </div>
      </>
      )
}

      export default AvanceList