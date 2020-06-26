import React from 'react';
// import styled from 'styled-components';
import { data } from '../data';
// import { device } from './art';
import { Untitled } from './untitled';
import { Ul, LiPainting, H1, P, PWrapper } from './Painting';

export const Drawing = () => {
	const series = data.drawing.series;
	const untitled = data.drawing.untitled;

	return (
		<>
			<Ul>
				<LiPainting>
					<H1>{series[0].serie}</H1>
					<PWrapper>
						<P>{series[0].text}</P>
					</PWrapper>
					<Untitled untitled={untitled} />
				</LiPainting>
			</Ul>
		</>
	);
};
