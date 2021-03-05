import React from "react";
import "./HeaderComponent.css";

// TODO - make sure HeaderComponent is expecting the right props (if any)!
export const HeaderComponent = ({
  setSearch,
  setQuery,
  search,
  callAPI,
  radioSideBar,
  setSideBarOpen,
  sideBarOpen,
}) => {
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery(search);
    callAPI(radioSideBar, search);
  };
  return (
    <header>
      {/* <div className={sideBarOpen ? "content" : "content sidebarCollapse"}> */}
      <div>
        {/* TODO [STRETCH] - add in any controls that you'd like in your header
             E.g, a search bar, a toggle button for the side bar, or just a plain header!
        */}
        <button
          className="inlineTitle"
          onClick={() => setSideBarOpen(!sideBarOpen)}
        >
          <img src="Images/burger.png" height="30" width="30"></img>
        </button>{" "}
        {/* <---- this is the burger menu symbol for the show filters button */}
        {/* <center> */}
        <h1 id="headertext" className="inlineTitle">
          Game of Thrones App
        </h1>{" "}
        {/* </center> */}
        <form className="inlineTitle" onSubmit={handleSubmit} id="search">
          <input
            className="searchinput"
            value={search}
            placeholder="Enter Here..."
            type="text"
            onChange={handleSearchChange}
          ></input>

          <button type="submit" form="search" id="searchbutton">
            <img src="Images/searchicon.png" height="30" width="30"></img>
          </button>
        </form>
      </div>
    </header>
  );
};
