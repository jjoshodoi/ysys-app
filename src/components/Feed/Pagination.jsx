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

  console.log(props.links);

  
  

  const totalItems = {
    characters: 2138,
    books: 12,
    houses: 444,
  };

  if (props.radioSideBar === "characters") {
    const totalPages = Math.ceil(totalItems.characters / props.selectSideBar);
  }

  if (props.radioSideBar === "houses") {
    const totalPages = Math.ceil(totalItems.houses / props.selectSideBar);
  }

  if (props.radioSideBar === "books") {
    const totalPages = Math.ceil(totalItems.books / props.selectSideBar);
  }

  // switch (props.radioSideBar) {
  //   case "characters":
  //     totalPages = Math.ceil(totalItems.characters / props.selectSideBar);
  //     return totalPages;
  //   case "books":
  //     totalPages = Math.ceil(totalItems.books / props.selectSideBar);
  //     return totalPages;
  //   case "houses":
  //     totalPages = Math.ceil(totalItems.houses / props.selectSideBar);
  //     return totalPages;
  //   default:
  //     return "";
  // }

  // console.log();

  return (
    <div className="pageButtons">

      {props.currentPage === 1 ? (
        ""
      ) : (
        <button onClick={prevPage}>{"Prev"}</button>
      )}

      {props.currentPage - 2 > 0 ? (
        <button onClick={() => changePage(-2)}> {props.currentPage - 2}</button>
      ) : (
        ""
      )}
      {props.currentPage - 2 > 0 ? (

        <button onClick={prevPage}>{props.currentPage - 1}</button>
      ) : (
        ""
      )}
      <button>{props.currentPage}</button>
      <button onClick={nextPage}>{props.currentPage + 1}</button>
      <button onClick={nextPage}>{"Next"}</button>
    </div>
  );
};

export default Pagination;
