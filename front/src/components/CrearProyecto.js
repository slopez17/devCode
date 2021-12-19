import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const CREATE_PROYECT = gql`
  mutation CreateProyect($projectName: String!, $generalObjective: String!, $specificObjetive: String!, $budget: String!, $initialDate: String!, $finalDate: String!, $leaderId: String!, $leaderName: String!, $stateProyect: String!, $fase: String!) {
    createProyecto(input:{
    projectName: $projectName
    generalObjective: $generalObjective
    specificObjetive: $specificObjetive
    budget: $budget
    initialDate: $initialDate
    finalDate: $finalDate
    leaderId: $leaderId
    leaderName: $leaderName
    stateProyect: $stateProyect
    fase: $fase
  }){
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
`;


const CrearProyecto = () => {

  const [projectName, setProjectName] = useState("")
  const [generalObjective, setGeneralObjetive] = useState("")
  const [specificObjetive, setSpecificObejtive] = useState("")
  const [budget, setBudget] = useState("")
  const [initialDate, setInitialDate] = useState("")
  const [finalDate, setFinalDate] = useState("")
  const [leaderId, setLeaderId] = useState("")
  const [leaderName, setLeaderName] = useState("")
  const [stateProyect, setStateProyect] = useState("")
  const [fase, setFase] = useState("")

  const [createProyecto] = useMutation(CREATE_PROYECT)
  
  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-body">
            <form
              onSubmit={async e => {
                e.preventDefault();
                await createProyecto({ variables: { projectName, generalObjective, specificObjetive, budget, initialDate, finalDate, leaderId, leaderName, stateProyect, fase} })
                window.location.href = "/list-proyects";
              }}
            >
              <div className="form-group">
                <label>
                  Nombre del Proyecto:
                </label>
                <input
                  type="text"
                  placeholder="Proyecto Tecnologico"
                  onChange={e => setProjectName(e.target.value)}
                  value={projectName}
                  className="form-control"
                ></input>
              </div>
              <div className="form-group">
                <label>
                Objetivo General:
                </label>
                <input
                  type="text"
                  placeholder="Construir Pagina Web"
                  value={generalObjective}
                  onChange={e => setGeneralObjetive(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>
                  Objetivo Especifico:
                </label>
                <input
                  type="text"
                  placeholder="Desarrollar back y front"
                  value={specificObjetive}
                  onChange={e => setSpecificObejtive(e.target.value)}
                  className="form-control"
                />
              </div>       
              <div className="form-group">
                <label>
                  Presupuesto:
                </label>
                <input
                  type="number"
                  placeholder="$1.000.000"
                  onChange={e => setBudget(e.target.value)}
                  value={budget}
                  className="form-control"
                ></input>
              </div>
              <div className="form-group">
                <label>
                  Fecha de Inicio:
                </label>
                <input
                  type="date"
                  placeholder="2021-06-05"
                  onChange={e => setInitialDate(e.target.value)}
                  value={initialDate}
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
                  onChange={e => setFinalDate(e.target.value)}
                  value={finalDate}
                  className="form-control"
                ></input>
              </div>
              <div className="form-group">
                <label>
                  ID Lider:
                </label>
                <input
                  type="text"
                  placeholder="151212121"
                  onChange={e => setLeaderId(e.target.value)}
                  value={leaderId}
                  className="form-control"
                ></input>
              </div>    
              <div className="form-group">
                <label>
                  Nombre Lider:
                </label>
                <input
                  type="text"
                  placeholder="Sandra López"
                  onChange={e => setLeaderName(e.target.value)}
                  value={leaderName}
                  className="form-control"
                ></input>
              </div> 
              <div className="form-group">
                <label>
                  Fase del proyecto:
                </label>
                <select
                  onChange={e => setStateProyect(e.target.value)}
                  value={stateProyect}
                  className="form-control"
                >
                  <option selected disabled="disabled" value=''>Seleccione una opción</option>
                  <option>Iniciado</option>
                  <option>En desarrollo</option>
                  <option>Terminado</option>
                </select>
              </div>
              <div className="form-group">
                <label>
                  Estado del proyecto:
                </label>
                <select
                  onChange={e => setFase(e.target.value)}
                  value={fase}
                  className="form-control"
                >
                  <option selected disabled="disabled" value=''>Seleccione una opción</option>
                  <option>Activo</option>
                  <option>Inactivo</option>
                  </select>
                </div>
              <button className="btn btn-success btn-block">Guardar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
)
}

export default CrearProyecto;