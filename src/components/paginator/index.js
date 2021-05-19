import React, { useState } from "react";
import { PaginatorWrapper } from "./styles";

const Pagination = ({ data, RenderComponent, pageLimit, dataLimit }) => {
  //   const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  const goToNextPage = () => {
    setCurrentPage((page) => page + 1);
  };
  const goToPreviousPage = () => {
    setCurrentPage((page) => page - 1);
  };

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  return (
    <PaginatorWrapper>
      <div className="dataContainer">
        {getPaginatedData().map((d, idx) => (
          <RenderComponent key={idx} data={d} />
        ))}
      </div>
      <div className="pagination">
        <div
          onClick={goToPreviousPage}
          className={`prev ${currentPage === 1 ? "disabled" : ""}`}
        >
          <h4> &larr; Previous</h4>
        </div>

        <div>
          <span className="active-page">{currentPage}</span> of <span>{pageLimit}</span>
        </div>

        <div
          onClick={goToNextPage}
          className={`next ${currentPage === pageLimit ? "disabled" : ""}`}
        >
          <h4> Next &rarr;</h4>
        </div>
      </div>
    </PaginatorWrapper>
  );
};

export default Pagination;
