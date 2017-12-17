import React, { Component } from 'react';
import './App.css';
import classnames from 'classnames';
import './entete.js';


class App extends Component {
  render() {
    const { className, ...props } = this.props;
    return (
      
      <div className="body">
        <div id="container">
          <canvas id="pixie"></canvas>
          <div className="entete">
            <p className="titre">Raisin Martial</p>
            <h1>Qui sommes nous?</h1>
            <h3>Les artistes de chez Raisin Martial vous feront découvrir l'univers de Never Land à travers différents supports tels que le roman, la musique, le dessin ou encore la création d'objet.<br /> 
            Notre rôle est de vous sensibiliser à la pratique des arts narratifs transmédia, encore très peu connus en France.
            </h3>
          </div>
        </div>
      </div>
      
    );
  }
}


export default App;