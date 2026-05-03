import styled from 'styled-components';
import { Table } from 'antd';

export const StyledTableWrapper = styled.div`
  width: 100%;
  height: 100%;

  &:hover {
    cursor: auto;
  }
`;

export const StyledTable = styled(Table)`
  &&& {
    height: 100%;
    max-height: 218px;

    br {
      display: none;
    }

    .ant-spin-nested-loading {
      height: 100%;

      .ant-spin-container {
        height: 100%;
      }
    }

    .ant-table {
      background: transparent !important;
      color: white !important;

      .ant-table-container {
        border: none !important;

        .ant-table-content {
          table {
            background: transparent !important;
          }
        }
      }
    }

    .ant-table-tbody > tr > td {
      border-bottom: 1px solid #18181b !important;
      background: transparent !important;
      color: var(--text-primary) !important;
      transition: background 0.3s;
    }

    .ant-table-tbody > tr:hover > td {
      background: rgba(255, 255, 255, 0.05) !important;
    }

    .ant-table-placeholder {
      background: transparent !important;
      border: none !important;
      .ant-empty-description {
        color: var(--text-secondary) !important;
      }
    }
  }
`;
