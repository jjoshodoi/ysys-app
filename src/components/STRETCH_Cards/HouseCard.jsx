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
    flexWrap: 'wrap',
  },

  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '85%',
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
              <Paper className={classes.paper}
                onClick={() => changeHouse(item)}
                className={`${classes.paper} box-shadow-img`}
              >
                {item.name}
                {(() => {
                if (item.name.includes("Allyrion")) {
                    return <img className={classes.img} alt="Allryion" src="Images\Houses\House Allyrion.jpg" />
                } else if (item.name.includes("Arryn")) {
                    return <img className={classes.img} alt="Arryn" src="Images\Houses\House Arryn.jpg" />
                } else if (item.name.includes("Baratheon")) {
                  return <img className={classes.img} alt="Baratheon" src="Images\Houses\House Baratheon.jpg" />
                } else if (item.name.includes("Cerwyn")) {
                  return <img className={classes.img} alt="Cerwyn" src="Images\Houses\House Cerwyn.jpg" />
                } else if (item.name.includes("Clegane")) {
                  return <img className={classes.img} alt="Cerwyn" src="Images\Houses\House Clegane.jpg" />
                } else if (item.name.includes("Crakehall")) {
                  return <img className={classes.img} alt="Crakehall" src="Images\Houses\House Crakehall.jpg" />
                } else if (item.name.includes("Dondarrion")) {
                  return <img className={classes.img} alt="Dondarrion" src="Images\Houses\House Dondarrion.jpg" />
                } else if (item.name.includes("Frey")) {
                  return <img className={classes.img} alt="Frey" src="Images\Houses\House Frey.jpg" />
                } else if (item.name.includes("Greyjoy")) {
                  return <img className={classes.img} alt="Greyjoy" src="Images\Houses\House Greyjoy.jpg" />
                } else if (item.name.includes("Hornwood")) {
                  return <img className={classes.img} alt="Hornwood" src="Images\Houses\House Hornwood.jpg" />
                } else if (item.name.includes("Karstark")) {
                  return <img className={classes.img} alt="Karstark" src="Images\Houses\House Karstark.jpg" />
                } else if (item.name.includes("Lannister")) {
                  return <img className={classes.img} alt="Lannister" src="Images\Houses\House Lannister.jpg" />
                } else if (item.name.includes("Mallister")) {
                  return <img className={classes.img} alt="Mallister" src="Images\Houses\House Mallister.jpg" />
                } else if (item.name.includes("Martell")) {
                  return <img className={classes.img} alt="Martell" src="Images\Houses\House Martell.jpg" />
                } else if (item.name.includes("Mormont")) {
                  return <img className={classes.img} alt="Mormont" src="Images\Houses\House Mormont.jpg" />
                } else if (item.name.includes("Seaworth")) {
                  return <img className={classes.img} alt="Seaworth" src="Images\Houses\House Seaworth.jpg" />
                } else if (item.name.includes("Selmy")) {
                  return <img className={classes.img} alt="Selmy" src="Images\Houses\House Selmy.jpg" />
                } else if (item.name.includes("Stark")) {
                  return <img className={classes.img} alt="Stark" src="Images\Houses\House Stark.jpg" />
                } else if (item.name.includes("Swyft")) {
                  return <img className={classes.img} alt="Swyft" src="Images\Houses\House Swyft.jpg" />
                } else if (item.name.includes("Targaryen")) {
                  return <img className={classes.img} alt="Targaryen" src="Images\Houses\House Targaryen.jpg" />
                } else if (item.name.includes("Tully")) {
                  return <img className={classes.img} alt="Tully" src="Images\Houses\House Tully.jpg" />
                } else if (item.name.includes("Tyrell")) {
                  return <img className={classes.img} alt="Tyrell" src="Images\Houses\House Tyrell.jpg" />
                } else if (item.name.includes("Westerling")) {
                  return <img className={classes.img} alt="Westerling" src="Images\Houses\House Westerling.jpg" />
                } 
              })()}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};
