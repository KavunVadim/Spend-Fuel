import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  Typography,
  CardMedia,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
} from '@material-ui/core';

import { getCarImg, getCarLogo } from '../../helpers/imgController';
import { changeCarMarc, changeBaseInfo } from '../../store/slices/sliceChoiceMarcCar';
import storage from '../../helpers/storage';
import arrCars from '../../db/arrCars.json';

const useStyles = makeStyles((theme) => ({
  logo: {
    width: 75,
    paddingRight: '1em',
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
  link: {
    textDecoration: 'none',
    color: 'black',
    '&:hover': {
      color: 'blue',
    },
  },
}));

const ChoiceMarcCar = () => {
  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();
  dispatch(changeBaseInfo(arrCars.baseInfo));

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleChangeCars = (marc) => {
    dispatch(changeCarMarc(marc));
  };

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
            <Grid className={classes.grid} container alignItems="center" direction="row">
              <CardMedia className={classes.logo} image={getCarLogo(el.car)} component="img" />
              <h2 className={classes.title}>{el.car.toUpperCase()}</h2>
            </Grid>
          </AccordionSummary>

          {el.model.map((marc) => (
            <Link className={classes.link} to="inputRun" key={marc.id}>
              <AccordionDetails onClick={() => handleChangeCars(marc)} key={marc.id}>
                <Grid className={classes.grid} container alignItems="center" direction="row">
                  <CardMedia className={classes.car} image={getCarImg(marc.name)} component="img" />
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
