import styled from 'styled-components';

export const SearchContainer = styled.div`
  background-color: ${props => props.theme.bg};
  display: flex;
  align-items: stretch;
  justify-content: center;

  button {
    padding: 10px 12px;
    margin: 0 4px;
  }
`;

export const SearchInput = styled.input`
  background-image: url(${props => props.icon});
  background-position: calc(100% - 5px);
  background-repeat: no-repeat;
  background-size: 1em;
  border: 0;
  box-shadow: inset 1px 1px 3px 0px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  padding: 7px 24px 7px 7px;
  width: 40vw;
  transition: .3s

  :focus {
    width: 50vw;
  }

  @media (min-width: 768px) {
    width: 15vw;

    :focus {
      width: 20vw;
    }
  }
`;
