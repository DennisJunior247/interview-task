import React, { useContext } from "react";
import { render, screen,cleanup } from "@testing-library/react";
import AllTemplates from "./components/AllTemplates/index";
import {GlobalContext} from "./store/provider/index"

afterEach(()=>{
  cleanup()
})

test("render all templates", () => {
  const { state } = useContext(GlobalContext);
  render(<AllTemplates data={state.templatesData}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
