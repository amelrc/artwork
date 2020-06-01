import React from 'react';
import styled from 'styled-components';
import { data } from '../data';
import { Inedito, Li, device } from './inedito';
import { Bw } from './bw';
import { Sunya } from './sunya';

const Ul = styled.ul`
	padding: 0;
`;
const LiPainting = styled(Li)`
	margin: 0 auto;
	margin-top: 100px;
	flex-direction: column;
	align-items: flex-start;
	@media screen and ${device.tablet} {
		align-items: flex-start;
	}
`;
export const H1 = styled.h1`
	text-transform: uppercase;
	font-style: italic;
	font-family: 'Raleway', sans-serif;
	color: #5a5a5a;
	margin: 0 30px;
`;
export const Painting = () => {
	const series = data.painting.series;
	const inedito = data.painting.inedito;
	const bw = data.painting.bw;
	const sunya = data.painting.sunya;
	return (
		<>
			<Ul>
				<LiPainting>
					<H1>{series[0].serie}</H1>
					<Inedito inedito={inedito} />
				</LiPainting>
				<LiPainting>
					<H1>{series[1].serie}</H1>
					<Bw bw={bw} />
				</LiPainting>
				<LiPainting>
					<H1>{series[2].serie}</H1>
					<Sunya sunya={sunya} />
				</LiPainting>
			</Ul>
		</>
	);
};
