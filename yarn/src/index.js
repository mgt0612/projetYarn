// index.js
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import App from './components/App';
import About from './components/About';
import NotFound from './components/NotFound';

import './index.css';

render((
	<BrowserRouter>
	<div>
		
		<Route path='/about' component={About} />
		<Route path='/index' component={App} />
		<Route path='*' component={NotFound} />
	</div>
	</BrowserRouter>),
  document.getElementById('root')
);