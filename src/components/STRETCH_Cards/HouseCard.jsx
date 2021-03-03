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
  const classes = useStyles();

  const changeHouse = (item) => {
    setCurrentHouse(item);
  };

  const getCharacterName = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
    } catch (error) {
      return console.log(error.message);
    }
  };

  return (
    <div className="column2">
      <div className="leftColumn">
        {currentHouse && currentHouse.name}
        {currentHouse && currentHouse.region}
        {currentHouse && currentHouse.coatOfArms}
        {/* {getCharacterName(currentHouse.currentLord)} */}

        {/* {currentHouse && currentHouse.name}
        {currentHouse && currentHouse.name}
        {currentHouse && currentHouse.name}
        {currentHouse && currentHouse.name}
        {currentHouse && currentHouse.name} */}
      </div>
      <div className="rightColumn">
        <Grid container spacing={3}>
          {props.ApiInfo.map((item) => (
            <Grid item xs={6}>
              <Paper
                onClick={() => changeHouse(item)}
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
