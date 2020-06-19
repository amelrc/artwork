import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 90%;
`;
export const Footer = () => {
	return (
		<>
			<FooterWrapper>
				<div>contact detais</div>
				<div>bio</div>
			</FooterWrapper>
		</>
	);
};
