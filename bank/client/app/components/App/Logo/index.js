/**
 *
 * Sidebar
 *
 */

import React from 'react';
import logo from 'images/logo.png';
import { StyledLogo } from './styles';

export default function Logo() {
  return (
    <StyledLogo>
      <span style={{ 
        fontFamily: "'Bricolage Grotesque', sans-serif", 
        fontSize: '24px', 
        fontWeight: '600', 
        letterSpacing: '-0.08em', 
        color: 'white',
        textTransform: 'uppercase'
      }}>
        STELAR<span style={{ color: 'var(--accent-color)' }}>BANK</span>
      </span>
    </StyledLogo>
  );
}
