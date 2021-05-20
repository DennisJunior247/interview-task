import React from "react";
import { CardWrapper } from "./styles";
import { truncate } from "../../utils/utilFuc";


function Index({ data }) {
  const { name, description, link } = data;
  return (
    <CardWrapper>
      <div key={Math.random() * (100 - 10 + 1)} className="card-container">
        <div className="text-container">
          <h1>{truncate(name, 40)}</h1>
          <p>{truncate(description, 60)}</p>
        </div>
        <div className="link-box">
          <a target="blank" href={`${link}`}>
            use template
          </a>
        </div>
      </div>
    </CardWrapper>
  );
}

export default Index;
