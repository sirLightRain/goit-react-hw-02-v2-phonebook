import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;

  width: 600px;
  padding: 32px;

  background-color: ${props => props.theme.colors.blue};
`;
