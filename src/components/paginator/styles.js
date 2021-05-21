import styled from "styled-components";

export const PaginatorWrapper = styled.div`
  .dataContainer {
    /* padding: 5px 30px; */
    /* margin-left: 5px; */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    @media (max-width: 950px) {
      width: 94%;
      justify-content: center;

    }
  }
  .pagination {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 60px;
    width: 100%;
    margin-bottom: 20px;
  }
  .prev,
  .next {
    h4 {
      font-size: 18px;
      color: #3f3f3f;
      cursor: pointer;
    }
  }

  .prev.disabled,
  .next.disabled {
    pointer-events: none;
    box-shadow: none;
    color: red;
  }
  .active-page {
    background: #ffffff;
    border: 1px solid #3f3f3f;
    border-radius: 3px;
    padding: 5px 15px;
  }
`;
