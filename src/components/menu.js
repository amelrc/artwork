import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledMenu = styled.nav`
font-family: 'Raleway',sans-serif;
	display: flex;
	flex-direction: column;
	justify-content: center;
	transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
	text-align: left;
	padding: 5em 2em;
	position: absolute;
	top: 0;
	right: 0;
	transition: transform 0.3s ease-in-out;
	@media (max-width: 576px) {
		width: 100%;
	}
}
`;
const Links = styled(Link)`
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

const StyledBurger = styled.button`
	position: absolute;
	top: 3em;
	right: 6rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 2rem;
	height: 2rem;
	background: transparent;
	border: none;
	cursor: pointer;
	padding: 0;
	z-index: 10;
	&:focus {
		outline: none;
	}
	div {
		width: 2rem;
		height: 0.25rem;
		background: #fff332;
		border-radius: 10px;
		transition: all 0.3s linear;
		position: relative;
		transform-origin: 1px;
		:first-child {
			color: red;
			transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
		}

		:nth-child(2) {
			opacity: ${({ open }) => (open ? '0' : '1')};
			transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
		}

		:nth-child(3) {
			transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
		}
	}
`;

export const Burger = ({ open, setOpen }) => {
	return (
		<StyledBurger open={open} onClick={() => setOpen(!open)}>
			<div />
			<div />
			<div />
		</StyledBurger>
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
