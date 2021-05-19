import React, { useState, useCallback, useEffect, useContext } from "react";
import Header from "../components/Header";
import AllTemplates from "../components/AllTemplates";
import { PageLoader } from "../components/Loaders";
import { GlobalContext } from "../store/provider/index";
import { TEMPLATES_DATA } from "../store/types/index";
const App = () => {
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(false);
  // const [data, setData] = useState([]);

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
    } catch (error) {
      setError(error);
    }
    setIsloading(false);
  }, [dispatch]);

  useEffect(() => {
    setIsloading(true);
    getTemplates();
  }, [getTemplates]);

  // useEffect(() => {
  //   dispatch({
  //     payload: data,
  //     type: TEMPLATES_DATA,
  //   });
  // }, []);
  // console.log(state, "state");

  if (error) return <p>{error}</p>;

  if (isLoading) return <PageLoader />;

  return (
    <div>
      <Header />
      <AllTemplates data={state.templatesData} />
    </div>
  );
};

export default App;
