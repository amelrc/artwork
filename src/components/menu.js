import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledMenu = styled.nav`
	font-family: 'Raleway', sans-serif;
	background-color: white;
	height: 100vh;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	display: ${({ open }) => (open ? 'flex' : 'initial')};
	visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
	transition: visibility;
`;
const Links = styled(NavLink)`
	font-size: 2rem;
	text-transform: uppercase;
	padding: 0.2em;
	font-weight: bold;
	letter-spacing: 0.5rem;
	color: #fff332;
	text-decoration: none;
	transform: ${({ open }) => (open ? 'translateY(0%)' : 'translateY(-100%)')};
	transition: color 0.5s linear, transform 0.5s;
	@media (max-width: 576px) {
		font-size: 1.5rem;
		text-align: center;
	}
	&:hover {
		color: #8bc63f;
	}
`;

export const Menu = ({ open, setOpen }) => {
	const handleClick = () => setOpen(!open);

	return (
		<StyledMenu open={open}>
			<Links open={open} onClick={handleClick} to='/paintings'>
				painting
			</Links>
			<Links open={open} onClick={handleClick} to='/drawings'>
				drawing
			</Links>
			<Links open={open} onClick={handleClick} to='/cutpapers'>
				cutpaper
			</Links>
			<Links open={open} onClick={handleClick} to='/designs'>
				design
			</Links>
		</StyledMenu>
	);
};
