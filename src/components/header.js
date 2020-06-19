import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../images/AC-logo.png';
import { Menu } from './menu';
import { Burger } from './burger';

const AClogo = styled.img`
	width: 100px;
	position: absolute;
	top: 1em;
	left: 2rem;
	cursor: pointer;
	background-color: red;
`;
const HeaderWrapper = styled.div`
	background-color: white;
	height: 100px;
	width: 100%;
	position: fixed;
	top: 0;
`;
export const Header = () => {
	const [open, setOpen] = React.useState(false);
	const node = React.useRef();
	return (
		<>
			<HeaderWrapper>
				<Link to='/'>
					<AClogo src={Logo} alt='logo' />
				</Link>
				<div ref={node}>
					<Burger open={open} setOpen={setOpen} />
					<Menu open={open} setOpen={setOpen} />
				</div>
			</HeaderWrapper>
		</>
	);
};
