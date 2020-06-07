import React from 'react';
import './styles.css';
import { Painting } from './components/Painting';
import { Header } from './components/header';
import { Drawing } from './components/Drawing';
import { Cutpaper } from './components/Cutpaper';
import { Designs } from './components/Design';

export default function App() {
	return (
		<div className='App'>
			<Header />
			<Painting />
			<Drawing />
			<Cutpaper />
			<Designs />
		</div>
	);
}
