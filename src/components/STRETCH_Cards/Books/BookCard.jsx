import "../../../components/Feed/FeedComponent.css";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import SelectedInfo from "../Books/SelectedBookCard";
// TODO - create a component which displays information about Books

// TODO - make sure bookCard is expecting the right props!

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: "118px",
    height: "142px",
    flexWrap: "wrap",
  },

  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "85%",
  },
}));

export const BookCard = (props) => {
  const [currentBook, setcurrentBook] = useState(null);
  const classes = useStyles();

  const changeBook = (item) => {
    setcurrentBook(item);
  };
  const name = currentBook != null ? currentBook.name : "";
  const authors = currentBook != null ? currentBook.authors : "";
  const pages = currentBook != null ? currentBook.numberOfPages : "";
  const publisher = currentBook != null ? currentBook.publisher : "";
  const country = currentBook != null ? currentBook.country : "";
  const mediaType = currentBook != null ? currentBook.mediaType : "";
  const released =
  currentBook != null ? currentBook.released : "";
  
  return (
    <div className="column2">
      <div className="left70Column">
        <div className="infoBoard">
        <center>
          <SelectedInfo
              name={name}
              authors={authors}
              numberOfPages={pages}
              publisher={publisher}
              country={country}
              mediaType={mediaType}
              released={released}
              />
            </center>
        </div>
      </div>
      <div className="right30Column">
        <Grid container spacing={3}>
          {props.ApiInfo.map((item) => (
            <Grid item xs={12} md={6}>
              <Paper
                onClick={() => {
                  changeBook(item);
                }}
                className={`${classes.paper} box-shadow-img`}
              >
                {item.name}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};
