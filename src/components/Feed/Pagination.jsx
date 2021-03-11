import React from "react";

const Pagination = (props) => {
  const nextPage = (props) => {
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
      {/* <button onClick={() => props.changePage(-3)}>
          {props.currentPage - 3}
        </button> */}
      {props.currentPage - 2 > 0 ? (
        <button onClick={() => changePage(-2)}> {props.currentPage - 2}</button>
      ) : (
        ""
      )}
      <button onClick={props.prevPage}>{props.currentPage - 1}</button>
      <button>{props.currentPage}</button>
      <button onClick={props.nextPage}>{props.currentPage + 1}</button>
      {/* <button onClick={() => props.changePage(+1)}>
          {props.currentPage + 2}
        </button>
        <button onClick={props.changePage(+2)}>{props.currentPage + 3}</button> */}
      <button onClick={props.nextPage}>{">"}</button>
    </div>
  );
};

export default Pagination;
