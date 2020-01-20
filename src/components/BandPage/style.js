import styled from 'styled-components';
import { CardListContainer } from '../Card';

export const BandHeader = styled.div`
  background-color: ${props => props.theme.accent};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  width: 100vw;
  height: 30vh;

  ::before {
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url(${props => props.image}),
      url(${props => props.fallback});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    filter: blur(2px) brightness(0.5);
  }

  @media (min-width: 1024px) {
    height: 40vh;
  }

  > * {
    position: relative;
  }

  h1 {
    font-weight: 700;
    font-size: 6em;
    color: ${props => props.theme.bg};
    margin: 0.2em;

    @media (min-width: 1024px) {
      font-size: 4em;
    }
  }

  h2 {
    font-weight: 400;
    font-size: 1.6em;
    color: ${props => props.theme.primary};
    text-transform: uppercase;

    @media (min-width: 1024px) {
      font-size: 1.2em;
    }
  }
`;
BandHeader.displayName = 'BandHeader';

export const BlurredImage = styled.img``;

export const BandContent = styled.div`
  padding: 3vh 5vw;
  font-size: 1.6em;
  line-height: 1.2em;

  @media (min-width: 1024px) {
    font-size: 1.2em;
  }
`;
BandContent.displayName = 'BandContent';

export const AlbumListContainer = styled.div`
  padding: 3vh 5vw;
  h1 {
    font-size: 1.6em;
    color: ${props => props.theme.black};
  }
`;
AlbumListContainer.displayName = 'AlbumListContainer';

export const AlbumList = styled(CardListContainer)`
  padding: 0;
`;
AlbumList.displayName = 'AlbumList';
