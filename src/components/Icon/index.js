import styled from 'styled-components';

const Icon = styled.img`
  margin: 5px;
  width: 30px;
`;

Icon.displayName = 'Icon';

export const ClickableIcon = styled(Icon).attrs(props => ({
  className: 'clickable',
}))`
  cursor: pointer;
`;

export default Icon;
