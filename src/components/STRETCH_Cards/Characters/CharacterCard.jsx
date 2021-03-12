import "../Card.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CharacterInfo from "./CharacterInfo";
import { Menu, MenuItem, MenuButton, SubMenu, MenuRadioGroup } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import React, { useState } from 'react';


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
  const [status, setStatus] = useState('None');
  const [filterGender, setFilterGender] = useState('None');
  const [filterCulture, setFilterCulture] = useState('None');


  return (
    <ul>
      <div className={classes.customselect}>
        <Menu menuButton={<MenuButton>Filter By:</MenuButton>}>
          <SubMenu label="Status">
            <MenuRadioGroup value={status} onChange={e => setStatus(e.value)}>
              <MenuItem value="None" onClick={() => props.setAlive("")}>
                None
              </MenuItem>
              <MenuItem value="Alive" onClick={() => props.setAlive(true)}>
                Alive
              </MenuItem>
              <MenuItem value="Dead" onClick={() => props.setAlive(false)}>
                Dead
              </MenuItem>
              </MenuRadioGroup>
          </SubMenu>
          <SubMenu label="Gender">
            <MenuRadioGroup value={filterGender} onChange={e => setFilterGender(e.value)}>
              <MenuItem value="None" onClick={() => props.setGender("")}>
                None
              </MenuItem>
              <MenuItem value="Female" onClick={() => props.setGender("Female")}>
                Female
              </MenuItem>
              <MenuItem value="Male" onClick={() => props.setGender("Male")}>
                Male
              </MenuItem>
            </MenuRadioGroup>
          </SubMenu>
          <SubMenu label="Culture">
            <MenuRadioGroup value={filterCulture} onChange={e => setFilterCulture(e.value)}>
              <MenuItem value="None" onClick={() => props.setCulture("")}>
                None
              </MenuItem>
              <MenuItem value="Braavosi" onClick={() => props.setCulture("Braavosi")}>
                Braavosi
              </MenuItem>
              <MenuItem value="Northmen"onClick={() => props.setCulture("Northmen")}>
                Northmen
              </MenuItem>
              <MenuItem value="Valyrian" onClick={() => props.setCulture("Valyrian")}>
                Valyrian
              </MenuItem>
              <MenuItem value="Westeros"onClick={() => props.setCulture("Westeros")}>
                Westeros
              </MenuItem>
              <MenuItem value="Dothraki"onClick={() => props.setCulture("Dothraki")}>
                Dothraki
              </MenuItem>
              <MenuItem value="Ironborn"onClick={() => props.setCulture("Ironborn")}>
                Ironborn
              </MenuItem>
              <MenuItem value="Stormlands"onClick={() => props.setCulture("Stormlands")}>
                Stormlands
              </MenuItem>
              <MenuItem value="Reach"onClick={() => props.setCulture("Reach")}>
                Reach
              </MenuItem>
              <MenuItem value="Andal"onClick={() => props.setCulture("Andal")}>
                Andal
              </MenuItem>
              <MenuItem value="Dornish"onClick={() => props.setCulture("Dornish")}>
                Dornish
              </MenuItem>
              <MenuItem value="Valemen"onClick={() => props.setCulture("Valemen")}>
                Valemen
              </MenuItem>
              <MenuItem value="Northen Mountain Clan"onClick={() => props.setCulture("Northern mountain clans")}>
                Northen Mountain Clan
              </MenuItem>
              <MenuItem value="Rivermen"onClick={() => props.setCulture("Rivermen")}>
                Rivermen
              </MenuItem>
              <MenuItem value="Westerman"onClick={() => props.setCulture("Westerman")}>
                Westerman
              </MenuItem>
              <MenuItem value="Firstmen"onClick={() => props.setCulture("Firstmen")}>
                Firstmen
              </MenuItem>
              <MenuItem value="Crannogmen"onClick={() => props.setCulture("Crannogmen")}>
                Crannogmen
              </MenuItem>
              <MenuItem value="Asshai"onClick={() => props.setCulture("Asshai")}>
                Asshai
              </MenuItem>
              <MenuItem value="Sistermen"onClick={() => props.setCulture("Sistermen")}>
                Sistermen
              </MenuItem>
              <MenuItem value="Ghiscari"onClick={() => props.setCulture("Ghiscari")}>
                Ghiscari
              </MenuItem>
            </MenuRadioGroup>  
          </SubMenu>
        </Menu>
        <div>
          {props.alive === "" ? (
            ""
          ) : (
            <button onClick={() => props.setAlive("")}>
              {props.alive === true ? "Alive" : "Dead"} X
            </button>
          )}
          {props.gender === "" ? (
            ""
          ) : (
            <button onClick={() => props.setGender("")}>
              {props.gender === "Male" ? "Male" : "Female"} X
            </button>
          )}
          {props.culture === "" ? (
            ""
          ) : (
            <button onClick={() => props.setCulture("")}>
              {`${props.culture} X`}
            </button>
          )}
        </div>
      </div>
      <Grid container spacing={3}>
        {props.ApiInfo.map((item) => (
          <CharacterInfo
            item={item}
            alive={props.alive}
            gender={props.gender}
            culture={props.culture}
          />
        ))}
      </Grid>
    </ul>
  );
};
