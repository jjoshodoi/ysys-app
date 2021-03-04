import React, { useState } from "react";
import "./SidebarComponent.css";

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
    <div className={"sidebar"}>
      <form>
        <div className="button buttonhouses">
          <label>
            {/* <input
              // type="button"
              value="houses"
              checked={props.radioSideBar === "houses"}
              onChange={onRadioChange}
            /> */}
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
        <div className="button buttoncharacters">
          <label>
            {/* <input
              // type="button"
              value="characters"
              checked={props.radioSideBar === "characters"}
              onChange={onRadioChange}
            /> */}
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
        <div className="button buttonbooks">
          <label>
            {/* <input
              // type="button"
              value="books"
              checked={props.radioSideBar === "books"}
              onChange={onRadioChange}
            />  */}
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
        <div>Selected option is : {props.radioSideBar}</div>
      </form>

      <h3>How Many?</h3>
      <select defaultValue="10" onChange={onSelectChange}>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
      </select>
      <h5>{props.selectSideBar}</h5>
    </div>
  );
};
