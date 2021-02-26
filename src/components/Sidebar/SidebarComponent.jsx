import React, { useState } from "react";
import "./SidebarComponent.css";

// TODO - make sure SidebarComponent is expecting the right props!
export const SidebarComponent = (
  {
    //   formSubmit,
    //   selectedOption,
    //   onValueChange,
  }
) => {
  // TODO - reflect expanded/collapsed state in sidebar's className
  // TODO - make sure the classNames in the SidebarComponent.css match up with the classes you choose!
  const [selectedSideBarOption, setSelectedSideBarOption] = useState("Male");

  const onValueChange = (event) => {
    setSelectedSideBarOption(event.target.value);
    console.log(event.target.value);
  };

  const formSubmit = (event) => {
    event.preventDefault();
    console.log(selectedSideBarOption);
  };

  return (
    <div className={"sidebar"}>
      <form onSubmit={formSubmit}>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Male"
              checked={selectedSideBarOption === "Male"}
              onChange={onValueChange}
            />
            Male
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Female"
              checked={selectedSideBarOption === "Female"}
              onChange={onValueChange}
            />
            Female
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Other"
              checked={selectedSideBarOption === "Other"}
              onChange={onValueChange}
            />
            Other
          </label>
        </div>
        <div>Selected option is : {selectedSideBarOption}</div>
        <button className="btn btn-default" type="submit">
          Submit
        </button>
      </form>
      {/* TODO - flesh out this component to include all controls for configuring your data retrieval.
             This must include the category (books/characters/houses)
             [STRETCH] Feel free to add anything else you want, for example:
                * a dropdown to select number of items you want to retrieve
                * a search bar to search for a particular item
             You could even change what you can see in the search bar based on what you are searching for.
             E.g add a dropdown to determine which field you're searching on ("name"/"title"/"alias")
        */}
    </div>
  );
};
