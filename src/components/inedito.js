import React from 'react';
import styled from 'styled-components';

export const device = {
	tablet: `(min-width: 768px)`,
	small: `(min-width: 1024px)`,
	medium: `(min-width: 1366px)`,
	large: `(min-width: 1920px)`,
};

export const Li = styled.li`
	list-style: none;
	display: flex;
	flex-direction: column;
	margin: 30px;
	@media screen and ${device.tablet} {
		align-items: center;
	}
	@media screen and ${device.small} {
		flex-direction: row;
		width: 80%;
		margin: 50px auto;
		align-items: flex-end;
	}
`;
export const Img = styled.img`
	width: 100%;
	@media screen and ${device.tablet} {
		width: 70%;
	}
	@media screen and ${device.small} {
		width: 60%;
	}
	@media screen and ${device.medium} {
		width: 50%;
	}
`;
export const Ficha = styled.div`
	text-align: left;
	@media screen and ${device.tablet} {
		width: 70%;
	}
	@media screen and ${device.small} {
		margin-left: 30px;
	}
	@media screen and ${device.large} {
		margin-left: 40px;
	}
`;
export const Title = styled.div`
	display: flex;
	align-items: baseline;
`;
export const H3 = styled.h3`
	font-size: 1.1em;
	margin: 0.3em 0;
	font-weight: lighter;
	color: #5a5a5a;
	font-style: italic;
`;
export const H5 = styled.h5`
	font-family: 'Raleway', sans-serif;
	margin: 0;
	color: dimgray;
`;
export const P = styled.p`
	color: dimgray;
	margin: 6px auto;
`;

export const Bought = styled.div`
	width: 10px;
	height: 10px;
	background-color: tomato;
	border-radius: 20px;
	margin: 0 4px 0 -16px;
	:hover {
		content: 'sold';
	}
`;

export const Buy = styled(Bought)`
	background-color: limegreen;
`;

export const Inedito = (inedito) => {
	const { id, image, name, technique, sold, overview, size } = inedito.inedito;
	const available = sold ? <Bought></Bought> : <Buy></Buy>;

	return (
		<>
			<Li>
				<Img src={image} alt={id} />
				<Ficha>
					<Title>
						{available}
						<H3>'{name}'</H3>
					</Title>
					<H5>In progress</H5>
					<H5>{technique}</H5>
					<H5>{size}</H5>
					<P>{overview}</P>
				</Ficha>
			</Li>
		</>
	);
};
