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
    props.setRadioSideBar(event.target.value);
    console.log(event.target.value);
  };

  const onSelectChange = (event) => {
    props.setSelectSideBar(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className={"sidebar"}>
      <form>
        <div className="button buttonhouses">
          <label>
            <input
              type="button"
              value="houses"
              checked={props.radioSideBar === "houses"}
              onChange={onRadioChange}
            />
            Houses
          </label>
        </div>
        <div className="button buttoncharacters">
          <label>
            <input
              type="button"
              value="characters"
              checked={props.radioSideBar === "characters"}
              onChange={onRadioChange}
            />
            Characters
          </label>
        </div>
        <div className="button buttonbooks">
          <label>
            <input
              type="button"
              value="books"
              checked={props.radioSideBar === "books"}
              onChange={onRadioChange}
            />
            Books
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
