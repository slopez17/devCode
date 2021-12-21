import React from "react";
import CrearUsuario from "./components/CreateUsuario";
import UsuariosList from "./components/UsuariosList";
import CrearIscripcion from "./components/CreateInscription";
import ProyectosList from "./components/ProyectosList";
import InscripcionesList from "./components/InscripcionesList";
import CrearProyecto from "./components/CrearProyecto";
import CrearAvance from "./components/CrearAvance";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Navigation } from "./components/Navbar";

import "bootswatch/dist/lux/bootstrap.min.css";
import AvanceList from "./components/AvancesList";
import EditarUsuario from "./components/EditUsuario";


function App() {
  return (
    <Router> 
      <div classname=" navbar navbar-expand-lg">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/new-usuario" component={CrearUsuario} />
          <div>
            <Navigation />
            <Route exact path="/list-users" component={UsuariosList} />           
            <Route exact path="/new-inscripcion" component={CrearIscripcion} />
            <Route exact path="/inscripciones" component={InscripcionesList} />
            <Route exact path="/list-proyects" component={ProyectosList} />
            <Route exact path="/create-proyect" component={CrearProyecto} />
            <Route exact path="/create-avance" component={CrearAvance} />
            <Route exact path="/avances" component={AvanceList} />
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
