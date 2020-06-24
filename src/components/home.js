import React from 'react';
import styled from 'styled-components';
import { device } from './art';

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
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
				elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
				ut aliquip ex ea commodo consequat.
			</HomeText>
		</>
	);
};
