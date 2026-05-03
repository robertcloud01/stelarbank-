import styled from 'styled-components';
import { colors, typography } from 'utils';

export const StyledGreeting = styled.section`
  text-align: right;
  margin: 0 0 24px;
  line-height: 1.5;
  font-family: var(--font-ui);
  font-size: 13px;
  color: var(--text-secondary);
`;

export const StyledNameWrapper = styled.span`
  color: var(--accent-color);
  font-weight: 600;
`;

export const StyledLastSuccessfulLoggedDateWrapper = styled.span`
  color: var(--text-secondary);
`;

export const StyledLastFailedLoggedDate = styled.span`
  color: var(--accent-color);
  opacity: 0.8;
`;
