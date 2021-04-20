import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: var(--medium);
  right: var(--medium);
  z-index: 1100;
  color: var(--highlight);
  cursor: pointer;

  svg {
    transition: color 0.3s;
  }

  &:hover {
    svg {
      color: var(--secondary);
    }
  }
`;
