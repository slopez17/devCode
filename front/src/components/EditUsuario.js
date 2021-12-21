import React, { useState } from "react"
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost"

const EDIT_USUARIO = gql`
  mutation EditUsuario($_id: String!, $state: String!){
  editUsuario(_id: $_id, input:{
    state: $state
  }){
    state
  }
}
`;

const EditarUsuario = () => {
    const [_id, setID] = useState("")
    const [state, setSate] = useState("")
    const [editUsuario] = useMutation(EDIT_USUARIO)

    return (
        <>
          <form onSubmit={async e => {
                e.preventDefault();
                await editUsuario({ variables: { _id, state } });
                window.location.href = "/list-users";
              }}>
            <input placeholder="ID" value={_id} onChange={ evt => setID(evt.target.value)}></input>
            <input placeholder="Estado" value={state} onChange={ evt => setSate(evt.target.value)}></input>
            <button>Cambiar Estado</button>
          </form>
        </>
      )
}

export default EditarUsuario