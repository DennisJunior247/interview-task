import styled from "styled-components";

export const CardWrapper = styled.div`
  .card-container {
    background: #ffffff;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.08);
    border-radius: 2px;
    width: 350px;
    height: 250px;
    padding: 10px;
    margin: 20px;
    @media (max-width: 50px) {
      width: 94%;
      justify-content: center;
      width: 250px;
      height: 250px;
    }
    transition: transform 0.5s ease, opacity 0.5s ease-out,
      box-shadow 0.3s ease-in;
    &:hover {
      transform: scale(1.1);
    }
    .text-container {
      height: 80%;
      h1 {
        font-size: 30px;
        color: #333447;
        font-weight: bolder;
      }
      p {
        font-size: 18px;
      }
    }
  }
  .link-box {
    & > a {
      color: #08bd37;
      text-decoration: none;
    }
  }
`;
