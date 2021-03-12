import React, { useState, useEffect } from "react";
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

export const CharacterCard = (props) => {
  // const [alive, setAlive] = useState("");
  console.log(props.setAlive);

  const classes = useStyles();

  return (
    <ul>
      <div className={classes.customselect}>
        <Menu menuButton={<MenuButton>Filter By:</MenuButton>}>
          <MenuItem value="Alive" onClick={() => props.setAlive("")}>
            None
          </MenuItem>
          <MenuItem value="Alive" onClick={() => props.setAlive(true)}>
            Alive
          </MenuItem>
          <MenuItem value="Dead" onClick={() => props.setAlive(false)}>
            Dead
          </MenuItem>
        </Menu>
      </div>
      <Grid container spacing={3}>
        {props.ApiInfo.map((item) =>
          props.alive == "" ? (
            <CharacterInfo item={item} alive={props.alive} />
          ) : props.alive == "Alive" && item.died == "" ? (
            <CharacterInfo item={item} alive={props.alive} />
          ) : props.alive == "Dead" && item.died != "" ? (
            <CharacterInfo item={item} alive={props.alive} />
          ) : (
            ""
          )
        )}
      </Grid>
    </ul>
  );
};
