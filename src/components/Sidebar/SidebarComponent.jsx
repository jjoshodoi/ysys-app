import React, { useState } from "react";
import "./SidebarComponent.css";
import { Select, MenuItem } from "@material-ui/core";

// TODO - make sure SidebarComponent is expecting the right props!
export const SidebarComponent = (props) => {
  // TODO - reflect expanded/collapsed state in sidebar's className
  // TODO - make sure the classNames in the SidebarComponent.css match up with the classes you choose!

  //  TODO - flesh out this component to include all controls for configuring your data retrieval.
  //              This must include the category (books/characters/houses)
  //              [STRETCH] Feel free to add anything else you want, for example:
  //                 * a dropdown to select number of items you want to retrieve
  //                 * a search bar to search for a particular item
  //              You could even change what you can see in the search bar based on what you are searching for.
  //              E.g add a dropdown to determine which field you're searching on ("name"/"title"/"alias")

  const onRadioChange = (event) => {
    event.preventDefault();
    props.setRadioSideBar(event.target.value);
    console.log(event.target.value);
  };

  const onSelectChange = (event) => {
    event.preventDefault();
    props.setSelectSideBar(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div
    // className={
    //   props.sideBarOpen ? "sidebar sidebarContainer" : "sidebarCollapse"
    // }
    >
      <form>
        <div className="sideBarButtons">
          <div className="sideBarBtnItem">
            <label>
              <button
                value="houses"
                className={
                  props.radioSideBar === "houses"
                    ? "sidebarBtn sidebarActive"
                    : "sidebarBtn"
                }
                onClick={onRadioChange}
              >
                Houses
              </button>
            </label>
          </div>
          <div className="sideBarBtnItem">
            <label>
              <button
                value="characters"
                className={
                  props.radioSideBar === "characters"
                    ? "sidebarBtn sidebarActive"
                    : "sidebarBtn"
                }
                onClick={onRadioChange}
              >
                Characters
              </button>
            </label>
          </div>
          <div className="sideBarBtnItem"></div>
          <label>
            <button
              value="books"
              className={
                props.radioSideBar === "books"
                  ? "sidebarBtn sidebarActive"
                  : "sidebarBtn"
              }
              onClick={onRadioChange}
            >
              Books
            </button>
          </label>
        </div>
      </form>
      <div className="custom-select">
        <h3>Filter Search Size</h3>
        <Select defaultValue="10" onChange={onSelectChange}>
          <MenuItem value="10">10</MenuItem>
          <MenuItem value="20">20</MenuItem>
          <MenuItem value="50">50</MenuItem>
        </Select>
      </div>
    </div>
  );
};
