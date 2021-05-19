import React, { useState, useCallback, useEffect } from "react";
import Header from "../components/Header";
import AllTemplates from "../components/AllTemplates";
import { PageLoader } from "../components/Loaders";

const App = () => {
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  console.log(data, "state");
  const getTemplates = useCallback(async () => {
    try {
      const response = await fetch(
        `https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates`
      );
      const Templatedata = await response.json();

      setData(Templatedata);
    } catch (error) {
      setError(error);
    }
    setIsloading(false);
  }, []);

  useEffect(() => {
    setIsloading(true);
    getTemplates();
  }, [getTemplates]);

  if (error) return <p>{error}</p>;

  if (isLoading) return <PageLoader />;

  return (
    <div>
      <Header />
      <AllTemplates data={data} />
    </div>
  );
};

export default App;
