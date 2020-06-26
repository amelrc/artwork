import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import IconEmail from '../images/correo.svg';
import { H1 } from './Painting';

const FooterWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	background-color: transparent;
	height: 70px;
	position: fixed;
	bottom: 0;
	align-items: center;
	opacity: ${({ open }) => (open ? '0' : '1')};
`;

const Bio = styled(H1)`
	font-style: normal;
	color: #fff332;
	cursor: pointer;
	&:hover {
		margin-right: 35px;
		text-shadow: 3px 0px 0 #8bc63f;
	}
`;

const Email = styled.div`
	width: 30px;
	margin: 0 30px;
	background-color: transparent;
	padding: 16px;
	cursor: pointer;
	&:hover {
		background-color: #8bc63f;
		padding: 16px;
		border-radius: 60px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

const Img = styled.img`
	width: 30px;
	&: hover {
		width: 30px;
	}
`;

export const Footer = (props) => {
	const { open, setOpen } = props;
	return (
		<>
			<FooterWrapper open={open}>
				<Email>
					<Img src={IconEmail} />
				</Email>
				<NavLink style={{ textDecoration: 'none' }} to='/bio'>
					<Bio>bio</Bio>
				</NavLink>
			</FooterWrapper>
		</>
	);
};
