import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';

// Import router stuff
import { HashRouter, Switch, Route } from 'react-router-dom';

// Import pages
import Home from './pages/home';
import About from './pages/about';


function App() {

	return (
		<HashRouter>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/home' component={Home} />
				<Route path='/about' component={About} />
			</Switch>
		</HashRouter>
	);
}

 
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);

  