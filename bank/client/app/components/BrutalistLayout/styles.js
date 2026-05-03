import styled from 'styled-components';

export const BrutalistContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: var(--bg-color);
  color: var(--text-primary);
  font-family: var(--font-ui);
`;

export const LeftPanel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px;
  position: relative;

  @media (max-width: 992px) {
    display: none;
  }
`;

export const RightPanel = styled.div`
  flex: 1;
  background-color: rgba(9, 9, 11, 0.5); /* zinc-950/50 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px;
  border-left: 1px solid rgba(39, 39, 42, 0.5); /* zinc-900/50 */
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom right, rgba(163, 230, 53, 0.05), transparent);
    pointer-events: none;
  }
`;

export const HeroTitle = styled.h1`
  font-family: var(--font-display);
  font-size: 88px;
  line-height: 0.9;
  text-transform: uppercase;
  margin-bottom: 40px;
  color: white;
  
  .accent {
    color: var(--accent-color);
  }
`;

export const DescriptionBox = styled.div`
  border-left: 4px solid var(--accent-color);
  padding-left: 20px;
  margin-bottom: 40px;
  font-size: 18px;
  max-width: 450px;
  color: var(--text-secondary);
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 64px;
`;

export const BrutalistButton = styled.button`
  font-family: var(--font-ui);
  font-size: 16px;
  font-weight: 500;
  padding: 14px 32px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px;

  ${({ variant }) => variant === 'filled' ? `
    background-color: var(--accent-color);
    color: #09090b;
    box-shadow: 0 0 20px rgba(163, 230, 53, 0.15);
    border: none;
    &:hover { background-color: #bef264; }
  ` : `
    background-color: transparent;
    color: #e4e4e7;
    border: 1px solid #27272a;
    &:hover { background-color: #18181b; }
  `}
`;

export const StatsGrid = styled.div`
  display: flex;
  gap: 80px;
`;

export const StatItem = styled.div`
  .value {
    font-family: var(--font-display);
    font-size: 36px;
    font-weight: 600;
    color: var(--accent-color);
    display: block;
    margin-bottom: 8px;
  }
  .label {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.1em;
    color: #71717a;
  }
`;

export const NavHeader = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 48px;
  z-index: 50;
  border-bottom: 1px solid rgba(39, 39, 42, 0.5);
`;

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  
  .brand {
    font-family: var(--font-display);
    font-size: 28px;
    font-weight: 600;
    letter-spacing: -0.08em;
    text-transform: uppercase;
    color: white;

    span {
      color: var(--accent-color);
    }
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;

  a {
    color: var(--text-secondary);
    font-weight: 500;
    font-size: 16px;
    transition: color 0.2s;
    &:hover { color: white; }
  }

  .cta {
    border: 1px solid #27272a;
    color: white;
    padding: 10px 20px;
    border-radius: 8px;
    &:hover {
      border-color: rgba(163, 230, 53, 0.5);
      background-color: #18181b;
    }
  }
`;

export const BrutalistFormTitle = styled.h2`
  font-family: var(--font-display);
  font-size: 36px;
  font-weight: 600;
  color: white;
  margin-bottom: 40px;
  letter-spacing: -0.02em;
  
  span.accent {
    color: var(--accent-color);
  }
`;
