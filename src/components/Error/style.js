import styled from 'styled-components';

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 25vmin;
    height: 25vmin;
  }

  p {
    margin-top: 1.2em;
    font-size: 1.4em;
    line-height: 1.2em;
    color: ${props => props.theme.black};
  }
`;
ErrorContainer.displayName = 'ErrorContainer';
