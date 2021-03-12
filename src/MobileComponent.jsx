import React, { useState } from "react";
import { Select, MenuItem } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { FeedComponent } from "./components/Feed/FeedComponent";

const MobileComponent = (props) => {
  const [showSearch, setShowSearch] = useState(false);
  const handleSearchChange = (event) => {
    props.setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setQuery(props.search);
    setShowSearch(false);
    props.setSearch("");
  };

  const onSelectChange = (event) => {
    event.preventDefault();
    props.setSelectSideBar(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div>
      <div className="mobileSideBar">
        <div
          onClick={() => props.setRadioSideBar("houses")}
          className={
            props.radioSideBar === "houses"
              ? "mobileSideButtons position-houses mobileSideButtonActive"
              : "mobileSideButtons position-houses"
          }
        >
          <div className="positioned">
            <h3>Houses</h3>
          </div>
        </div>
        <div>
          <div
            onClick={() => props.setRadioSideBar("characters")}
            className={
              props.radioSideBar === "characters"
                ? "mobileSideButtons position-characters mobileSideButtonActive"
                : "mobileSideButtons position-characters"
            }
          >
            <div className="positioned">
              <h3>Characters</h3>
            </div>
          </div>
          <div
            onClick={() => props.setRadioSideBar("books")}
            className={
              props.radioSideBar === "books"
                ? "mobileSideButtons position-books mobileSideButtonActive"
                : "mobileSideButtons position-books"
            }
          >
            <div className="positioned">
              <h3>Books</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="mobileFilters custom-select-mobile">
        <h5>
          Filter Search Size:{" "}
          <Select defaultValue="10" onChange={onSelectChange}>
            <MenuItem value="10">10</MenuItem>
            <MenuItem value="20">20</MenuItem>
            <MenuItem value="50">50</MenuItem>
          </Select>
        </h5>
      </div>
      <div className="mobileContents">
        <div className="row">
          <div id="title"><b>Currently Viewing: {props.radioSideBar}</b></div>
          <div id="search">
            <button className="searchButton" type="submit" form="search">
              <SearchIcon
                fontSize="default"
                onClick={() => setShowSearch(true)}
              />
            </button>
          </div>
        </div>
        <div className={showSearch ? "pop-up-search" : "pop-up-search-closed"}>
          <CloseIcon onClick={() => setShowSearch(false)} />
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
          </form>
        </div>
        <FeedComponent
          ApiInfo={props.ApiInfo}
          radioSideBar={props.radioSideBar}
          currentPage={props.currentPage}
          setCurrentPage={props.setCurrentPage}
          selectSideBar={props.selectSideBar}
          links={props.links}
          alive={props.alive}
          setAlive={props.setAlive}
          gender={props.gender}
          setGender={props.setGender}
        />
      </div>
    </div>
  );
};

export default MobileComponent;
