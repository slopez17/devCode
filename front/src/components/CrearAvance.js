import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const CREATE_AVANCE = gql`
  mutation CreateAvance(
    $projectId: String!,
    $description: String!,
    $avanceDate: String!,
    $leaderOb: String
  ) { createAvance( input:{
    projectId: $String,
    description: $String,
    avanceDate: $String,
    leaderOb: String
    })
  }
`;


const CrearAvance = () => {
    
    const [projectId, setprojectId] = useState("")
    const [description, setdescription] = useState("")
    const [avanceDate, setavanceDate] = useState("")
    const [leaderOb, setleaderOb] = useState("")
   

    const [CreateAvance] = useMutation(CREATE_AVANCE);

    return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-body">
            <form
              onSubmit={async e => {
                e.preventDefault();
                await CreateAvance({ variables: { projectId, description, avanceDate, leaderOb } });
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
                  placeholder="Descripcion"
                  value={description}
                  onChange={e => setdescription(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>
                  Fecha del Avance:
                </label>
                <input
                  type="date"
                  placeholder="2021-06-05"
                  onChange={e => setavanceDate(e.target.value)}
                  value={avanceDate}
                  className="form-control"
                ></input>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Observacion Lider"
                  value={leaderOb}
                  onChange={e => setleaderOb(e.target.value)}
                  className="form-control"
                />
              </div>
              <button className="btn btn-success btn-block">Guardar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
)
}

export default CrearAvance