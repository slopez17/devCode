import React from "react"
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost"
import {Link} from 'react-router-dom'

const GET_PROYECTOS = gql`
  {
  getProyectos{
    _id
    projectName
    generalObjective
    specificObjetive
    budget
    initialDate
    finalDate
    leaderId
    leaderName
    stateProyect
    fase
  }
}
`

const ProyectosList = () => {

  const { loading, error, data } = useQuery(GET_PROYECTOS)
  if (loading) return <p>Loading Messages...</p>;
  if (error) {
    return <p>Error</p>;
  }

  return (
    <div className="row">
      <div className="col-md-8 offset-md-2">
        {data.getProyectos.map(({ _id, projectName, generalObjective, specificObjetive, budget, initialDate, finalDate, leaderId, leaderName, stateProyect, fase}) => (
          <div key={_id} className="card m-2">
            <div className="card-body">
              <h4>{projectName}</h4>
              <p>{generalObjective}</p>
              <p>{specificObjetive}</p>
              <p>{budget}</p>
              <p>{initialDate}</p>
              <p>{finalDate}</p>
              <p>{leaderId}</p>
              <p>{leaderName}</p>
              <p>{stateProyect}</p>
              <p>{fase}</p>
              <Link className="nav-link" to="/avances">
              <button className="btn btn-dark btn-block">Avances</button>
              </Link>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProyectosList