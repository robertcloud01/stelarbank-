import styled from 'styled-components';
import { List } from 'antd';
import { media } from 'utils';

export const StyledList = styled(List)`
  background-color: #18181b;
  border: 1px solid #27272a;
  border-radius: 8px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;

  .ant-spin-nested-loading {
    width: 100%;
  }

  .ant-list-header {
    width: 100%;
    padding: 10px 16px;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #18181b;
    border-bottom: 1px solid #27272a;
    color: var(--text-secondary);
    font-family: var(--font-display);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-size: 11px;

    button {
      font-size: 13px;
    }
  }

  .ant-list-items {
    max-height: 350px;
    overflow-y: auto;
    width: 100%;
  }

  ${media.tablet`
    min-height: 153px;
  `}
`;

export const StyledListItem = styled(List.Item)`
  &&& {
    padding: 10px 16px;
    background-color: ${({ readed }) => (!readed ? 'rgba(163, 230, 53, 0.05)' : 'transparent')};
    border-bottom: 1px solid #27272a !important;
    color: var(--text-primary);

    br {
      display: none;
    }

    strong {
      font-weight: normal;
    }

    &:hover {
      cursor: ${({ hovered }) => !hovered && 'pointer'};
      background-color: ${({ hovered }) => !hovered && 'rgba(255, 255, 255, 0.04)'};
    }
  }
`;

export const StyledListItemBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: var(--text-secondary);
  margin-top: 4px;
`;

export const StyledListItemSenderWrapper = styled.div`
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 50%;
`;

export const StyledListItemSender = styled.span`
  color: var(--accent-color);
  display: contents;
`;

export const StyledListItemAmount = styled.span`
  font-weight: 600;
  color: var(--accent-color);
`;

export const StyledListItemDate = styled.span`
  display: block;
  font-size: 12px;
  text-align: right;
  color: var(--text-secondary);
`;

export const StyledListItemNoData = styled.div`
  margin: auto;
  pointer-events: none;
  color: var(--text-secondary);
  font-size: 13px;
  padding: 24px;
`;
