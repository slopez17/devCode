import React  from "react"
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost"
import Table from 'react-bootstrap/Table'

const GET_INSCRIPCIONES = gql `
  {
  getInscripciones{
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
    <>
      <br></br>
      <center><h2>Listado de Inscripciones</h2></center>
      <div className="container p-4">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>ID Proyecto</th>
            <th>ID Estudiante</th>
            <th>Estado</th>
            <th>Fecha Inicio</th>
            <th>Fecha Fin</th>
          </tr>
        </thead>
        <tbody>
          {data.getInscripciones.map(({_id, projectId, studentId,state, startDate, endDate}) => (
            <tr>
              <td>{_id}</td>
              <td>{projectId}</td>
              <td>{studentId}</td>
              <td>{state}</td>
              <td>{startDate}</td>
              <td>{endDate}</td>
              {/* <td><button>Edit</button>
                <button>Delete</button></td> */}
            </tr>
          ))}
        </tbody>
        </Table>
      </div>
    </>
  )
}


export default InscripcionesList