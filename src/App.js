import React from 'react';
import './styles.css';
import { Painting } from './components/Painting';
import { Header } from './components/header';

export default function App() {
	return (
		<div className='App'>
			<Header />
			<Painting />
		</div>
	);
}
