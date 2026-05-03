/**
 *
 * Footer
 *
 */

import React from 'react';
import { createStructuredSelector } from 'reselect';
import { makeSelectIsCollapsedSidebar } from 'containers/App/selectors';
import { useSelector } from 'react-redux';
import { StyledFooter } from './styles';

const stateSelector = createStructuredSelector({
  isCollapsedSidebar: makeSelectIsCollapsedSidebar(),
});

export default function Footer() {
  const { isCollapsedSidebar } = useSelector(stateSelector);

  return (
    <StyledFooter collapsed={isCollapsedSidebar}>
      <strong>Stelar Bank 3.0</strong> | {new Date().getFullYear()}
    </StyledFooter>
  );
}
