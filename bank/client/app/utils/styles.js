import { createGlobalStyle } from 'styled-components';
import { media } from 'utils';

const GlobalStyle = createGlobalStyle`
  :root {
    --bg-color: #09090b; /* zinc-950 */
    --accent-color: #a3e635; /* lime-400 */
    --surface-color: #09090b;
    --text-primary: #fafafa; /* zinc-50 */
    --text-secondary: #a1a1aa; /* zinc-400 */
    --font-display: 'Bricolage Grotesque', sans-serif;
    --font-ui: 'Inter', sans-serif; /* Standardizing on a cleaner UI font */
  }

  html,
  body {
    height: 100%;
    width: 100%;
    overscroll-behavior-y: none;
    background-color: var(--bg-color);
    color: var(--text-primary);
    font-family: var(--font-ui);

    &.react-draggable-transparent-selection {
      .react-draggable {
        &:not(:active) {
          opacity: 0.3;
        }
      }
    }
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }

  svg {
    vertical-align: baseline;
  }

  .ant-dropdown {
    z-index: 999;
    width: 100%;
  }

  #reset-password {
    .ant-form-item {
      &:nth-child(2) {
        padding-top: 0;
      }
    }
  }

  ${media.tablet`
    .ant-dropdown {
      max-width: 390px;
      width: 390px;
    }
  `}

  @media screen and (max-width: 768px) {
    input[type='text'],
    input[type='number'],
    input[type='password'],
    textarea {
      appearance: none;
      font-size: 16px;

      &::placeholder { 
        font-size: 14px;
      }
    }

     .ant-select {
       font-size: 16px;
       
        .ant-select-selection-placeholder {
          font-size: 14px;
        }
     }
    
    .ant-notification {
      width: 100%;

      &.ant-notification-bottomLeft {
        left: 50% !important;
        transform: translateX(-50%) !important;
        margin-left: 0 !important;

        .ant-notification-notice {
          margin-left: 0 !important;
          width: 100% !important;
        }
      }
    }
  }

  /* Internal App Overrides */
  .ant-layout {
    background: var(--bg-color) !important;
  }

  .ant-layout-sider {
    background: #09090b !important;
    border-right: 1px solid #18181b !important;
  }

  .ant-layout-header {
    background: #09090b !important;
    border-bottom: 1px solid #18181b !important;
    padding: 0 40px !important;
    height: 80px !important;
    line-height: 80px !important;
  }

  .ant-menu {
    background: transparent !important;
    border: none !important;
  }

  .ant-menu-item {
    font-family: var(--font-display) !important;
    font-size: 16px !important;
    font-weight: 500 !important;
    text-transform: uppercase !important;
    height: 50px !important;
    line-height: 50px !important;
    margin: 4px 12px !important;
    border-radius: 8px !important;
  }

  .ant-menu-item-selected {
    background: rgba(163, 230, 53, 0.1) !important;
    color: var(--accent-color) !important;
  }

  .ant-menu-item-selected a, .ant-menu-item-selected span {
    color: var(--accent-color) !important;
  }

  .ant-menu-item:not(.ant-menu-item-selected) {
    color: #71717a !important;
  }

  .ant-menu-item:hover {
    color: white !important;
    background: rgba(24, 24, 27, 0.5) !important;
  }

  .ant-menu-item-disabled,
  .ant-menu-item-disabled:hover {
    color: #71717a !important;
    background: transparent !important;
    cursor: not-allowed !important;
    opacity: 1 !important;
  }

  .ant-menu-item-disabled .anticon,
  .ant-menu-item-disabled a,
  .ant-menu-item-disabled span {
    color: #71717a !important;
  }
  /* Popconfirm & Popover (logout, etc.) */
  .ant-popover-inner {
    background: #18181b !important;
    border: 1px solid #27272a !important;
    border-radius: 8px !important;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5) !important;
  }
  .ant-popover-inner-content {
    color: var(--text-primary) !important;
  }
  .ant-popover-message {
    color: var(--text-primary) !important;
  }
  .ant-popover-message-title {
    color: var(--text-primary) !important;
  }
  .ant-popover-arrow-content {
    background: #18181b !important;
    --antd-arrow-background-color: #18181b !important;
  }
  .ant-popover-arrow {
    --antd-arrow-background-color: #18181b !important;
  }

  .ant-card, .StyledGridItem, div[class*="StyledCard"], div[class*="StyledBox"], .ant-table {
    background: #09090b !important;
    border: 1px solid #18181b !important;
    border-radius: 12px !important;
    color: white !important;
    box-shadow: none !important;
  }

  .ant-card-body {
    padding: 24px !important;
    background: transparent !important;
  }

  .ant-card-head {
    border-bottom: 1px solid #18181b !important;
    background: transparent !important;
    padding: 20px 24px !important;
    margin-bottom: 0 !important;
  }

  .ant-card-head-title {
    font-family: var(--font-display) !important;
    color: white !important;
    text-transform: uppercase !important;
    letter-spacing: 0.05em !important;
    font-size: 14px !important;
    font-weight: 600 !important;
    opacity: 0.7 !important;
  }

  /* Buttons */
  .ant-btn-primary {
    background: var(--accent-color) !important;
    border: none !important;
    border-radius: 6px !important;
    color: #09090b !important;
    font-family: var(--font-ui) !important;
    font-weight: 600 !important;
    text-transform: uppercase !important;
    font-size: 12px !important;
    letter-spacing: 0.02em !important;
    height: 40px !important;
    padding: 0 20px !important;
    box-shadow: 0 4px 12px rgba(163, 230, 53, 0.15) !important;
    transition: all 0.2s ease !important;
  }

  .ant-btn-primary:hover {
    background: #bef264 !important;
    transform: translateY(-1px) !important;
    box-shadow: 0 6px 16px rgba(163, 230, 53, 0.25) !important;
  }

  /* Typography Overrides */
  h1, h2, h3, h4, h5 {
    font-family: var(--font-display) !important;
    font-weight: 600 !important;
    letter-spacing: -0.02em !important;
    color: white !important;
  }

  span[class*="StyledGreeting"] {
    font-family: var(--font-display) !important;
    font-size: 36px !important;
    font-weight: 600 !important;
    color: white !important;
  }

  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: var(--bg-color);
  }
  ::-webkit-scrollbar-thumb {
    background: #333;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: var(--accent-color);
  }

  /* ---- COMPREHENSIVE ANT DESIGN DARK OVERRIDES ---- */

  /* Badges */
  .ant-badge-count {
    background: var(--accent-color) !important;
    color: #09090b !important;
    font-weight: 700 !important;
    box-shadow: none !important;
  }

  /* Ant buttons (link / default) */
  .ant-btn {
    background: transparent !important;
    border-color: #27272a !important;
    color: var(--text-secondary) !important;
    border-radius: 6px !important;
  }
  .ant-btn:hover {
    border-color: rgba(163, 230, 53, 0.5) !important;
    color: var(--accent-color) !important;
  }
  .ant-btn-link {
    border: none !important;
    color: var(--accent-color) !important;
    padding: 0 !important;
    height: auto !important;
    background: transparent !important;
  }
  .ant-btn-link:hover {
    color: #bef264 !important;
    border: none !important;
  }

  /* Dropdown menus */
  .ant-dropdown-menu {
    background: #18181b !important;
    border: 1px solid #27272a !important;
    border-radius: 8px !important;
    padding: 4px !important;
  }
  .ant-dropdown-menu-item {
    color: var(--text-primary) !important;
    border-radius: 4px !important;
  }
  .ant-dropdown-menu-item:hover {
    background: rgba(255, 255, 255, 0.06) !important;
  }

  /* Form inputs */
  .ant-form-item-label > label {
    color: var(--text-secondary) !important;
    font-family: var(--font-ui) !important;
    font-size: 13px !important;
    text-transform: uppercase !important;
    letter-spacing: 0.05em !important;
  }
  .ant-input, .ant-input-affix-wrapper {
    background: #18181b !important;
    border: 1px solid #27272a !important;
    border-radius: 8px !important;
    color: var(--text-primary) !important;
    font-family: var(--font-ui) !important;
  }
  .ant-input::placeholder {
    color: #52525b !important;
  }
  .ant-input:focus, .ant-input-affix-wrapper:focus,
  .ant-input-affix-wrapper-focused {
    border-color: var(--accent-color) !important;
    box-shadow: 0 0 0 2px rgba(163, 230, 53, 0.1) !important;
  }
  .ant-input-prefix {
    color: var(--text-secondary) !important;
  }

  /* Tags */
  .ant-tag {
    background: rgba(163, 230, 53, 0.1) !important;
    border: 1px solid rgba(163, 230, 53, 0.3) !important;
    color: var(--accent-color) !important;
    border-radius: 4px !important;
    font-size: 11px !important;
    font-weight: 600 !important;
    text-transform: uppercase !important;
    letter-spacing: 0.05em !important;
  }

  /* Modal */
  .ant-modal-content {
    background: #18181b !important;
    border: 1px solid #27272a !important;
    border-radius: 12px !important;
  }
  .ant-modal-header {
    background: transparent !important;
    border-bottom: 1px solid #27272a !important;
  }
  .ant-modal-title {
    color: white !important;
    font-family: var(--font-display) !important;
    text-transform: uppercase !important;
    letter-spacing: 0.05em !important;
  }
  .ant-modal-body {
    color: var(--text-secondary) !important;
  }
  .ant-modal-close-x {
    color: var(--text-secondary) !important;
  }
  .ant-modal-close-x:hover {
    color: white !important;
  }

  /* Select */
  .ant-select-selector {
    background: #18181b !important;
    border: 1px solid #27272a !important;
    border-radius: 8px !important;
    color: var(--text-primary) !important;
  }
  .ant-select-arrow {
    color: var(--text-secondary) !important;
  }
  .ant-select-dropdown {
    background: #18181b !important;
    border: 1px solid #27272a !important;
    border-radius: 8px !important;
  }
  .ant-select-item {
    color: var(--text-primary) !important;
    background: transparent !important;
  }
  .ant-select-item-option-selected {
    background: rgba(163, 230, 53, 0.1) !important;
    color: var(--accent-color) !important;
  }
  .ant-select-item-option-active {
    background: rgba(255, 255, 255, 0.05) !important;
  }

  /* Steps */
  .ant-steps-item-process .ant-steps-item-icon {
    background: var(--accent-color) !important;
    border-color: var(--accent-color) !important;
  }
  .ant-steps-item-process .ant-steps-item-icon .ant-steps-icon {
    color: #09090b !important;
  }
  .ant-steps-item-finish .ant-steps-item-icon {
    background: transparent !important;
    border-color: var(--accent-color) !important;
  }
  .ant-steps-item-finish .ant-steps-icon {
    color: var(--accent-color) !important;
  }
  .ant-steps-item-wait .ant-steps-item-icon {
    background: #27272a !important;
    border-color: #3f3f46 !important;
  }
  .ant-steps-item-wait .ant-steps-icon {
    color: #71717a !important;
  }
  .ant-steps-item-title {
    color: var(--text-secondary) !important;
  }
  .ant-steps-item-process .ant-steps-item-title {
    color: var(--text-primary) !important;
  }
  .ant-steps-item-finish .ant-steps-item-tail::after {
    background: var(--accent-color) !important;
  }

  /* Notifications */
  .ant-notification-notice {
    background: #18181b !important;
    border: 1px solid #27272a !important;
    border-radius: 8px !important;
  }
  .ant-notification-notice-message {
    color: white !important;
  }
  .ant-notification-notice-description {
    color: var(--text-secondary) !important;
  }

  /* Empty state */
  .ant-empty-description {
    color: var(--text-secondary) !important;
  }

  /* List items */
  .ant-list-item {
    border-bottom: 1px solid #18181b !important;
    color: var(--text-primary) !important;
  }

  /* Spin */
  .ant-spin-dot-item {
    background: var(--accent-color) !important;
  }
`;

export default GlobalStyle;
