import styled from "styled-components";

export const DropdownModalBox = styled("div")`
  position: relative;
  width: max-content;
  min-width: max-content;
  .up {
    position: relative;
    width: 200px;
    background-color: #fff;
    left: 10px;
    top: 8px;
    color: #8f8b8b;
    font-size:16px;
  }
  & > .click {
    background: ${({ dropBk }) => dropBk || "#eff0f5"};
    cursor: pointer;
    padding: ${({ dropBk }) =>
      !!dropBk
        ? dropBk === "transparent"
          ? "5px 5px"
          : " 5px 13px"
        : "5px 13px"};
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #777;
    transition: 250ms ease-in-out;
    border: 1px solid #e3e5ea;
    span {
      color: ${({ selectedColor, canClick }) =>
        !canClick ? "#d0cece" : selectedColor ? selectedColor : " #777"};
      font-size: 18px;
      font-weight: ${({ selectedWeight }) => selectedWeight || "auto"};
      opacity: 0.8;
      padding-right: 100px;
      padding-top: 5px;
      padding-bottom: 5px;
    }
    svg {
      font-size: 18px;
    }
    &:hover {
      border: 1px solid #dbdbdb;
      background: ${({ dropHovBk, canClick }) =>
        !canClick ? "#dcdde1" : dropHovBk || "#e3e3e3"};
      color: ${({ dropCol }) => dropCol && dropCol};
      & > span {
        opacity: 1;
      }
    }
  }
  & > .overlay {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 10008;
    cursor: auto;
  }
  & > section {
    position: absolute;
    z-index: 10009;
    top: 100%;
    border: 0;
    right: ${({ right }) => (right ? 0 : "auto")};
    left: ${({ left }) => (left ? 0 : "auto")};
    margin: 2px auto 0;
    padding: 5px 0;
    font-size: 14px;
    min-width: 160px;
    max-width: 250px;
    width: max-content;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
    border-radius: 3px;
    background-clip: padding-box;
    background-color: #fff;
    max-height: ${({ maxHeight }) => maxHeight || "200px"};
    ul {
      padding: 0;
      margin: 0;
      li {
        list-style: none;
        cursor: pointer;
        font-weight: 400;
        text-align: left;
        height: 100%;
        margin: 0 5px;
        display: block;
        position: relative;
        font-size: 13px;
        min-height: unset;
        display: flex;
        padding: 10px 20px;
        span {
          color: ${({ listCol }) => listCol || "#333"};
          font-size: 18px;
        }
        &:hover {
          box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28),
            0 4px 20px 0px rgba(0, 0, 0, 0.12),
            0 7px 8px -5px rgba(156, 39, 176, 0.2);
          background-color: #08bd37;
          span {
            color: #fff !important;
          }
        }
        .modalText {
          height: 100%;
          flex: 1;
        }
      }
    }
  }
`;
