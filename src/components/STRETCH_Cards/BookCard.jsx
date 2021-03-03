import "../../components/Feed/FeedComponent.css";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";

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
  },
}));

export const BookCard = (props) => {
  const [currentBook, setcurrentBook] = useState(null);
  const classes = useStyles();

  const changeBook = (item) => {
    setcurrentBook(item);
  };
  return (
    <div className="column2">
      <div className="left70Column">
        Name: {currentBook && currentBook.name}
        <br />
        Author: {currentBook && currentBook.authors}
        <br />
        Country: {currentBook && currentBook.country}
        <br />
        MediaType: {currentBook && currentBook.mediaType}
        <br />
        No Of Pages: {currentBook && currentBook.numberOfPages}
        <br />
        No Of Pages: {currentBook && currentBook.numberOfPages}
        <br />
        Released: {currentBook && currentBook.released}
        <br />
        Publisher: {currentBook && currentBook.publisher}
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
