import React, { useState } from "react";
import "./SidebarComponent.css";
import { Select, MenuItem } from "@material-ui/core";

// TODO - make sure SidebarComponent is expecting the right props!
export const SidebarComponent = (props) => {
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
    <div>
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
        <h3>
          Filter Search Size:{" "}
          <Select defaultValue="10" onChange={onSelectChange}>
            <MenuItem value="10">10</MenuItem>
            <MenuItem value="20">20</MenuItem>
            <MenuItem value="50">50</MenuItem>
          </Select>
        </h3>
      </div>
    </div>
  );
};
