import React from "react";
import "../Card.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CharacterInfo from "./CharacterInfo";
import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
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
  console.log(props.setAlive);
  console.log(props.setGender);
  const classes = useStyles();

  return (
    <ul>
      <div className={classes.customselect}>
        <Menu menuButton={<MenuButton>Filter By:</MenuButton>}>
          <SubMenu label="Status">
            <MenuItem value="Alive" onClick={() => props.setAlive("")}>
              None
            </MenuItem>
            <MenuItem value="Alive" onClick={() => props.setAlive(true)}>
              Alive
            </MenuItem>
            <MenuItem value="Dead" onClick={() => props.setAlive(false)}>
              Dead
            </MenuItem>
          </SubMenu>
          <SubMenu label="Gender">
            <MenuItem value="Female" onClick={() => props.setGender("")}>
              None
            </MenuItem>
            <MenuItem value="Female" onClick={() => props.setGender("Female")}>
              Female
            </MenuItem>
            <MenuItem value="Male" onClick={() => props.setGender("Male")}>
              Male
            </MenuItem>
          </SubMenu>
        </Menu>
      </div>
      <Grid container spacing={3}>
        {props.ApiInfo.map((item) => (
          <CharacterInfo
            item={item}
            alive={props.alive}
            gender={props.gender}
          />
        ))}
      </Grid>
    </ul>
  );
};
