import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledMenu = styled.nav`
	background-color: white;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-family: 'Raleway', sans-serif;
	transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
	// text-align: left;
	top: 0;
	right: 0;
	transition: transform 0.3s ease-in-out;
`;
const Links = styled(NavLink)`
	font-size: 2rem;
	text-transform: uppercase;
	padding: 0.2em;
	font-weight: bold;
	letter-spacing: 0.5rem;
	color: #fff332;
	text-decoration: none;
	transition: color 0.5s linear;
	@media (max-width: 576px) {
		font-size: 1.5rem;
		text-align: center;
	}
	&:hover {
		color: #8bc63f;
	}
`;

export const Menu = ({ open, setOpen }) => {
	return (
		<StyledMenu open={open}>
			<Links open={open} onClick={() => setOpen(!open)} to='/paintings'>
				painting
			</Links>
			<Links open={open} onClick={() => setOpen(!open)} to='/drawings'>
				drawing
			</Links>
			<Links open={open} onClick={() => setOpen(!open)} to='/cutpapers'>
				cutpaper
			</Links>
			<Links open={open} onClick={() => setOpen(!open)} to='/designs'>
				design
			</Links>
		</StyledMenu>
	);
};

const useOnClickOutside = (ref, handler) => {
	React.useEffect(() => {
		const listener = (event) => {
			if (!ref.current || ref.current.contains(event.target)) {
				return;
			}
			handler(event);
		};
		document.addEventListener('mousedown', listener);

		return () => {
			document.removeEventListener('mousedown', listener);
		};
	}, [ref, handler]);
};
