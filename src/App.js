import React from 'react';
import './styles.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Painting } from './components/Painting';
import { Header } from './components/header';
import { Drawing } from './components/Drawing';
import { Cutpaper } from './components/Cutpaper';
import { Designs } from './components/Design';
import { Bio } from './components/bio';
import { Footer } from './components/footer';
import { Home } from './components/home';
import styled from 'styled-components';
import { device } from './components/art';

export const HomeText = styled.div`
	margin: 120px auto;
	font-size: 1.5em;
	width: 70%;
	@media screen and ${device.tablet} {
		font-size: 2em;
	}
`;

export default function App() {
	const [open, setOpen] = React.useState(false);
	return (
		<HashRouter>
			<div className='App'>
				<Header open={open} setOpen={setOpen} />
				<div style={{ display: open ? 'none' : 'block' }}>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/paintings' component={Painting} />
						<Route path='/drawings' component={Drawing} />
						<Route path='/cutpapers' component={Cutpaper} />
						<Route path='/designs' component={Designs} />
						<Route path='/bio' component={Bio} />
					</Switch>
					{/* <Route path='/home' component={Home} /> */}
				</div>
				<Footer open={open} setOpen={setOpen} />
			</div>
		</HashRouter>
	);
}
