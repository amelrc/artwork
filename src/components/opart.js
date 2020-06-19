import React from 'react';
import { Art } from './art';

export const OpArt = (props) => {
	return (
		<>
			{props.opart.map((art) => (
				<Art
					key={art.id}
					id={art.id}
					image={art.image}
					name={art.title}
					technique={art.technique}
					sold={art.sold}
					overview={art.overview}
					size={art.size}
				/>
			))}
		</>
	);
};
