import React from 'react';
import styled from 'styled-components';
import { data } from '../data';
import { device } from './art';
import { OpArt } from './opart';
import { Ul, LiPainting, H1, P, PWrapper } from './Painting';

export const Cutpaper = () => {
	const series = data.cutpaper.series;
	const opart = data.cutpaper.opart;
	return (
		<>
			<Ul>
				<LiPainting>
					<H1>{series[0].serie}</H1>
					<PWrapper>
						<P>{series[0].text}</P>
					</PWrapper>
					<OpArt opart={opart} />
				</LiPainting>
			</Ul>
		</>
	);
};
