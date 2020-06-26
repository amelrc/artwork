import React from 'react';
// import styled from 'styled-components';
import { data } from '../data';
// import { Img, Li } from './art';
import { Lamps } from './lamps';
import { Ul, LiPainting, H1, PWrapper, P } from './Painting';

export const Designs = () => {
	const series = data.design.series;
	const lamps = data.design.lamps;
	// const sketches = data.design.sketches;

	return (
		<>
			<Ul>
				<LiPainting>
					<H1>{series[0].serie}</H1>
					<PWrapper>
						<P>{series[0].text}</P>
					</PWrapper>
					<Lamps lamps={lamps} />
				</LiPainting>
				{/* <H1>{series[1].serie}</H1>
				<div>
					{sketches.map((sketch) => {
						return (
							<Li>
								<LiPainting>
									<Img src={sketch.image} alt={sketch.id} />
								</LiPainting>
							</Li>
						);
					})}
				</div> */}
			</Ul>
		</>
	);
};
