import "../Card.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CharacterInfo from "./CharacterInfo";
import {
  Menu,
  MenuItem,
  MenuButton,
  SubMenu,
  MenuRadioGroup,
} from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';


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
    color: "black",
    minHeight: "35px",
    maxHeight: '25px',
    minwidth: "60px",
    paddingBottom: "20px",
  },
  customselect2: {
    display: "flex",
    fontsize: "1.1em",
    color: 'black',
    minHeight: "35px",
    maxHeight: '25px',
    minwidth: "60px",
    paddingBottom: "20px",
    
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
    'Female',
    'Male'
  ];
  const cultureOptions = [
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
        <div className={classes.customselect2}>
          {props.alive === "" ? (
            ""
          ) : (
            <Button variant="contained" color="primary"  onClick={() => props.setAlive("")}>
              {props.alive === true ? "Alive" : "Dead"} X
            </Button>
          )}
          {props.gender === "" ? (
            ""
          ) : (
            <Button variant="contained" color="primary"onClick={() => props.setGender("")}>
              {props.gender === "Male" ? "Male" : "Female"} X
            </Button>
          )}
          {props.culture === "" ? (
            ""
          ) : (
            <Button variant="contained" color="primary" onClick={() => props.setCulture("")}>
              {`${props.culture} X`}
            </Button>
          )}
        </div>
      </div>
      <Grid container spacing={3}>
        {props.ApiInfo.map((item, index) => (
          <CharacterInfo
            key={index}
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
