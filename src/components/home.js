import React from 'react';
import styled from 'styled-components';

export const HomeText = styled.div`
	// position: relative;
	margin: 120px auto;
	font-size: 3em;
	width: 70%;
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
