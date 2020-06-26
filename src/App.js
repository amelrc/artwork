import React from 'react';
import './styles.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Painting } from './components/Painting';
import { Header } from './components/header';
import { Drawing } from './components/Drawing';
import { Cutpaper } from './components/Cutpaper';
import { Designs } from './components/Design';
import { Bio } from './components/bio';
import { Footer } from './components/footer';
// import { Home } from './components/home';
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
		<BrowserRouter>
			<div className='App'>
				<Header open={open} setOpen={setOpen} />
				<div style={{ display: open ? 'none' : 'block' }}>
					<Route path='/paintings' component={Painting} />
					<Route path='/drawings' component={Drawing} />
					<Route path='/cutpapers' component={Cutpaper} />
					<Route path='/designs' component={Designs} />
					<Route path='/bio' component={Bio} />
					{/* <Route path='/home' component={Home} /> */}
					<HomeText>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
						consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat.
					</HomeText>
				</div>
				<Footer open={open} setOpen={setOpen} />
			</div>
		</BrowserRouter>
	);
}
