import styled from 'styled-components';
import { StyledFormWrapper, StyledForm, StyledInputNumber, StyledButton } from 'components/Form/styles';

export const BrutalistFormWrapper = styled(StyledFormWrapper)`
  &&& {
    background-color: transparent;
    box-shadow: none;
    text-align: left;
    width: 100%;
    max-width: 400px;
  }
`;

export const BrutalistForm = styled(StyledForm)`
  &&& {
    max-width: 100%;
    
    .ant-form-item-label label {
      font-family: var(--font-ui);
      color: var(--accent-color) !important;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: 2px;
      font-size: 12px !important;
    }

    .ant-input-number {
      background-color: transparent;
      border: none;
      border-bottom: 2px solid #333;
      border-radius: 0;
      color: white;
      font-family: var(--font-display);
      font-size: 32px;
      transition: border-color 0.3s;

      &:focus, &-focused {
        border-color: var(--accent-color);
        box-shadow: none;
      }

      input {
        color: white;
        height: 60px;
      }
    }
  }
`;

export const BrutalistFormTitle = styled.h2`
  font-family: var(--font-display);
  font-size: 48px;
  color: white;
  text-transform: uppercase;
  margin-bottom: 30px;
  
  span.accent {
    color: var(--accent-color);
  }
`;

export const BrutalistActionButton = styled(StyledButton)`
  &&& {
    height: 60px;
    background-color: var(--accent-color);
    border: none;
    border-radius: 0;
    color: black;
    font-family: var(--font-display);
    font-size: 24px;
    text-transform: uppercase;
    margin-top: 20px;

    &:hover {
      background-color: white;
      transform: translate(-4px, -4px);
      box-shadow: 4px 4px 0 var(--accent-color);
    }
  }
`;
