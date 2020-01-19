import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.bg};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em 1em;
`;
