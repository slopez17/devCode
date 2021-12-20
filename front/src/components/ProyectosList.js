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
    <>
    <br></br>
    <center><h2>Proyectos</h2></center>
    <div className="row">
      <div className="col-md-8 offset-md-2">
        {data.getProyectos.map(({ _id, projectName, generalObjective, specificObjetive, budget, initialDate, finalDate, leaderId, leaderName, stateProyect, fase}) => (
          <div key={_id} className="card m-2">
            <div className="card-body">
              <center><h4>{projectName}</h4></center>
              <br></br>
              <h6>Objetivo General: </h6><p>{generalObjective}</p>
              <h6>Objetivo Especifico: </h6><p>{specificObjetive}</p>
              <h6>Presupuesto: </h6><p>{budget}</p>
              <h6>Fecha de Inicio: </h6><p>{initialDate}</p>
              <h6>Fecha de Finalización: </h6><p>{finalDate}</p>
              <h6>ID Lider: </h6><p>{leaderId}</p>
              <h6>Nombre del Lider: </h6><p>{leaderName}</p>
              <h6>Estado: </h6><p>{stateProyect}</p>
              <h6>Fase: </h6><p>{fase}</p>

              <Link className="nav-link" to="/new-inscripcion">
              <button className="btn btn-success btn-block">Inscripcion</button>
              </Link>
              <Link className="nav-link" to="/avances">
              <button className="btn btn-dark btn-block">Avances</button>
              </Link>

            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default ProyectosList