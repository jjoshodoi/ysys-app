import React from "react";
import "./HeaderComponent.css";

// TODO - make sure HeaderComponent is expecting the right props (if any)!
export const HeaderComponent = ({
  setSearch,
  setQuery,
  search,
  callAPI,
  radioSideBar,
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
    <header className={"content"}>
      {/* TODO [STRETCH] - add in any controls that you'd like in your header
             E.g, a search bar, a toggle button for the side bar, or just a plain header!
        */}
      <button className="inlineBlock"><img src="https://i.pinimg.com/736x/ee/c0/71/eec071442e9a1b8e017c5a7c1853b880.jpg"></img></button>
      <h1 id="headertext" className="inlineBlock">
        <center>Game of Thrones App</center>
      </h1>
      <form className="inlineBlock" onSubmit={handleSubmit} id="search">
        <input
          className="search"
          value={search}
          placeholder="Enter Here..."
          type="text"
          onChange={handleSearchChange}
        ></input>
        <button type="submit" form="search">
          Submit
        </button>
      </form>
    </header>
  );
};
