import React from "react";
import CardTemplate from "../CardTemplate/index";
import { AllTemplateWrapper } from "./styles";
import Pagination from "../paginator/index";

function Index({ data }) {
  return (
    <AllTemplateWrapper data-testid="allTemplate">
      <Pagination
        data={data}
        RenderComponent={CardTemplate}
        pageLimit={14}
        dataLimit={24}
      />
    </AllTemplateWrapper>
  );
}

export default Index;
