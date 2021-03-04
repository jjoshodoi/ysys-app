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
    height: 0,
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
}));

var currentBookImage = "";
const style = {
    maxheight: 200,
    maxWidth: 200,
  }
export default function SelectedInfo(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  if (props.name == ("A Game of Thrones")) {
    currentBookImage = "Images/Books/Book1.jpg"
} else if (props.name == ("A Clash of Kings")) {
    currentBookImage = "Images/Books/Book2.jpg"
} else if (props.name == ("A Storm of Swords")) {
    currentBookImage = "Images/Books/Book3.jpg"
} else if (props.name == ("The Hedge Knight")) {
    currentBookImage = "Images/Books/Book4.jpg"
} else if (props.name == ("A Feast for Crows")) {
    currentBookImage = "Images/Books/Book5.jpg"
} else if (props.name == ("The Sworn Sword")) {
    currentBookImage = "Images/Books/Book6.jpg"
} else if (props.name == ("The Mystery Knight")) {
    currentBookImage = "Images/Books/Book7.jpg"
} else if (props.name == ("A Dance with Dragons")) {
    currentBookImage = "Images/Books/Book8.jpg"
} else if (props.name == ("The Princess and the Queen")) {
    currentBookImage = "Images/Books/Book9.jpg"
} else if (props.name == ("The Rogue Prince")) {
    currentBookImage = "Images/Books/Book10.jpg"
} else if (props.name == ("The World of Ice and Fire")) {
    currentBookImage = "Images/Books/Book11.jpg"
} else if (props.name == ("A Knight of the Seven Kingdoms")) {
    currentBookImage = "Images/Books/Book12.jpg"
} else {
    currentBookImage = "Images/Houses/GOT CARD.png"
}
  return (
    <Card className={classes.root}>
      <CardHeader
        title={props.name}
      />
      <img src={currentBookImage} style={style}/>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.coatsOfArms}
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
          <Typography >{`Author: ${props.authors}`}</Typography>
          <Typography >
            {`Number of Pages: ${props.numberOfPages}`}
          </Typography>
          <Typography>
            {`Publisher: ${props.publisher}`}
          </Typography>
          <Typography>{`Country: ${props.country}`}</Typography>
          <Typography>{`Media Type: ${props.mediaType}`}</Typography>
          <Typography>{`Released: ${props.released}`}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
