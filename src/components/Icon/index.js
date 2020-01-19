import styled from 'styled-components';

const Icon = styled.img`
  margin: 5px;
  width: 30px;
`;

Icon.displayName = 'Icon';

export const ClickableIcon = styled(Icon)`
  cursor: pointer;
  :hover {
    filter: brightness(-5%);
  }
`;

export default Icon;
