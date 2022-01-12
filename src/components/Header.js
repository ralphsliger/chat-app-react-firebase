import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../services/firebase';


function Header() {
  return (
    <header>
      <nav> 
          {auth().currentUser
            ? <div >
             <button className="boton-cerrar" onClick={() => auth().signOut()}>Cerrar sesión</button>
            </div>
            : <div >              
            </div>}  
      </nav>
    </header>
  );
}

export default Header;