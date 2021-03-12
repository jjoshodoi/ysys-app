import React from "react";

const Pagination = (props) => {
  const nextPage = () => {
    props.setCurrentPage(props.currentPage + 1);
  };

  const addToPage = (n) => {
    props.setCurrentPage(props.currentPage + n);
  };

  const goToLastPage = () => props.setCurrentPage(props.lastPage);

  const prevPage = () => {
    if (props.currentPage < 1) {
      return 1;
    } else {
      props.setCurrentPage(props.currentPage - 1);
    }
  };

  return (
    <div className="pageButtons">
      {props.currentPage === 1 ? (
        ""
      ) : (
        <button onClick={prevPage}>{"Prev"}</button>
      )}
      {props.currentPage - 1 > 0 ? (
        <button onClick={prevPage}>{props.currentPage - 1}</button>
      ) : (
        ""
      )}
      <button className="selectedPage">{props.currentPage}</button>
      {props.currentPage >= props.lastPage - 1 ? (
        ""
      ) : (
        // <div style={{ display: "inlineBlock" }}>

        <button onClick={nextPage}>{props.currentPage + 1}</button>
        //   {/* <h3>...</h3>
        // </div> */}
      )}

      {props.currentPage === props.lastPage ? (
        ""
      ) : (
        <button onClick={goToLastPage}>{props.lastPage}</button>
      )}
      {props.currentPage === props.lastPage ? (
        ""
      ) : (
        <button onClick={nextPage}>{"Next"}</button>
      )}
    </div>
  );
};

export default Pagination;
