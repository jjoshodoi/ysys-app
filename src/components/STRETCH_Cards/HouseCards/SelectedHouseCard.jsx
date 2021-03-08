import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 450,
  },
  media: {
    maxHeight: 10,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  img: {
    margin: "auto",
    display: "block",
    width: '200px',
    height: "250px",
  },
  img2: {
    margin: "auto",
    display: "block",
    width: '400px',
    height: "250px",
    aspectRatio: 1.5, 
  },
}));

var currentLord = "";
var currentHouseImage = "";
const style = {
  maxheight: 300,
  maxWidth: 500,
};
export default function SelectedInfo(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  if (props.currentLord == "") {
    currentLord = "N/A";
  } else {
    currentLord = props.currentLord;
  }
  if (props.name.includes("Allyrion")) {
    currentHouseImage = "Images/Houses/House Allyrion.jpg";
  } else if (props.name.includes("Arryn")) {
    currentHouseImage = "Images/Houses/House Arryn.jpg";
  } else if (props.name.includes("Baelish")) {
    currentHouseImage = "Images/Houses/House Baelish.jpg";
  } else if (props.name.includes("Baratheon")) {
    currentHouseImage = "Images/Houses/House Baratheon.jpg";
  } else if (props.name.includes("Blackwood")) {
    currentHouseImage = "Images/Houses/House Blackwood.jpg";
  } else if (props.name.includes("Bolton")) {
    currentHouseImage = "Images/Houses/House Bolton.jpg";
  } else if (props.name.includes("Bracken")) {
    currentHouseImage = "Images/Houses/House Bracken.jpg";
  } else if (props.name.includes("Clegane")) {
    currentHouseImage = "Images/Houses/House Clegane.jpg";
  } else if (props.name.includes("Connington")) {
    currentHouseImage = "Images/Houses/House Connington.jpg";
  } else if (props.name.includes("Crakehall")) {
    currentHouseImage = "Images/Houses/House Crakehall.jpg";
  } else if (props.name.includes("Dayne")) {
    currentHouseImage = "Images/Houses/House Dayne.jpg";
  } else if (props.name.includes("Dondarrion")) {
    currentHouseImage = "Images/Houses/House Dondarrion.jpg";
  } else if (props.name.includes("Florent")) {
    currentHouseImage = "Images/Houses/House Florent.jpg";
  } else if (props.name.includes("Frey")) {
    currentHouseImage = "Images/Houses/House Frey.jpg";
  } else if (props.name.includes("Glover")) {
    currentHouseImage = "Images/Houses/House Glover.jpg";
  } else if (props.name.includes("Greyjoy")) {
    currentHouseImage = "Images/Houses/House Greyjoy.jpg";
  } else if (props.name.includes("Hornwood")) {
    currentHouseImage = "Images/Houses/House Hornwood.jpg";
  } else if (props.name.includes("Karstark")) {
    currentHouseImage = "Images/Houses/House Karstark.jpg";
  } else if (props.name.includes("Lannister")) {
    currentHouseImage = "Images/Houses/House Lannister.jpg";
  } else if (props.name.includes("Mallister")) {
    currentHouseImage = "Images/Houses/House Mallister.jpg";
  } else if (props.name.includes("Marbrand")) {
    currentHouseImage = "Images/Houses/House Marbrand.jpg";
  } else if (props.name.includes("Martell")) {
    currentHouseImage = "Images/Houses/House Martell.jpg";
  } else if (props.name.includes("Mormont")) {
    currentHouseImage = "Images/Houses/House Mormont.jpg";
  } else if (props.name.includes("Redwyne")) {
    currentHouseImage = "Images/Houses/House Redwyne.jpg";
  } else if (props.name.includes("Seaworth")) {
    currentHouseImage = "Images/Houses/House Seaworth.jpg";
  } else if (props.name.includes("Selmy")) {
    currentHouseImage = "Images/Houses/House Selmy.jpg";
  } else if (props.name.includes("Stark")) {
    currentHouseImage = "Images/Houses/House Stark.jpg";
  } else if (props.name.includes("Swyft")) {
    currentHouseImage = "Images/Houses/House Swyft.jpg";
  } else if (props.name.includes("Targaryen")) {
    currentHouseImage = "Images/Houses/House Targaryen.jpg";
  } else if (props.name.includes("Tarth")) {
    currentHouseImage = "Images/Houses/House Tarth.jpg";
  } else if (props.name.includes("Tully")) {
    currentHouseImage = "Images/Houses/House Tully.jpg";
  } else if (props.name.includes("Tyrell")) {
    currentHouseImage = "Images/Houses/House Tyrell.jpg";
  } else if (props.name.includes("Westerling")) {
    currentHouseImage = "Images/Houses/House Westerling.jpg";
  } else if (props.name.includes("Whent")) {
    currentHouseImage = "Images/Houses/House Whent.jpg";
  } else {
    currentHouseImage = "Images/Houses/GOT CARD.png";
  }

  if (props.words == "") {
    var motto = "N/a";
  } else {
    motto = props.words;
  }
  return (
    <Card className={classes.root}>
      <CardHeader
        title={props.name}
        subheader={`Current Lord: ${currentLord}`}
      />
      {(() => {
        if (currentHouseImage == "Images/Houses/GOT CARD.png") {
          return (
            <img className={classes.img2}
              src={currentHouseImage} 
              style={style} 
              size={5}/>
          )
        } else {
          return (
            <img className={classes.img}
              src={currentHouseImage} 
              style={style} 
              size={5}/>
          )
        }
      })()}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Motto:  {motto}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>{`Region: ${props.region}`}</Typography>
          <Typography>
            {`Founded: ${props.founded}`}
          </Typography>
          <Typography>{`Cadet Branches: ${props.cadetBranches}`}</Typography>
          <Typography>
            {`Ancestral Weapons: ${props.ancestralWeapons}`}
          </Typography>
          <Typography>{`Died Out: ${props.diedOut}`}</Typography>
          <Typography>{`Titles: ${props.titles}`}</Typography>
          <Typography>{`Founded: ${props.founded}`}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
