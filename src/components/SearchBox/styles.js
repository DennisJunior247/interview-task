import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 319px;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  border-radius: 2px;
  height: 40px;
  justify-content: space-between;
  background: #fff;
  @media (max-width: 950px) {
    width: 100%;
  }
  input {
    width: 85%;
    height: 100%;
    outline: 0;
    border: none;
    background: transparent;
    margin-left: 3px;
    color: #8f8b8b;
    ::placeholder {
      font-size: 14px;
      color: #8f8b8b;
    }
  }
  div {
    padding: 5px;
  }
`;
