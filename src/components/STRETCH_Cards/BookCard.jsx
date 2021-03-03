import "../../components/Feed/FeedComponent.css";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";

// TODO - create a component which displays information about Books

// TODO - make sure HouseCard is expecting the right props!

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: "118px",
    height: "142px",
  },
}));

export const BookCard = (props) => {
  const [currentBook, setcurrentBook] = useState(null);
  const [characterName, setCharacterName] = useState("");
  const [houseOverlordName, setHouseOverlordName] = useState("");
  const classes = useStyles();

  const changeHouse = (item) => {
    setcurrentBook(item);
  };

  const getCharacterName = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCharacterName(data.name);
    } catch (error) {
      setCharacterName("");
      console.log(`Error: ${error.message}`);
    }
  };

  const getHouseOverlordName = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.name);
      if (data.name === "") {
        setHouseOverlordName("");
      } else {
        setHouseOverlordName(data.name);
      }
    } catch (error) {
      setHouseOverlordName("");
      console.log(`Error: ${error.message}`);
    }
  };

  return (
    <div className="column2">
      <div className="left70Column">
        Name: {currentBook && currentBook.name}
        <br />
        Region: {currentBook && currentBook.region}
        <br />
        Coat Of Arms: {currentBook && currentBook.coatOfArms}
        <br />
        CurrentLordName: {currentBook && characterName}
        <br />
        House OverLordName: {currentBook && houseOverlordName}
      </div>
      <div className="right30Column">
        <Grid container spacing={3}>
          {props.ApiInfo.map((item) => (
            <Grid item xs={12} md={6}>
              <Paper
                onClick={() => {
                  changeHouse(item);
                  getCharacterName(item.currentLord);
                  getHouseOverlordName(item.overlord);
                }}
                className={`${classes.paper} box-shadow-img`}
              >
                {item.name}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};
