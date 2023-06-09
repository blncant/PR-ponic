import styled from "styled-components";
import { Form as FormikForm } from "formik";

export const ForgotContainerStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 30px;
	margin-top: 20px;
	height: calc(100vh - 400px);
	color: white;
`;

export const Form = styled(FormikForm)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 2rem;
	gap: 20px;

	button {
		display: flex;
		align-items: center;
	}
`;

export const ForgotEmailStyled = styled.p`
	color: var(--orange);
	cursor: pointer;
	padding: 20px 0;

	:hover {
		text-decoration: underline;
		transition: all 0.25s ease-out;
	}
`;
