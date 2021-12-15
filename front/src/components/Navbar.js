import React from "react";
import {Link} from 'react-router-dom'

export const Navigation = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      DevCode
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/list-users">
            Usuarios
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/new-inscripcion">
            Crear Inscripcion
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/inscripciones">
            Inscripciones
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/create-proyect">
            Crear Proyecto
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/list-proyects">
            Proyectos
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Salir
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);
