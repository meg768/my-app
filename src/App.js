import Button from 'react-bootstrap/Button';
import React from 'react';

import Home from './pages/home';
import About from './pages/about';

import { HashRouter, Switch, Route, Link } from 'react-router-dom';

function Counter() {
	const [count, setCount] = React.useState(0);

	const increment = () => {
		setCount(count + 1);
	};

	return (
		<div>
			<p>Count: {count}</p>
			<Button onClick={increment}>Increment</Button>
		</div>
	);
}

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
export default App;
