import React from "react";
import "./Card.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
const string = " , @";
var house = "";
var alive = "";
// TODO - create a component which displays information about Characters
// TODO - make sure CharacterCard is expecting the right props!
export const CharacterCard = ({ character, ApiInfo }) => {
  const classes = useStyles();
  console.log(ApiInfo);

  if (ApiInfo) {
    var aliases = ApiInfo.aliases;
    var listOfAliases = aliases.join(", ");
  } //Comment outn image to work dynamically

  if (ApiInfo.house == "Braavos") {
    house = "/Images/Titan_of_Braavos.jpg";
  } else if (ApiInfo.culture == "Northmen") {
    house = "/Images/Northmen.jpg";
  } else if (ApiInfo.culture == "Valyrian") {
    house =  "/Images/Valyrian.jpg";
  } else if (ApiInfo.culture == "Westeros") {
    house = "Images/Westeros.png";
  } else {
    house = "";
  }

  if (ApiInfo.died == null) {
    alive = true;
  } else {
    alive = ApiInfo.died;
  }

  return (
    <Card className={classes.root}>
      <Typography variant="h5" component="h2">
          <b>{ApiInfo.culture}</b>
        </Typography>
      <img src= {house} className="Border" alt="Failed."/>
      <CardContent>
        <Typography variant="h5" component="h2">
          {ApiInfo.name}
        </Typography>
        <hr className = "Line"/>
        <Typography variant="h6" component="h9">
          <b>Title: </b>
          {ApiInfo.titles}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          <b>AKA:</b> <i>{listOfAliases}</i>
        </Typography>
      </CardContent>
    </Card>
  );
};
