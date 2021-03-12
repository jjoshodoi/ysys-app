import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    minHeight: "359px",
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
  status: {
    background: "#47d147",
    color: "white",
    borderRadius: "8px",
    minwidth: "50px",
    padding: "2px 2px",
    marginTop: "10px",
  },
  status2: {
    background: "#ff4d4d",
    color: "white",
    borderRadius: "8px",
    minwidth: "50px",
    padding: "2px 2px",
    marginTop: "10px",
  },
});

const CharacterInfo = (props) => {
  var house = "";
  var name = "";

  if (props.item.culture === "Braavosi") {
    house = "Images/Cultures/Braavosi.jpg";
  } else if (props.item.culture === "Northmen") {
    house = "Images/Cultures/Northmen.jpg";
  } else if (props.item.culture === "Valyrian") {
    house = "Images/Cultures/Valyrian.jpg";
  } else if (props.item.culture === "Westeros") {
    house = "Images/Cultures/Westeros.png";
  } else if (props.item.culture === "Dothraki") {
    house = "Images/Cultures/Dothraki.jpg";
  } else if (props.item.culture === "Ironborn") {
    house = "Images/Cultures/Ironborn.jpg";
  } else if (props.item.culture === "Stormlands") {
    house = "Images/Cultures/Stormlands.png";
  } else if (props.item.culture === "Reach") {
    house = "Images/Cultures/Reach.png";
  } else if (props.item.culture === "Andal") {
    house = "Images/Cultures/Andal.jpg";
  } else if (props.item.culture === "Dornish") {
    house = "Images/Cultures/Dornish.jpg";
  } else if (props.item.culture === "Valemen") {
    house = "Images/Cultures/Valemen.png";
  } else if (props.item.culture === "Northern mountain clans") {
    house = "Images/Cultures/Northern Mountain Clan.png";
  } else if (props.item.culture === "Rivermen") {
    house = "Images/Cultures/Rivermen.jpg";
  } else if ((props.item.culture === "Westerman") || (props.item.culture === "Westerlands")) {
    house = "Images/Cultures/Westermen.png";
  } else if (props.item.culture === "First Men") {
    house = "Images/Cultures/Firstmen.png";
  } else if (props.item.culture === "Crannogmen") {
    house = "Images/Cultures/Crannogmen.jpg";
  } else if (props.item.culture === "Asshai") {
    house = "Images/Cultures/Asshai.png";
  } else if (props.item.culture === "Sistermen") {
    house = "Images/Cultures/Sistermen.jpg";
  } else if (props.item.culture === "Ghiscari") {
    house = "Images/Cultures/Ghiscari.png";
  } else {
    house = "Images/Houses/GOT CARD.png";
  }

  if (props.item.name == "") {
    name = props.item.aliases[0];
  } else {
    name = props.item.name;
  }
  if (props.item.aliases != null) {
    var aliases = props.item.aliases;
    var listOfAliases = aliases.join(", ");
  } else {
    listOfAliases = aliases;
  }

  if (props.item.titles != null) {
    var titles = props.item.titles;
    var listOfTitles = titles.join(", ");
  } else {
    listOfTitles = titles;
  }

  if (props.item.died == "") {
    var status = "true";
  } else {
    status = "false";
  }
  const classes = useStyles();
  return (
    <Grid item xs={6} md={4}>
      <Card className={classes.root}>
        <div className="CardHeader">
          <Typography variant="h5" component="h2">
            <b>{props.item.culture}</b>
          </Typography>
        </div>
        <img src={house} className="Border cardImg" alt="Failed." />

        <CardContent className="Card">
          <Typography variant="h5" component="h9">
            <b>{name}</b>
          </Typography>
          <hr className="Line" />
          <Typography paragraph variant="h8">
            <b>Title: </b>
            {listOfTitles}
          </Typography>
          <Typography
            paragraph
            className={classes.pos}
            color="textSecondary"
            variant="h8"
          >
            <b>AKA:</b> <em>{listOfAliases}</em>
          </Typography>
          <div>
            {(() => {
              if (status == "true") {
                return <span className={classes.status}>Alive</span>;
              } else {
                return (
                  <span className={classes.status2}>{props.item.died}</span>
                );
              }
            })()}
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CharacterInfo;
