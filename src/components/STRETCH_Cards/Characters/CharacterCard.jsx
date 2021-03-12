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
  const genderOptions = [
    'None',
    'Female',
    'Male'
  ];
  const cultureOptions = [
    'None',
    'Andal',
    'Asshai',
    'Braavosi',
    'Crannogmen',
    'Dornish',
    'Dothraki',
    'First Men',
    'Ghiscari',
    'Ironborn',
    'Northern mountain clans',
    'Northmen',
    'Reach',
    'Rivermen',
    'Sistermen',
    'Stormlands',
    'Valemen',
    'Valyrian',
    'Westeros',
    'Westerman'
  ];
 

  return (
    <ul>
      <div className={classes.customselect}>
        <Menu menuButton={<MenuButton>Filter By:</MenuButton>} >
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
              {genderOptions.map((genderOptions) => (
            <MenuItem key={genderOptions} value={genderOptions} onClick={() => props.setGender(genderOptions)}>
              {genderOptions}
          </MenuItem>
          ))}
            </MenuRadioGroup>  
          </SubMenu>
          <SubMenu label="Culture">
            <MenuRadioGroup value={filterCulture} onChange={e => setFilterCulture(e.value)}>
              {cultureOptions.map((cultureOptions) => (
          <MenuItem key={cultureOptions} value={cultureOptions} onClick={() => props.setCulture(cultureOptions)}>
            {cultureOptions}
          </MenuItem>
          ))}
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
