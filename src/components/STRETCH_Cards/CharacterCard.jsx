import React from "react";
import "./Card.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CharacterInfo from "./CharacterInfo";
// import northMen from '../../../public/Images/Northmen.jpeg'

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
// TODO - create a component which displays information about Characters
// TODO - make sure CharacterCard is expecting the right props!
export const CharacterCard = ({ character, ApiInfo }) => {
  const classes = useStyles();

  // console.log(ApiInfo);

  if (ApiInfo.aliases) {
    var aliases = ApiInfo.aliases;
    var listOfAliases = aliases.join(", ");
  } //Comment outn image to work dynamically

  return (
    <ul>
      <Grid container spacing={3}>
        {ApiInfo.map((item) => (
          <CharacterInfo item={item} />
        ))}
      </Grid>
    </ul>

    // <Card className={classes.root}>
    //   <Typography variant="h5" component="h2">
    //     <b>{ApiInfo.culture}</b>
    //   </Typography>
    //   <img src={house} className="Border" alt="Failed." />
    //   <CardContent>
    //     <Typography variant="h5" component="h2">
    //       {ApiInfo[0].name}
    //     </Typography>
    //     <hr className="Line" />
    //     <Typography variant="h6" component="h9">
    //       <b>Title: </b>
    //       {ApiInfo.titles}
    //     </Typography>
    //     <Typography className={classes.pos} color="textSecondary">
    //       <b>AKA:</b> <i>{listOfAliases}</i>
    //     </Typography>
    //   </CardContent>
    // </Card>
  );
};
