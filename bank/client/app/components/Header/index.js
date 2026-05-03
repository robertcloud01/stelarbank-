/**
 *
 * Header
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import icon from 'images/icon.png';
import logo from 'images/logo.png';
import { StyledHeader, StyledImg } from './styles';

export default function Header() {
  return (
    <StyledHeader>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <span style={{ 
          fontFamily: "'Bricolage Grotesque', sans-serif", 
          fontSize: '24px', 
          fontWeight: '600', 
          letterSpacing: '-0.08em', 
          color: 'white',
          textTransform: 'uppercase'
        }}>
          STELAR<span style={{ color: '#a3e635' }}>BANK</span>
        </span>
      </Link>
    </StyledHeader>
  );
}
