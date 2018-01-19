// Routeur
const env = process.env.NODE_ENV || 'production';
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import App from './components/App';
import About from './components/About';
import Actu from './components/Actu';
import Contact from './components/Contact';
import Equipe from './components/Equipe';
import LogActu from './components/LogActu';
import Membre from './components/Membre';
import PostActu from './components/PostActu';	
import NotFound from './components/NotFound';

import './index.css';
const config = require(`./config/${env}`);
render((
	<BrowserRouter>
	<Switch>
		<Route exact path='/' component={App} />
		<Route path='/about' component={About} />
		<Route path='*' component={NotFound} />
		<Route path='/contact' component={Contact} />
		<Route path='/equipe' component={Equipe} />
		<Route path='/Actu' component={Actu} />
		<Route path='/logadm' component={LogActu} />
		<Route path='/membre' component={Membre} />
		<Route path='/newactu' component={PostActu} />
	</Switch>
	</BrowserRouter>),
  document.getElementById('root')
);