import React from 'react';
import styled from 'styled-components';
import { data } from '../data';
import { device } from './art';
import { Lamps } from './lamps';

const Ul = styled.ul`
	padding: 0;
`;
const LiPainting = styled.li`
	list-style: none;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	margin-top: 100px;
	align-items: flex-start;
	@media screen and ${device.tablet} {
		align-items: flex-start;
	}
	@media screen and ${device.medium} {
		flex-direction: column;
	}
`;
export const H1 = styled.h1`
	text-transform: uppercase;
	font-style: italic;
	font-family: 'Raleway', sans-serif;
	color: #5a5a5a;
	margin: 0 30px;
`;
export const Designs = () => {
	const series = data.design.series;
	const lamps = data.design.lamps;
	const sketches = data.design.sketches;

	return (
		<>
			<Ul>
				<LiPainting>
					<H1>{series[0].serie}</H1>
					<Lamps lamps={lamps} />
				</LiPainting>
				<H1>{series[1].serie}</H1>
				{sketches.map((sketch) => {
					return (
						<LiPainting>
							<img src={sketch.image} alt={sketch.id} />
						</LiPainting>
					);
				})}
			</Ul>
		</>
	);
};
