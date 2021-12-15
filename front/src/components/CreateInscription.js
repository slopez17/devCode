import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const CREATE_INSCRIPCION = gql`
  mutation CreateInscripcion(
    $projectId: String!,
    $studentId: String!,
    $state: String!,
    $startDate: String!,
    $endDate: String
  ) { createInscripcion( input:{
    projectId: $projectId,
    studentId: $studentId,
    state: $state,
    startDate: $startDate,
    endDate: $endDate
    }){
      projectId
    }
  }
`;


const CrearIscripcion = () => {
    
    const [projectId, setprojectId] = useState("")
    const [studentId, setstudentId] = useState("")
    const [state, setstate] = useState("Pendiente")
    const [startDate, setstartDate] = useState("")
    const [endDate, setendDate] = useState("")
   

    const [createInscripcion] = useMutation(CREATE_INSCRIPCION);

    return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-body">
            <form
              onSubmit={async e => {
                e.preventDefault();
                await createInscripcion({ variables: { projectId, studentId, state, startDate, endDate } });
                window.location.href = "/inscripciones";
              }}
            >
              <div className="form-group">
                <input
                  type="text"
                  placeholder="ID Proyecto"
                  value={projectId}
                  onChange={e => setprojectId(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="ID Estudiante"
                  value={studentId}
                  onChange={e => setstudentId(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Estado"
                  value={state}
                  onChange={e => setstate(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>
                  Fecha de Inicio:
                </label>
                <input
                  type="date"
                  placeholder="2021-06-05"
                  onChange={e => setstartDate(e.target.value)}
                  value={startDate}
                  className="form-control"
                ></input>
              </div>
              <div className="form-group">
                <label>
                  Fecha de Finalización:
                </label>
                <input
                  type="date"
                  placeholder="2021-06-05"
                  onChange={e => setendDate(e.target.value)}
                  value={endDate}
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

export default CrearIscripcion