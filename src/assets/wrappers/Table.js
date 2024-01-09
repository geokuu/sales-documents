import styled from "styled-components";

const Wrapper = styled.div`
  .pagination {
    display: flex;
    padding: 12px 24px 12px;
    justify-content: space-between;
  }

  .label-left {
    width: 180px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .label-center {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .label-right {
    width: 180px;
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 8px;
  }

  .table {
    font-size: 14px;
    line-height: 20px;
    border-collapse: collapse;
    width: 100%;
  }

  .header-table {
    height: 43px;
    background: #f1f3f9;
  }

  .heading-column {
    font-weight: 600;
    text-align: left;
    letter-spacing: 0.3px;
  }

  .row-table {
    height: 64px;
    border-bottom: 1px solid #f1f3f9;
    align-items: center;
  }

  tr.selected {
    background-color: #f2f4f8;
  }

  .type-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
  }

  .column--last {
    width: 64px;
  }

  @media only screen and (max-width: 700px) {
    .hide {
      display: none;
    }
  }
`;

export default Wrapper;
