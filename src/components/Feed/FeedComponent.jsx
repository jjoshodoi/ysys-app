import React from "react";
import { CharacterCard } from "../STRETCH_Cards/CharacterCard";
import { HouseCard } from "../STRETCH_Cards/HouseCard";
import { BookCard } from "../STRETCH_Cards/BookCard";
import "./FeedComponent.css";

// TODO - make sure FeedComponent is expecting the right props!
export const FeedComponent = (props) => {
  return (
    <div className={"content"}>
      {/* TODO - add a placeholder for an empty feed */}
      {/* TODO - build up a list of results */}
      {/* TODO [STRETCH] - update this list to be a list/grid of STRETCH_Cards */}
      {(() => {
        switch (props.radioSideBar) {
          case "houses":
            return <HouseCard ApiInfo={props.ApiInfo} />;
          case "characters":
            return <CharacterCard ApiInfo={props.ApiInfo} />;
          default:
            return <BookCard ApiInfo={props.ApiInfo} />;
        }
      })()}
    </div>
  );
};
