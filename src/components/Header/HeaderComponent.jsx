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
    <header>
      <div className={"content"}>
        {/* TODO [STRETCH] - add in any controls that you'd like in your header
             E.g, a search bar, a toggle button for the side bar, or just a plain header!
        */}
        <button className="inlineTitle">
          <img src="Images/burger.png" height="30" width="30"></img>
        </button>{" "}
        {/* <---- this is the burger menu symbol for the show filters button */}
        <h1 id="headertext" className="inlineTitle">
          Game of Thrones App
        </h1>{" "}
        <form className="inlineTitle" onSubmit={handleSubmit} id="search">
          <input
            className="searchinput"
            value={search}
            placeholder="Enter Here..."
            type="text"
            onChange={handleSearchChange}
          ></input>

          {/* <button type="submit" form="search" id="searchbutton">
            Submit
          </button> */}
        </form>
      </div>
    </header>
  );
};
