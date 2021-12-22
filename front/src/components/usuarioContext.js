import React from "react";


const usuarioContext = React.createContext({
    usuario: {
        _id: "",
        email: "",
        numId: "",
        name: "",
        role: "",
        state: "",
        access: false
    },
    updateUsuario: () => { }
});

export default usuarioContext;