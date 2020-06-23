import React from 'react';
import styled from 'styled-components';
import { data } from '../data';
import { device } from './art';
import { Inedito } from './inedito';
import { Bw } from './bw';
import { Sunya } from './sunya';

export const Ul = styled.ul`
	margin: auto;
	width: 90%;
	padding: 0;
	overflow: ${({ open }) => (open ? 'auto' : '')};
`;
export const LiPainting = styled.li`
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
export const PWrapper = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
`;
export const P = styled.p`
	width: 70%;
	font-style: italic;
	text-align: left;
`;
export const Painting = () => {
	const series = data.painting.series;
	const inedito = data.painting.inedito;
	const bw = data.painting.bw;
	const sunya = data.painting.sunya;

	const [open, setOpen] = React.useState(false);
	const node = React.useRef();

	return (
		<>
			<Ul ref={node} open={open} setOpen={setOpen}>
				<LiPainting>
					<H1>{series[0].serie}</H1>
					<PWrapper>
						<P>{series[0].text}</P>
					</PWrapper>
					<Inedito inedito={inedito} />
				</LiPainting>
				<LiPainting>
					<H1>{series[1].serie}</H1>
					<PWrapper>
						<P>{series[1].text}</P>
					</PWrapper>
					<Bw bw={bw} />
				</LiPainting>
				<LiPainting>
					<H1>{series[2].serie}</H1>
					<PWrapper>
						<P>{series[2].text}</P>
					</PWrapper>
					<Sunya sunya={sunya} />
				</LiPainting>
			</Ul>
		</>
	);
};
