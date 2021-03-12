import React from "react";
import "./HeaderComponent.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

// TODO - make sure HeaderComponent is expecting the right props (if any)!
export const HeaderComponent = (props) => {
  const handleSearchChange = (event) => {
    props.setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setQuery(props.search);
  };
  return (
        <header className="header">
          <div
            className="inlineTitle hamburger-title"
            onClick={() => props.setSideBarOpen(!props.sideBarOpen)}
          >
            <MenuIcon fontSize="large" />
          </div>
          <img
            src="Images/Houses/GOT HEADER.png"
            className="titleImg"
            alt="Game of Thrones App"
          />
          <form
            id="search"
            className="inlineTitle formContainer"
            onSubmit={handleSubmit}
          >
            <input
              className="searchinput"
              value={props.search}
              placeholder="Enter Here..."
              type="text"
              onChange={handleSearchChange}
            ></input>

            {/* <input
              className="mobileSearchInput"
              value={props.search}
              placeholder="Enter Here..."
              type="text"
              onChange={handleSearchChange}
            ></input> */}

            <button className="searchButton" type="submit" form="search">
              <SearchIcon fontSize="default" />
            </button>
          </form>
        </header>
  );
};
