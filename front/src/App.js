import React from "react";
import CrearUsuario from "./components/CreateUsuario";
import UsuariosList from "./components/UsuariosList";
import CrearIscripcion from "./components/CreateInscription";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Navigation } from "./components/Navbar";

import "bootswatch/dist/lux/bootstrap.min.css";
import InscripcionesList from "./components/InscripcionesList";


function App() {
  return (
    <Router>
      <Navigation />
      <div className="container p-4">
        <Switch>
          <Route exact path="/" component={UsuariosList} />
          <Route exact path="/new-usuario" component={CrearUsuario} />
          <Route exact path="/new-inscripcion" component={CrearIscripcion} />
          <Route exact path="/Inscripcion" component={InscripcionesList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
