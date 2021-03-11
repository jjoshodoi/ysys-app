import React from "react";

const Pagination = (props) => {
  const nextPage = () => {
    props.setCurrentPage(props.currentPage + 1);
  };

  const changePage = (n) => {
    props.setCurrentPage(props.currentPage + n);
  };

  const prevPage = () => {
    if (props.currentPage < 1) {
      return 1;
    } else {
      props.setCurrentPage(props.currentPage - 1);
    }
  };
  return (
    <div className="pageButtons">
      <button onClick={prevPage}>{"<"}</button>
      {props.currentPage - 2 > 0 ? (
        <button onClick={() => changePage(-2)}> {props.currentPage - 2}</button>
      ) : (
        ""
      )}
      {props.currentPage - 1 > 0 ? (
        <button onClick={prevPage}>{props.currentPage - 1}</button>
      ) : (
        ""
      )}
      <button>{props.currentPage}</button>
      <button onClick={nextPage}>{props.currentPage + 1}</button>
      {/* <button onClick={() => props.changePage(+1)}>
          {props.currentPage + 2}
        </button>
        <button onClick={props.changePage(+2)}>{props.currentPage + 3}</button> */}
      <button onClick={nextPage}>{">"}</button>
    </div>
  );
};

export default Pagination;
