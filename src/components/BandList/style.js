import styled from 'styled-components';

export const BandListWrapper = styled.div`
  padding: 5vmin;
  max-width: 100vw;
`;

export const BandListContainer = styled(BandListWrapper)`
  background-color: ${props => props.theme.bg};
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 5px;
`;

// ::after {
//   content: '';
//   flex: auto;
// }
