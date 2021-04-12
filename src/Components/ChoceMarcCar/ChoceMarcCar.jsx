import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";

import {
  Typography,
  CardMedia,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from "@material-ui/core";

const ChoceMarcCar = ({ arrCars, getCarMarc }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const useStyles = makeStyles((theme) => ({
    logo: {
      width: 75,
      paddingRight: "2em",
    },
    title: {
      fontWeight: 800,
      fontSize: 18,
    },
    PanelMy: {
      height: 100,
    },
    car: {
      width: 150,
      paddingRight: "1em",
    },
  }));
  const classes = useStyles();

  return (
    <>
      {arrCars.map((el, index) => (
        <ExpansionPanel
          expanded={expanded === `panel${index + 1}`}
          onChange={handleChange(`panel${index + 1}`)}
          key={el.logo}
        >
          <ExpansionPanelSummary
            children
            className={classes.PanelMy}
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
                className={classes.logo}
                image={el.logo}
                component="img"
              />
              <h2 className={classes.title}>{el.car.toUpperCase()}</h2>
            </Grid>
          </ExpansionPanelSummary>

          {el.model.map((marc) => (
            <ExpansionPanelDetails
              onClick={() => getCarMarc(marc)}
              key={marc.id}
            >
              <Grid
                className={classes.grid}
                container
                alignItems="center"
                direction="row"
              >
                <CardMedia
                  className={classes.car}
                  image={marc.img}
                  component="img"
                />
                <Typography className={classes.title} component="h2">
                  {marc.name.toUpperCase()}
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
