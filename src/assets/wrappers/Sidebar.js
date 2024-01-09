import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 370px;
  height: 100%;
  padding: 16px;
  background-color: #f8f9fc;

  @media only screen and (max-width: 1100px) {
    display: none;
  }

  .bar {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4px;
  }

  .alphabet {
    font-size: 14px;
    letter-spacing: 3.5px;
    opacity: 50%;
  }

  .customer-list {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .customer {
    height: 28px;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .well {
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    padding: 16px 24px 16px 24px;
    background-color: #e1e6ef;
    gap: 10px;
  }
`;

export default Wrapper;
