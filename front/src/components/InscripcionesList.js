import React  from "react"
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost"

const GET_INSCRIPCIONES = gql `
  {
  getUsuarios{
    _id
    projectId
    studentId
    state
    startDate
    endDate
    
  }
  }
`

const InscripcionesList = () => {
    
    const { loading, error, data } = useQuery(GET_INSCRIPCIONES)
    if (loading) return <p>Loading Messages...</p>;
    if (error) {
    return <p>Error</p>;
    }
    
    return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        {
          data.getInscripciones.map(({_id, projectId, studentId,state, startDate, endDate}) => (
            <div key={_id} className="card m-2">
            <div className="card-body">
              <h4>{projectId}</h4>
              <p>{studentId}</p>
              <p>{state}</p>
              <p>{startDate}</p>
              <p>{endDate}</p>
            </div>
          </div>
          ))
        }
      </div>
    </div>
    )
}

export default InscripcionesList