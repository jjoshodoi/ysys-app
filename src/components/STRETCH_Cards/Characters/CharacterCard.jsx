import React from "react";
import "../Card.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CharacterInfo from "./CharacterInfo";
import { Select, MenuItem } from "@material-ui/core";

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
  customselect:  {
    display: 'block',
    fontsize: '1.1em',
  },
});
const string = " , @";
var house = "";
// TODO - create a component which displays information about Characters
// TODO - make sure CharacterCard is expecting the right props!
export const CharacterCard = ({ character, ApiInfo }) => {
  const classes = useStyles();

  const onSelectChange = (event) => {
    event.preventDefault();
    ApiInfo.setSelectSideBar(event.target.value);
    console.log(event.target.value);
  };
  return (
    <ul>
      <div className={classes.customselect}>
        <h3>
            Filter Characters:{""}
            <Select defaultValue="Alive" onChange={onSelectChange}>
            <MenuItem value="Alive">Alive</MenuItem>
            <MenuItem value="Dead">Dead</MenuItem>
            </Select>
        </h3>
        </div>
      <Grid container spacing={3}>
        {ApiInfo.map((item) => (
          <CharacterInfo item={item} />
        ))}
      </Grid>
    </ul>

  );
};
