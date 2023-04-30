import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import {
  Typography,
  CardMedia,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core';
import { imgCar, logoCar } from '../../helpers/imgController';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import arrCars from '../../db/arrCars.json';
import {
  changeCarMarc,
  changeBaseInfo,
} from '../../store/sliceChoiceMarcCar/sliceChoiceMarcCar';

const ChoiceMarcCar = () => {
  const [expanded, setExpanded] = useState(false);

  const dispatch = useDispatch();
  dispatch(changeBaseInfo(arrCars.baseInfo));

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const useStyles = makeStyles((theme) => ({
    logo: {
      width: 75,
      paddingRight: '2em',
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
      paddingRight: '1em',
    },
  }));
  const classes = useStyles();

  return (
    <>
      {arrCars.cars.map((el, index) => (
        <Accordion
          expanded={expanded === `panel${index + 1}`}
          onChange={handleChange(`panel${index + 1}`)}
          key={index}
        >
          <AccordionSummary
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
                image={logoCar(el.car)}
                component="img"
                loading="lazy"
              />
              <h2 className={classes.title}>{el.car.toUpperCase()}</h2>
            </Grid>
          </AccordionSummary>

          {el.model.map((marc) => (
            <Link to="inputRun" key={marc.id}>
              <AccordionDetails
                onClick={() => dispatch(changeCarMarc(marc))}
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
                    image={imgCar(marc.name)}
                    component="img"
                    loading="lazy"
                  />
                  <Typography className={classes.title} component="h2">
                    {marc.name.toUpperCase()}
                  </Typography>
                </Grid>
              </AccordionDetails>
            </Link>
          ))}
        </Accordion>
      ))}
    </>
  );
};

export default ChoiceMarcCar;
