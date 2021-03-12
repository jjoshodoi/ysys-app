import React from "react";
import { CharacterCard } from "../STRETCH_Cards/Characters/CharacterCard";
import { HouseCard } from "../STRETCH_Cards/HouseCards/HouseCard";
import { BookCard } from "../STRETCH_Cards/Books/BookCard";
import "./FeedComponent.css";
import Pagination from "./Pagination";

// TODO - make sure FeedComponent is expecting the right props!
export const FeedComponent = (props) => {
  return (
    <div className={"feed"}>
      {/* TODO - add a placeholder for an empty feed */}
      {/* TODO - build up a list of results */}
      {/* TODO [STRETCH] - update this list to be a list/grid of STRETCH_Cards */}
      {(() => {
        switch (props.radioSideBar) {
          case "houses":
            return <HouseCard ApiInfo={props.ApiInfo} />;
          case "characters":

            return (
              <CharacterCard
                ApiInfo={props.ApiInfo}
                alive={props.alive}
                setAlive={props.setAlive}
                gender={props.gender}
                setGender={props.setGender}
                culture={props.culture}
                setCulture={props.setCulture}
              />
            );
          default:
            return <BookCard ApiInfo={props.ApiInfo} />;
        }
      })()}
      <Pagination
        setCurrentPage={props.setCurrentPage}
        currentPage={props.currentPage}
        links={props.links}
        radioSideBar={props.radioSideBar}
        selectSideBar={props.selectSideBar}

      />
    </div>
  );
};
