import React from 'react';
import { Li, Img, Ficha, H3, H5, P, Bought, Buy, Title } from './inedito';

export const Sunya = (sunya) => {
	const { id, image, name, technique, sold, overview, size } = sunya.sunya;
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
