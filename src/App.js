import React from 'react';
import './styles.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Painting } from './components/Painting';
import { Header } from './components/header';
import { Drawing } from './components/Drawing';
import { Cutpaper } from './components/Cutpaper';
import { Designs } from './components/Design';

export default function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Header />
				<Route path='/paintings' component={Painting} />
				<Route path='/drawings' component={Drawing} />
				<Route path='/cutpapers' component={Cutpaper} />
				<Route path='/designs' component={Designs} />
			</div>
		</BrowserRouter>
	);
}
