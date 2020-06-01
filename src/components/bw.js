import React from 'react';
import { Li, Img, Ficha, H3, H5, P, Bought, Buy, Title } from './inedito';

export const Bw = (bw) => {
	return (
		<>
			{bw.bw.map((art) => {
				const available = art.sold ? <Bought></Bought> : <Buy></Buy>;
				return (
					<Li key={art.id}>
						<Img src={art.image} alt={art.id} />
						<Ficha>
							<Title>
								{available}
								<H3>{art.name}</H3>
							</Title>
							<H5>{art.technique}</H5>
							<H5>{art.size}</H5>
							<P>{art.overview}</P>
						</Ficha>
					</Li>
				);
			})}
		</>
	);
};
