import styled from 'styled-components';
import { media } from 'utils';

export const StyledHeaderName = styled.span`
  display: none;
  margin: 0 15px;
  font-size: 19px;
  white-space: nowrap;
  color: var(--text-primary);
  font-family: var(--font-display);
  font-weight: 600;
  letter-spacing: -0.02em;

  ${media.tablet`
    display: ${({ open }) => (open ? 'inline-block' : 'none')};
  `}

  ${media.desktop`
    display: inline-block;
  `}
`;
