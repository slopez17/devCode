import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const CREATE_INSCRIPCION = gql`
  mutation CreateInscripcion(
    $projectId: String!,
    $studentId: String!,
    $state: String!,
    $startDate: String!,
    $endDate: String!
  ) { createInscripcion(
    projectId: $String,
    studentId: $String,
    state: $String,
    startDate: $String,
    endDate: String){
        projectId
    }
  }
`;


const CrearIscripcion = () => {
    
    const [projectId, setprojectId] = useState("")
    const [studentId, setstudentId] = useState("")
    const [state, setstate] = useState("")
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
                window.location.href = "/";
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
                <textarea
                  type="text"
                  placeholder="Estado"
                  onChange={e => setstate(e.target.value)}
                  value={state}
                  className="form-control"
                ></textarea>
              </div>
              <div className="form-group">
                <textarea
                  type="text"
                  placeholder="Fecha Inicial"
                  onChange={e => setstartDate(e.target.value)}
                  value={startDate}
                  className="form-control"
                ></textarea>
              </div>
              <div className="form-group">
                <textarea
                  type="text"
                  placeholder="FechaFinal"
                  onChange={e => setendDate(e.target.value)}
                  value={endDate}
                  className="form-control"
                ></textarea>
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