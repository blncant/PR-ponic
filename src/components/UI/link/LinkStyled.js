import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerLinkStyled = styled.div``;

export const StyledLink = styled(Link)`
	padding: 0.8rem 1.5rem;
	outline: none;
	border: none;
	background: var(--btn-gradient);
	text-transform: uppercase;
	font-weight: 400;
	cursor: pointer;
	z-index: 2;

	& span {
		font-weight: 700;
		font-size: 1rem;
		background: var(--btn-gradient);
		background-clip: text;
		-webkit-background-clip: text;
		color: white;
	}
`;
