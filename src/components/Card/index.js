import styled from 'styled-components';
import hexToRGBA from '../../utils/hex2rgba';

const Card = styled.div`
  background-color: ${props => props.theme.white};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 5px;
  background-image: linear-gradient(
      to bottom,
      ${props => hexToRGBA(props.theme.tertiary, 0.1)},
      ${props => hexToRGBA(props.theme.tertiary, 0)} 90%
    ),
    url(${props => props.image}), url(${props => props.fallback});
  background-size: contain;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.3s;
  padding: 5px;
  width: 40vw;
  height: 40vw;
  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.3);

  > h1 {
    font-size: 2em;
    color: ${props => props.theme.black};
    margin: 0.1em;
  }

  > h2 {
    font-size: 1.6em;
    color: ${props => props.theme.black};
    margin: 0 0.1em 0.1em;
  }

  .icon {
    width: 0.8em;
    height: 0.8em;
    margin: 0 0.2em;
  }

  :hover {
    filter: brightness(0.8);
  }

  :active {
    filter: brightness(0.6);
  }

  @media (min-width: 768px) {
    width: 25vw;
    height: 25vw;
  }

  @media (min-width: 1024px) {
    width: 20vw;
    height: 20vw;
  }
`;

Card.displayName = 'Card';

export default Card;
