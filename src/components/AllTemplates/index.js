import React from "react";
import CardTemplate from "../CardTemplate/index";
import { AllTemplateWrapper } from "./styles";
import Pagination from "../paginator/index";
function Index() {
  const data = [
    {
      name: "laborum. exercitation cupidatat",
      description: "dolore Lorem velit incididunt nostrud...",
      link: "https://formpl.us",
    },
    {
      name: "nostrud cupidatat laborum.",
      description:
        "Engage your alumni network better with this alumni registration form template. Embed this in your website ",
      link: "https://formpl.us",
    },
    {
      name: "Scholarship form template",
      description:
        "Engage your alumni network better with this alumni registration form template. Embed this in your website ...",
      link: "https://formpl.us",
    },
    {
      name: "Scholarship form template",
      description:
        "Engage your alumni network better with this alumni registration form template. Embed this in your website ...",
      link: "https://formpl.us",
    },
  ];

  return (
    <AllTemplateWrapper>
      <div className="sub-header">
        <h3>All Templates</h3>
        <h3>2000 templates</h3>
      </div>
      <Pagination
        data={data}
        RenderComponent={CardTemplate}
        pageLimit={5}
        dataLimit={10}
      />
    </AllTemplateWrapper>
  );
}

export default Index;
