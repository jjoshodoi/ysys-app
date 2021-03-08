import React from "react";
import "./HeaderComponent.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

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
    <header className="header">
      {/* <div className={sideBarOpen ? "content" : "content sidebarCollapse"}> */}
      <div>
        {/* TODO [STRETCH] - add in any controls that you'd like in your header
             E.g, a search bar, a toggle button for the side bar, or just a plain header!
        */}
        <div
          className="inlineTitle"
          onClick={() => setSideBarOpen(!sideBarOpen)}
        >
          <MenuIcon fontSize="large" />
        </div>{" "}
        {/* <---- this is the burger menu symbol for the show filters button */}
        {/* <center> */}
        <img
          src="Images/Houses/GOT HEADER.png"
          id="titleImg"
          alt="Game of Thrones App"
        />
        {/* <h1 id="headertext" className="inlineTitle">
          Game of Thrones App
        </h1>{" "} */}
        {/* </center> */}
        <form className="inlineTitle" onSubmit={handleSubmit} id="search">
          <input
            className="searchinput"
            value={search}
            placeholder="Enter Here..."
            type="text"
            onChange={handleSearchChange}
          ></input>

          <button
            className="sidebarBtn"
            type="submit"
            form="search"
            id="searchbutton"
          >
            <SearchIcon fontSize="medium" />
          </button>
        </form>
      </div>
    </header>
  );
};
