import React from 'react';
import styled from 'styled-components';
import { device } from './art';
import full from '../images/ac-full-logo.png';

export const HomeText = styled.div`
	margin: 120px auto;
	font-size: 1.5em;
	width: 70%;
	@media screen and ${device.tablet} {
		font-size: 2em;
	}
`;

export const Home = () => {
	return (
		<>
			<HomeText>
				I am Amel Caballero, artist, designer and web developer; traversing
				between oil and pixel while exploring human behaviour and the mind.
			</HomeText>

			<HomeText style={{ margin: '-90px auto 120px auto' }}>
				I perceive the actions of feeling - the connection feelings have with
				how we behave … the moment of that feeling - in a pictorial format. Why
				do we do what we do? And why do we do it in any specific manner?
				Precisely because we cannot observe the mind directly, and understand
				everything we do, think, feel or say; it is these instances I
				illustrate.
			</HomeText>

			<img
				style={{ width: '50%', display: 'flex', margin: '0px auto 70px auto' }}
				src={full}
				alt='full logo'
			/>
		</>
	);
};
