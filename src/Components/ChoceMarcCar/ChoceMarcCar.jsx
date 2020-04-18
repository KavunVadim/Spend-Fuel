import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import { Typography, CardMedia, ExpansionPanel } from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";

const ChoceMarcCar = ({ arrCars }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const useStyles = makeStyles((theme) => ({
    cover: {
      width: 150,
      paddingRight: 30,
    },
    title: {
      fontWeight: 800,
      fontSize: 18,
    },
    nameLogo: {},
  }));
  const classes = useStyles();
  const addNewPanel = () => {};
  return (
    <>
      {arrCars.map((el) => (
        <ExpansionPanel
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <ExpansionPanelSummary
            children
            className={classes.Panel}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            expandIcon={<ExpandMoreIcon />}
          >
            <Grid
              className={classes.grid}
              container
              alignItems="center"
              direction="row"
            >
              <CardMedia
                className={classes.cover}
                image={el.logo}
                component="img"
                title="chevrole"
              />

              <h2 className={classes.title}>{el.car}</h2>
            </Grid>
          </ExpansionPanelSummary>

          {arrCars.map((el) => (
            <ExpansionPanelDetails>
              <Grid
                className={classes.grid}
                container
                alignItems="center"
                direction="row"
              >
                <CardMedia
                  className={classes.cover}
                  image={el.img}
                  component="img"
                  title="chevrole"
                />
                <Typography className={classes.title} component="h2">
                  {el.name}
                </Typography>
              </Grid>
            </ExpansionPanelDetails>
          ))}
        </ExpansionPanel>
      ))}
    </>
  );
};

export default ChoceMarcCar;
