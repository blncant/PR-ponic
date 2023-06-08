import styled from "styled-components";

export const HomeWrapper = styled.main`
	width: 90vw;
	max-width: 1600px;
	padding: 2rem;
	margin: 0 auto;
	/* h2 {
		font-weight: 400;
	} */
`;

export const CategoriasWrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	max-width: 1300px;
	margin: 4rem auto;
	width: 100%;
	text-align: center;

	h2 {
		line-height: 1;
		color: var(--color-blue);
		font-size: 2rem;
		font-weight: 700px;
		margin-bottom: 20px;

		@media (min-width: 40em) {
			font-size: var(--fs-section-media);
		}
	}

	p {
		font-size: 1em;
		font-weight: 300;
		line-height: 1.5;
		color: white;

		@media (min-width: 40em) {
			font-size: var(--fs-section-text-media);
		}
	}
`;

export const ProductosWrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	max-width: 1300px;
	margin: 0 auto;
	width: 100%;
	text-align: center;
`;
