import React from 'react';
import styled from 'styled-components';
import Logo from '../images/AC-logo.png';
import { Burger, Menu } from './menu';

const AClogo = styled.img`
	width: 100px;
`;
export const Header = () => {
	const [open, setOpen] = React.useState(false);
	const node = React.useRef();

	return (
		<>
			<AClogo src={Logo} alt='logo' />
			<div ref={node}>
				<Burger open={open} setOpen={setOpen} />
				<Menu open={open} setOpen={setOpen} />
			</div>
		</>
	);
};
