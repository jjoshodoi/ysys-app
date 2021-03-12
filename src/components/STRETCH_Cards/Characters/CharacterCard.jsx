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

export const CharacterCard = ({ character, ApiInfo }) => {
  const [alive, setAlive] = useState("");
  console.log(setAlive);

  const classes = useStyles();

  return (
    <ul>
      <div className={classes.customselect}>
        <Menu menuButton={<MenuButton>Filter By:</MenuButton>}>
          <MenuItem value="Alive" onClick={() => setAlive("Alive")}>
            Alive
          </MenuItem>
          <MenuItem value="Dead" onClick={() => setAlive("Dead")}>
            Dead
          </MenuItem>
        </Menu>
      </div>
      <Grid container spacing={3}>
        {ApiInfo.map((item) => (
          alive == "" ? <CharacterInfo item={item} alive={alive}/> : ((alive == "Alive") && (item.died == "")) ? <CharacterInfo item={item} alive={alive}/> : ((alive == "Dead") && (item.died != "")) ? <CharacterInfo item={item} alive={alive}/> : "")
        )}
      </Grid>
    </ul>
  );
};
