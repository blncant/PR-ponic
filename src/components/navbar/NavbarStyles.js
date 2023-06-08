import styled, { css } from "styled-components";

export const NavbarContainerStyled = styled.header`
	background-color: var(--bg-header);
	box-shadow: rgba(149, 157, 165, 0.5) 0px 8px 24px;
	width: 100%;
	/* max-width: 1300px; */
	margin: 0 auto;
	min-height: 4em;
	padding: 1rem 4rem;

	position: fixed;
	z-index: 100;
	top: 0;
	right: 0;
	left: 0;

	margin-right: auto;
	margin-left: auto;
	display: flex;
	align-items: center;
	justify-content: space-between;

	/* @media (min-width: 40em) {
		padding: 0 60px;
	} */

	@media (max-width: 768px) {
		padding: 1rem 2rem;
	}
`;

export const Logo = styled.img`
	height: 40px;
`;

export const LinksContainerStyled = styled.nav`
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 40px;

	svg {
		font-size: 25px;
		display: block;
		color: white;
		cursor: pointer;
	}

	a {
		padding: 1rem 1.5 rem;
		font-size: 14px;
		color: white;
		text-transform: uppercase;
		letter-spacing: 0.1rem;
		text-shadow: 1px 1px 5px var(--color-green-dark);
	}
`;

// Para que sirve?
export const LinkContainerStyled = styled.div`
	font-size: 1.2rem;
	color: ${(props) => (props.home ? "#ff9d01" : "#ff9300")};
`;

export const UserContainerStyled = styled(LinkContainerStyled)`
	display: flex;
	align-items: center;
`;

export const NavItemStyled = styled(LinkContainerStyled)`
	display: flex;
	align-items: center;
	gap: 30px;

	@media (max-width: 768px) {
		display: none;
	}
`;

// OVERLAY
export const ModalOverlayStyled = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 50;
	width: calc(100vw - 450px);
	height: 100vh;

	${({ isHidden }) =>
		!isHidden &&
		css`
			backdrop-filter: blur(4px);
		`}
`;

// NOMBRE USUARIO
export const UserNavStyled = styled.div`
	gap: 15px;
	cursor: pointer;

	span {
		color: white;
		font-size: 1rem;
		margin-right: 20px;
	}
`;

// CART + BUBBLE
export const CartNavStyled = styled.div`
	position: relative;
	cursor: pointer;

	span {
		position: absolute;
		top: 0;
		margin-left: 15px;

		height: 20px;
		width: 20px;
		text-align: center;

		border-radius: 1rem;
		border: 1px solid white;
		color: white;
		background-color: var(--color-green-dark);
		font-size: 0.9rem;
	}
`;
