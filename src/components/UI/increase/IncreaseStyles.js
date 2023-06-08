import styled from "styled-components";

export const IncreaseStyled = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 30px;
	height: 30px;
	background: var(--color-green-dark);
	border: none;
	border-radius: 15px;
	font-size: 1.1rem;
	font-weight: 800;
	color: white;
	cursor: pointer;

	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
`;
