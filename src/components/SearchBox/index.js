import React from "react";
import { InputWrapper } from "./styles";
import { AiOutlineSearch } from "react-icons/ai";

function Index({ onchange }) {

  return (
    <InputWrapper>
      <input
        placeholder="Search Templates"
        onChange={onchange}
      />
      <div>
        <AiOutlineSearch color={"#8F8B8B"} fontSize={"30px"} />
      </div>
    </InputWrapper>
  );
}

export default Index;
