import { render, cleanup } from "@testing-library/react";
import SearchBox from "../components/SearchBox/index";

afterEach(() => {
  cleanup();
});

// test("render all templates", () => {
//   const { state } = useContext(GlobalContext);
//   render(<AllTemplates data={state.templatesData} />);
//   expect(linkElement).toBeInTheDocument();
// });

describe("SearchBox component", () => {
  test("it renders", () => {
    render(<SearchBox />);
  });
});
