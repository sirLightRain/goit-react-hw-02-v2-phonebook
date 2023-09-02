import styled from 'styled-components';
import { Form, ErrorMessage, Field } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 24px;
  padding: 0px 8px 8px 8px;

  outline: 2px solid ${props => props.theme.colors.grey};
  border-radius: 4px;
  background-color: ${props => props.theme.colors.yellow};
`;

export const StyledErrorMessage = styled(ErrorMessage)`
    margin-top: 2px;

  font-size: 14px;
  font-weight: bold;
  color: ${props => props.theme.colors.red};
`;

export const StyledField = styled(Field)`
border: none;
  padding: 0px 2px 2px 2px;

  border-radius: 4px;
`;