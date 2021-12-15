import React from "react";
import CrearUsuario from "./components/CreateUsuario";
import UsuariosList from "./components/UsuariosList";
import CrearIscripcion from "./components/CreateInscription";
import ProyectosList from "./components/ProyectosList";
import InscripcionesList from "./components/InscripcionesList";
import CrearProyecto from "./components/CrearProyecto";
import Login from "./components/Login";
import { Home } from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Navigation } from "./components/Navbar";

import "bootswatch/dist/lux/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container p-4">
        <Switch>
          <Route exact path="/list-users" component={UsuariosList} />
          <Route exact path="/new-usuario" component={CrearUsuario} />
          <Route exact path="/new-inscripcion" component={CrearIscripcion} />
          <Route exact path="/Inscripcion" component={InscripcionesList} />
          <Route exact path="/list-proyects" component={ProyectosList} />
          <Route exact path="/create-proyect" component={CrearProyecto} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
