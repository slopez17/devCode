import React, { useState } from "react"
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost"

const EDIT_PROYECT = gql`
  mutation EditProyecto($_id: String!, $stateProyect: String!, $fase: String!){
    editProyecto(_id: $_id, input:{
    stateProyect: $stateProyect
    fase: $fase
  }){
    stateProyect
    fase
  }
}
`;

const EditarProyecto = () => {
    const [_id, setID] = useState("")
    const [stateProyect, setStateProyect] = useState("")
    const [fase, setFase] = useState("")
    const [editProyecto] = useMutation(EDIT_PROYECT)

    return (
        <>
            <center>
            <form onSubmit={async e => {
                e.preventDefault();
                await editProyecto({ variables: { _id, stateProyect, fase } });
                window.location.href = "/list-proyects";
            }}>
                <input placeholder="ID" value={_id} onChange={evt => setID(evt.target.value)}></input>
                <input placeholder="Estado Proyecto" value={stateProyect} onChange={evt => setStateProyect(evt.target.value)}></input>
                <input placeholder="Fase" value={fase} onChange={evt => setFase(evt.target.value)}></input>
                <button>Actualizar</button>
            </form>
            </center>
        </>
    )
}

export default EditarProyecto