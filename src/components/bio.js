import React from 'react';
import styled from 'styled-components';
import { data } from '../data';
import { Ul, LiPainting, H1, P, PWrapper } from './Painting';
import { Ficha, Title, H3, H5 } from './art';
import { HomeText } from './home';

const PBio = styled(P)`
	width: 100%;
	font-style: normal;
	font-size: 1.5em;
	line-height: 1.5em;
`;
const Exhibitions = styled(Ul)`
	padding: 20px 0;
	border-bottom: 1px solid gray;
`;
export const Bio = () => {
	const biografia = data.bio;
	const exhibitions = data.bio.exhibitions;
	return (
		<>
			<HomeText style={{ fontSize: '1em' }}>
				<PBio>{biografia.about}</PBio>
				<H1 style={{ marginTop: '70px' }}>Exhibitions</H1>
				{exhibitions.map((exh) => {
					return (
						<Exhibitions>
							<Ficha>
								<Title>
									<H3>{exh.title}</H3>
								</Title>
								<H5>{exh.year}</H5>
								<H5>{exh.location}</H5>
							</Ficha>
						</Exhibitions>
					);
				})}
			</HomeText>
		</>
	);
};
