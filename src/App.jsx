import React from "react";
// This gets typography component from material ui
import * as mat from "@material-ui/core";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import useStyles from "./styles";
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {
  const classes = useStyles();

  return (
    <>
      <mat.CssBaseline />
      <mat.Grid>
        <mat.AppBar position="relative" className={classes.opaq}>
          <mat.Toolbar>
            <PhotoCameraIcon className={classes.icon} />
            <mat.Typography variant="h6" gutterBottom>
              Photo album
            </mat.Typography>
          </mat.Toolbar>
        </mat.AppBar>
      </mat.Grid>
      <main>
        <div className={classes.container}>
          <mat.Container maxWidth="sm">
            <mat.Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo album
            </mat.Typography>

            <mat.Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph
            >
              Hi viewer, this thing which i am building is for me to learn web
              frontend development using react library by creating user
              Interfaces.
            </mat.Typography>

            <div className={classes.btn}>
              <mat.Grid container spacing={2} justify="center">
                <mat.Grid item>
                  <mat.Button variant="contained" color="primary">
                    this
                  </mat.Button>
                </mat.Grid>
                <mat.Grid item>
                  <mat.Button variant="outlined" color="secondary">
                    is
                  </mat.Button>
                </mat.Grid>
              </mat.Grid>
            </div>
          </mat.Container>
        </div>
        <mat.Container className={classes.cardStyle} maxWidth="md">
          <mat.Grid container spacing={2}>
            {cards.map((card) => (
              <mat.Grid item key={card} xs={12} sm={6} md={4}>
                <mat.Card className={classes.card}>
                  <mat.CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Some image"
                  />
                  <mat.CardContent className={classes.cardContent}>
                    <mat.Typography variant="h5" component="h2">
                      hi this
                    </mat.Typography>
                    <mat.Typography variant="h6" component="p">
                      This is a media card. You can use this section to describe
                      the content.
                    </mat.Typography>
                  </mat.CardContent>
                  <mat.CardActions>
                    <mat.Button size="small" color="secondary">
                      VIEW
                    </mat.Button>
                    <mat.Button size="small" color="primary">
                      EDIT
                    </mat.Button>
                  </mat.CardActions>
                </mat.Card>
              </mat.Grid>
            ))}
          </mat.Grid>
        </mat.Container>
      </main>
      <footer className={classes.footer}>
        <mat.Typography variant="h5" align="center" gutterBottom>
          Footer
        </mat.Typography>

        <mat.Typography variant="subtitle1" align="center" gutterBottom>
          Something here to give the footer a purpose!
        </mat.Typography>
        <mat.Typography variant="subtitle2" align="center" gutterBottom>
          Copyright ©2021.
        </mat.Typography>
      </footer>
    </>
  );
};

export default App;
