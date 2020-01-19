import styled from 'styled-components';
import px2vw from '../../utils/px2vw';

export const BandContainer = styled.div`
  background-color: ${props => props.theme.white};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 5px;
  background-image: linear-gradient(
      to top,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0) 70%
    ),
    url(${props => props.image}), url(${props => props.fallback});
  background-size: contain;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.3s;
  padding: 5px;
  width: 50vw;
  height: 50vw;

  > p {
    font-size: 1.4em;
    color: ${props => props.theme.black};
    margin: 3px;
  }

  :hover {
    filter: brightness(0.6);
  }

  @media (min-width: 768px) {
    width: 30vw;
    height: 30vw;
  }

  @media (min-width: 1024px) {
    width: 20vw;
    height: 20vw;
  }
`;
