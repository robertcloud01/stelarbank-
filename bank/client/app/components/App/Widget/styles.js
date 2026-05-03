import styled from 'styled-components';
import { typography } from 'utils';

export const StyledWidget = styled.section`
  height: 96px;
  background-color: var(--surface-color);
  border: 1px solid #18181b;
  padding: 16px 24px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 12px;
`;

export const StyledWidgetContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: ${({ centered }) => (centered ? 'baseline' : 'center')};
  height: 100%;
  width: 100%;
`;

export const StyledWidgetContentTypography = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.4;
  width: 100%;
`;

export const StyledWidgetContentTypographyHeader = styled.div`
  font-family: var(--font-display);
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-secondary);
  margin-bottom: 4px;
`;

export const StyledWidgetContentTypographyMain = styled.div`
  font-family: var(--font-display);
  font-size: 28px;
  font-weight: 600;
  color: var(--text-primary);
`;

export const StyledWidgetContentTypographyMainUnit = styled.span`
  font-size: 16px;
  margin-left: 5px;
  font-weight: 400;
  color: var(--text-secondary);
`;

export const StyledWidgetContentDescription = styled.div`
  font-size: 14px;
`;

export const StyledWidgetContentWidget = styled.div`
  width: 100%;
  max-width: 74px;
  display: flex;

  .recharts-wrapper {
    width: 100% !important;
    position: relative;
  }

  svg {
    width: 100%;
    height: 100%;

    &.recharts-surface {
      max-width: 74px;
      position: absolute;
      right: -6px;
    }

    max-width: 74px;
  }
`;
