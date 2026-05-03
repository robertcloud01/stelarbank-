import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from 'components/Header';
import Subheader from 'components/Subheader';
import Footer from 'components/Footer';
import Information from 'components/Information';
import RedirectToggle from 'components/RedirectToggle';
import { routes } from 'utils';
import {
  BrutalistContainer,
  LeftPanel,
  RightPanel,
  HeroTitle,
  DescriptionBox,
  ButtonGroup,
  BrutalistButton,
  StatsGrid,
  StatItem,
  NavHeader,
  LogoBox,
  NavLinks,
  BrutalistFormTitle
} from './styles';

export default function BrutalistLayout({ children, title, subtitle, heroTitleLines }) {
  const history = useHistory();

  return (
    <>
      <NavHeader>
        <LogoBox>
          <Link to={routes.home.path} className="brand" style={{ color: 'white', textDecoration: 'none' }}>
            STELAR<span style={{ color: 'var(--accent-color)' }}>BANK</span>
          </Link>
        </LogoBox>
        <NavLinks>
          <Link to={routes.register.path}>Serviços</Link>
          <Link to={routes.register.path}>Segurança</Link>
          <div className="brutalist-locale">
            <Subheader pageTitle="" />
          </div>
          <Link to={routes.register.path} className="cta">Criar Conta</Link>
        </NavLinks>
      </NavHeader>

      <BrutalistContainer>
        <LeftPanel>
          <HeroTitle>
            {heroTitleLines[0]}<br/>
            <span className="accent">{heroTitleLines[1]}</span><br/>
            {heroTitleLines[2]}
          </HeroTitle>
          <DescriptionBox>
            O futuro do seu capital começa aqui. Tecnologia brutalista para um mercado sem fronteiras. Segurança de grau militar, interface sem distrações.
          </DescriptionBox>
          <ButtonGroup>
            <BrutalistButton variant="filled" onClick={() => history.push(routes.register.path)}>
              Começar Agora
              <iconify-icon icon="solar:arrow-right-linear" width="20" height="20"></iconify-icon>
            </BrutalistButton>
            <BrutalistButton variant="ghost" onClick={() => history.push(routes.privacy.path)}>
              Saiba Mais
            </BrutalistButton>
          </ButtonGroup>
          <StatsGrid>
            <StatItem>
              <span className="value">10X</span>
              <span className="label">Mais Rápido</span>
            </StatItem>
            <StatItem>
              <span className="value">30%</span>
              <span className="label">Menor Taxa</span>
            </StatItem>
          </StatsGrid>
        </LeftPanel>

        <RightPanel>
          <div style={{ width: '100%', maxWidth: '440px', zIndex: 20, position: 'relative' }}>
            <div style={{ textTransform: 'uppercase', color: 'var(--accent-color)', fontWeight: 600, letterSpacing: '0.1em', fontSize: '12px', marginBottom: '12px' }}>
              {subtitle}
            </div>
            <BrutalistFormTitle>
              {title}
            </BrutalistFormTitle>
            
            {children}

            <div className="brutalist-redirect">
              <RedirectToggle />
            </div>
          </div>
        </RightPanel>
      </BrutalistContainer>

      <style>{`
        header, footer, .subheader, .information { display: none !important; }
        
        .brutalist-locale {
            display: flex;
            align-items: center;
        }
        .brutalist-locale header, .brutalist-locale .subheader, .brutalist-locale div[class*="StyledSubheader"] { 
          display: flex !important; 
          background: transparent !important;
          border: none !important;
          padding: 0 !important;
          margin: 0 !important;
          box-shadow: none !important;
          height: auto !important;
          line-height: normal !important;
        }
        .brutalist-locale .ant-select {
            width: 80px !important;
        }
        .brutalist-locale .ant-select-selector {
          background: transparent !important;
          border: 1px solid #27272a !important;
          color: #a1a1aa !important;
          border-radius: 8px !important;
          height: 36px !important;
          display: flex !important;
          align-items: center !important;
        }
        .brutalist-locale .ant-select-selection-item {
          color: #fafafa !important;
          font-weight: 500;
          font-size: 14px;
        }
        .brutalist-locale .ant-select-arrow {
            color: #71717a;
        }

        .brutalist-redirect {
          margin-top: 32px;
          text-align: center;
          font-size: 15px;
          color: #71717a;
        }
        .brutalist-redirect a {
          color: #fafafa !important;
          font-weight: 500;
          text-decoration: underline;
          text-underline-offset: 4px;
        }
        .brutalist-redirect a:hover {
          color: #a3e635 !important;
        }
        
        /* Form Overrides */
        .ant-form-item-label label {
          color: #a1a1aa !important;
          font-family: 'Inter', sans-serif !important;
          text-transform: uppercase;
          font-weight: 500;
          font-size: 13px !important;
          letter-spacing: 0.05em;
        }
        
        div[class*="StyledFormWrapper"] {
          background-color: transparent !important;
          box-shadow: none !important;
          text-align: left !important;
        }

        .ant-input, .ant-input-password, .ant-input-number, .ant-select-selector {
          background: rgba(24, 24, 27, 0.5) !important;
          border: 1px solid #27272a !important;
          border-radius: 8px !important;
          padding: 12px 16px !important;
          height: auto !important;
          color: #fafafa !important;
        }
        
        button[type="submit"], .ant-btn-primary {
          height: 56px !important;
          background: #a3e635 !important;
          border: none !important;
          border-radius: 8px !important;
          color: #09090b !important;
          font-family: 'Inter', sans-serif !important;
          font-weight: 500 !important;
          font-size: 16px !important;
          width: 100% !important;
          display: flex !important;
          align-items: center;
          justify-content: center;
          gap: 8px;
          position: relative;
        }

        .ant-btn-loading::before {
            display: none !important;
        }
        
        .ant-btn-loading-icon {
            color: #09090b !important;
        }

        /* Select Dropdown Fix - Forced Visibility */
        .ant-select-dropdown {
          background-color: #18181b !important;
          border: 1px solid #27272a !important;
          border-radius: 8px !important;
          padding: 4px !important;
          z-index: 99999 !important; /* Maximum priority */
          box-shadow: 0 10px 30px rgba(0,0,0,0.5) !important;
        }
        
        .ant-select-item {
          color: #e4e4e7 !important; /* zinc-200 for better visibility */
          border-radius: 4px !important;
          margin-bottom: 2px !important;
          padding: 8px 12px !important;
        }
        
        .ant-select-item-option-content {
            color: inherit !important;
        }
        
        .ant-select-item-option-active {
          background-color: rgba(255, 255, 255, 0.1) !important;
          color: white !important;
        }
        
        .ant-select-item-option-selected {
          background-color: rgba(163, 230, 53, 0.2) !important;
          color: #a3e635 !important;
          font-weight: 600 !important;
        }

        .ant-steps { display: none !important; }
      `}</style>
    </>
  );
}
