import React, { useState } from "react";
import "../Card.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CharacterInfo from "./CharacterInfo";
import { Select } from "@material-ui/core";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";

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
  customselect: {
    display: "flex",
    fontsize: "1.1em",
    color: "white",
    minHeight: "35px",
    minwidth: "60px",
    paddingBottom: "50px",
  },
});
const string = " , @";
//const [status, setStatus] = useState('');

export const CharacterCard = ({ character, ApiInfo }) => {
  const classes = useStyles();

  const setStatus = (e) => {
    //setText(t => t + `[MenuItem] ${e.value} clicked\n\n`);
    return false; //Return all cards with "alive" status
  };
  return (
    <ul>
      <div className={classes.customselect}>
        <Menu menuButton={<MenuButton>Filter By:</MenuButton>}>
          <MenuItem value="Alive" onClick={setStatus}>
            Alive
          </MenuItem>
          <MenuItem value="Dead" onClick={setStatus}>
            Dead
          </MenuItem>
        </Menu>
      </div>
      <Grid container spacing={3}>
        {ApiInfo.map((item) => (
          <CharacterInfo item={item} />
        ))}
      </Grid>
    </ul>
  );
};
