import styled from 'styled-components';
import { CardListContainer } from '../Card';

export const BandListWrapper = styled.div`
  padding: 3vh 5vw;
  p {
    font-size: 1.2em;
    color: ${props => props.theme.black};
    text-align: right;

    @media (min-width: 1024px) {
      font-size: 1em;
    }
  }
`;
BandListWrapper.displayName = 'BandListWrapper';

export const BandListContainer = styled(CardListContainer)`
  padding: 0;
`;
BandListContainer.displayName = 'BandListContainer';
