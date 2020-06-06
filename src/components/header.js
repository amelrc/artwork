import React from 'react';
import styled from 'styled-components';
import Logo from '../images/AC-logo.png';

const AClogo = styled.img`
	width: 100px;
`;
export const Header = () => {
	return (
		<>
			<AClogo src={Logo} alt='logo' />
			<div>menu</div>
		</>
	);
};
