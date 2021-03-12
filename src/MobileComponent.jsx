import React from "react";
import { Select, MenuItem } from "@material-ui/core";

const MobileComponent = (props) => {
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
          <Select
            defaultValue="10"
            // onChange={onSelectChange}
          >
            <MenuItem value="10">10</MenuItem>
            <MenuItem value="20">20</MenuItem>
            <MenuItem value="50">50</MenuItem>
          </Select>
        </h5>
      </div>
      <div className="mobileContents">
        <div className="row">
          <div id="title">{props.radioSideBar}</div>
          <div id="search"></div>
        </div>
      </div>
    </div>
  );
};

export default MobileComponent;
