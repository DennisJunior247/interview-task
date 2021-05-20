import React, { useState, useCallback, useEffect, useContext } from "react";
import Header from "../components/Header";
import AllTemplates from "../components/AllTemplates";
import { PageLoader } from "../components/Loaders";
import { GlobalContext } from "../store/provider/index";
import { TEMPLATES_DATA } from "../store/types/index";
const App = () => {
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(false);
  const [template, setTemplate] = useState([]);

  const { state, dispatch } = useContext(GlobalContext);

  const getTemplates = useCallback(async () => {
    try {
      const response = await fetch(
        `https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates`
      );
      const Templatedata = await response.json();

      dispatch({
        payload: Templatedata,
        type: TEMPLATES_DATA,
      });
      setTemplate(Templatedata);
    } catch (error) {
      setError(error);
    }
    setIsloading(false);
  }, [dispatch]);

  useEffect(() => {
    setIsloading(true);
    getTemplates();
  }, [getTemplates]);

  // const onClick = (selected) => {
  //   if (selected === "Default") {
  //     state.templatesData.slice().sort();
  //   } else if (selected === "Ascending") {
  //     state.templatesData.slice().sort((a, b) => a.date - b.date);
  //   } else if (selected === "Descending") {
  //     state.templatesData.slice().sort((a, b) => b.date - a.date);
  //   }
  // };

  // const updateSearch = (e) => {
  //   setSearch(e.target.value.toLowerCase());
  // };

  const filterSearch = (e) => {
    if (e.target.value.toLowerCase()) {
      const item = state.templatesData.filter((i) =>
        i.name.toLowerCase().includes(e.target.value.toLowerCase())
      );

      dispatch({
        payload: item,
        type: TEMPLATES_DATA,
      });
    } else if (e.target.value.toLowerCase() === "") {
      dispatch({
        payload: template,
        type: TEMPLATES_DATA,
      });
    }
  };

  if (error) return <p style={{ textAlign: "center" }}>{error.message}</p>;

  if (isLoading) return <PageLoader />;

  return (
    <div>
      <Header onClick={filterSearch} data={state.templatesData} />
      <AllTemplates data={state.templatesData} />
    </div>
  );
};

export default App;
