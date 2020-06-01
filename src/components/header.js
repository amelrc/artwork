import React from 'react';
import styled from 'styled-components';
import Logo from '../images/squared_logo.png';

export const Header = () => {
	return (
		<>
			<img src={Logo} alt='logo' />
			<div>menu</div>
		</>
	);
};
