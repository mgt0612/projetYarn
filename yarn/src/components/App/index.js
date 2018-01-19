import React, { Component } from 'react';
import './App.css';
import classnames from 'classnames';
import {Circle, draw, startPixies} from './entete.js';
var WIDTH;
var HEIGHT;
var canvas;
var con;
var g;
var pxs = [];
var rint = 50;

class App extends Component {
	constructor(props) {
    super(props);
    this.handleClick = this.startPixies.bind(this);
  }
  
  startPixies() {
  WIDTH = window.innerWidth;
  HEIGHT = 800;
    //console.log("width " +WIDTH +" height " +HEIGHT);
	document.getElementById('container').setAttribute("style","width:" +WIDTH+"px;");
	document.getElementById('container').setAttribute("style","height:" +HEIGHT+"px;");
	canvas = document.getElementById('pixie');
	canvas.setAttribute("style","width:" +WIDTH+"px;");
	canvas.setAttribute("style","height:" +HEIGHT+"px;");
	con = canvas.getContext('2d');
	for(var i = 0; i < 150; i++) {
		pxs[i] = new Circle();
		pxs[i].reset();
	}
	setInterval(draw,rint);
  }
  
  render() {
    const { className, ...props } = this.props;
    return (
      
      <div className="body">
        <div id="container" onLoad={ this.startPixies }>
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