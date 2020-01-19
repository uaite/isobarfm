import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  flex: ${props => props.flex};
  flex-flow: ${props => props.flow};
  align-items: ${props => props.alignItems};
  justify-content: ${props => props.justifyContent};
`;

Flex.displayName = 'Flex';

export default Flex;
