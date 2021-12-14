import React from "react";
import CrearUsuario from "./components/CreateUsuario";
import UsuariosList from "./components/UsuariosList";
import ProyectosList from "./components/ProyectosList";
<<<<<<< HEAD
import CrearProyecto from "./components/CrearProyecto";
=======
import Login from "./components/Login";
>>>>>>> Sprint4-Alejo
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Navigation } from "./components/Navbar";

import "bootswatch/dist/lux/bootstrap.min.css";



function App() {
  return (
    <Router>
      <Navigation />
      <div className="container p-4">
        <Switch>
          <Route exact path="/" component={UsuariosList} />
          <Route exact path="/new-usuario" component={CrearUsuario} />
          <Route exact path="/list-proyects" component={ProyectosList} />
<<<<<<< HEAD
          <Route exact path="/create-proyect" component={CrearProyecto} />
=======
          <Route exact path="/login" component={Login} />
>>>>>>> Sprint4-Alejo
        </Switch>
      </div>
    </Router>
  );
}

export default App;
