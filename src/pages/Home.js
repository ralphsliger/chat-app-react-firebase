import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
  render() {
    return (
      <div className="home-app">
        <section>
              <h1>Chat App</h1>
              <div className="formContainer">
                <Link className="boton-crear" to="/signup">Nueva Cuenta</Link>
                <Link className="boton-crear" to="/login">Login</Link>
              </div>      
        </section>
      </div>
    )
  }
}