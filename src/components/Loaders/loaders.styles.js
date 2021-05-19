import styled from "styled-components";

const variantSize = (size, defSize) =>
  size
    ? size === "sm"
      ? "18px"
      : size === "md"
      ? "25px"
      : size === "lg"
      ? "45px"
      : ""
    : defSize;

export const PageLoaderBox = styled('div')`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  padding: 50px 0;
  justify-content: center;

  .ripple {
    display: inline-block;
    position: relative;
    width: ${({ size }) => variantSize(size, "80px")};
    height: ${({ size }) => variantSize(size, "80px")};
  }
  .ripple div {
    position: absolute;
    border: ${({ theme, color }) =>
      `4px solid ${color ? color : "blue"}`};
    opacity: 1;
    border-radius: 50%;
    animation: ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  .ripple div:nth-child(2) {
    animation-delay: -0.5s;
  }
  @keyframes ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
`;
