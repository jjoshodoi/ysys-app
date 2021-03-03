import "./Card.css";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import getData from "../../api/api";

// TODO - create a component which displays information about Houses

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

export const HouseCard = (props) => {
  const [currentHouse, setCurrentHouse] = useState(null);
  const [characterName, setCharacterName] = useState([]);
  const [houseOverlordName, setHouseOverlordName] = useState([]);
  const classes = useStyles();

  const changeHouse = (item) => {
    setCurrentHouse(item);
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
      <div className="leftColumn">
        Name: {currentHouse && currentHouse.name}
        <br />
        Region: {currentHouse && currentHouse.region}
        <br />
        Coat Of Arms: {currentHouse && currentHouse.coatOfArms}
        <br />
        CurrentLordName: {currentHouse && characterName}
        <br />
        House OverLordName: {currentHouse && houseOverlordName}
      </div>
      <div className="rightColumn">
        <Grid container spacing={3}>
          {props.ApiInfo.map((item) => (
            <Grid item xs={6}>
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
