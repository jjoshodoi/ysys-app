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
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: "110px",
    height: "135px",
    flexWrap: "wrap",
    
  },

  img: {
    margin: "auto",
    display: "block",
    width: "110px",
    height: "135px",

  },
}));

export const BookCard = (props) => {
  const [currentBook, setcurrentBook] = useState(null);
  const [pressedABookCard, setPressedABookCard] = useState(false);
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
  const released = currentBook != null ? currentBook.released : "";

  return (
    <div className="column2">
      <div className="left70Column">
        <div className="infoBoard">
          <center>
            {pressedABookCard ? (
              <SelectedInfo
                name={name}
                authors={authors}
                numberOfPages={pages}
                publisher={publisher}
                country={country}
                mediaType={mediaType}
                released={released}
              />
            ) : (
              <center><h1 class="title">Please Select a Book</h1></center>
            )}
          </center>
        </div>
      </div>
      <div id="househeading"><p id="househeadingpara"><b>Books</b></p></div>
      <div className="right30Column">
        <Grid container spacing={3}>
          {props.ApiInfo.map((item) => (
            <Grid item xs={12} md={5} justifyContent = "center">
              <Paper
                onClick={() => {
                  setPressedABookCard(true);
                  changeBook(item);
                }}
                className={`${classes.paper} box-shadow-img`}
              >
                {(() => {
                  if (item.name == "A Game of Thrones") {
                    return (
                      <img
                        className={classes.img}
                        alt="A Game of Thrones"
                        src="Images/Books/Book1.jpg"
                      />
                    );
                  } else if (item.name == "A Clash of Kings") {
                    return (
                      <img
                        className={classes.img}
                        alt="A Clash of Kings"
                        src="Images/Books/Book2.jpg"
                      />
                    );
                  } else if (item.name == "A Storm of Swords") {
                    return (
                      <img
                        className={classes.img}
                        alt="A Storm of Swords"
                        src="Images/Books/Book3.jpg"
                      />
                    );
                  } else if (item.name == "The Hedge Knight") {
                    return (
                      <img
                        className={classes.img}
                        alt="The Hedge Knight"
                        src="Images/Books/Book4.jpg"
                      />
                    );
                  } else if (item.name == "A Feast for Crows") {
                    return (
                      <img
                        className={classes.img}
                        alt="A Feast for Crows"
                        src="Images/Books/Book5.jpg"
                      />
                    );
                  } else if (item.name == "The Sworn Sword") {
                    return (
                      <img
                        className={classes.img}
                        alt="The Sworn Swords"
                        src="Images/Books/Book6.jpg"
                      />
                    );
                  } else if (item.name == "The Mystery Knight") {
                    return (
                      <img
                        className={classes.img}
                        alt="The Mystery Knight"
                        src="Images/Books/Book7.jpg"
                      />
                    );
                  } else if (item.name == "A Dance with Dragons") {
                    return (
                      <img
                        className={classes.img}
                        alt="A Dance with Dragons"
                        src="Images/Books/Book8.jpg"
                      />
                    );
                  } else if (item.name == "The Princess and the Queen") {
                    return (
                      <img
                        className={classes.img}
                        alt="The Princess and the Queen"
                        src="Images/Books/Book9.jpg"
                      />
                    );
                  } else if (item.name == "The Rogue Prince") {
                    return (
                      <img
                        className={classes.img}
                        alt="The Rogue Prince"
                        src="Images/Books/Book10.jpg"
                      />
                    );
                  } else if (item.name == "The World of Ice and Fire") {
                    return (
                      <img
                        className={classes.img}
                        alt="The World of Ice and Fire"
                        src="Images/Books/Book11.jpg"
                      />
                    );
                  } else if (item.name == "A Knight of the Seven Kingdoms") {
                    return (
                      <img
                        className={classes.img}
                        alt="A Knight of the Seven Kingdoms"
                        src="Images/Books/Book12.jpg"
                      />
                    );
                  }
                })()}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};
