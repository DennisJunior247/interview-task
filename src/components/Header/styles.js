import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 50px;
  flex-direction: column;

  .filter-box {
    padding-bottom: 10px;
    align-items: center;
    display: flex;
    width: 100%;
    @media (max-width: 950px) {
      flex-direction: column;
    }
    .search-container {
      width: 50%;
      padding-left: 30px;
      padding-right: 5px;
      @media (max-width: 1200px) {
        width: 30%;
        padding-right: 20px;
      }
      @media (max-width: 950px) {
        width: 95%;
        padding: 0;
      }
    }
    .dropDown-container {
      width: 50%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      padding-right: 30px;
      @media (max-width: 1200px) {
        width: 70%;
        justify-content: space-around;
      }
      @media (max-width: 950px) {
        width: 95%;
        justify-content: space-between;
        padding: 0;
      }
    }
  }

  .alert {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;

    & > div {
      width: 97%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5px;
      background: #fff4ea;
      border-radius: 2px;
      p {
        text-align: center;
        margin-left: 10px;
      }
      @media (max-width: 950px) {
        width: 95%;
        /* padding: 2px; */
      }
    }
  }
`;
