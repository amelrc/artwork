import React from 'react';
import styled from 'styled-components';
import { data } from '../data';
import { device } from './art';
import { OpArt } from './opart';

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
export const Cutpaper = () => {
	const series = data.cutpaper.series;
	const opart = data.cutpaper.opart;
	return (
		<>
			<ul>
				<LiPainting>
					<H1>{series[0].serie}</H1>
					<OpArt opart={opart} />
				</LiPainting>
			</ul>
		</>
	);
};
