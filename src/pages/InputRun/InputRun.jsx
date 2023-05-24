import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

import { changeTotalInfo } from '../../store/slices/sliceInputRun';

import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CardMedia,
  Typography,
  Container,
} from '@material-ui/core';

import storage from '../../helpers/storage';
import { getCarImg } from '../../helpers/imgController';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  form: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  text: {
    height: 60,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  containerSelect: {
    display: 'flex',
  },
  carImg: {
    width: 150,
    paddingRight: 10,
  },
  containerCarImg: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1em',
  },
  nameCar: {
    fontWeight: 600,
    fontSize: 50,
  },
}));

const InputRun = () => {
  const [form, setForm] = useState({
    age1: '',
    operNad: '',
    oldMileage: '',
    newMileage: '',
    minusMilagecustom: '',
    baseRate: '',
    operationInKiev: '',
    operationalAllowance: '',
  });

  const notify = () =>
    toast.error(`🚗 Оберіть (Вік чи Напружені умови) !`, {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { car, baseInfo } = useSelector((state) => state.car);
  const { baseRate } = car;
  const { operationInKiev, operationalAllowance, ageCar } = baseInfo;

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const { age1, operNad, oldMileage, newMileage, minusMilagecustom } = form;
    const totalCar = {
      age: age1 || operNad,
      oldMileage,
      newMileage,
      minusMilagecustom,
      baseRate,
      operationInKiev,
      operationalAllowance,
    };
    if (!totalCar.age) {
      notify();
      return;
    }

    dispatch(changeTotalInfo(totalCar));
    navigate(`/totalTable`);
  };

  const changeLabel = () => {
    return age1 ? 'Мінус Км Опер.надбавка' : 'Мінус Км Опер.надбавка, напружені умови';
  };

  useEffect(() => {
    const total = storage.get('total');
    if (!total) return;
    setForm(total);
  }, []);

  const { age1, operNad, oldMileage, newMileage, minusMilagecustom } = form;

  const classes = useStyles();

  return (
    <form onSubmit={formSubmit}>
      <ToastContainer />
      <div className={classes.containerCarImg}>
        <CardMedia className={classes.carImg} image={getCarImg(car?.name)} component="img" />
        <Typography className={classes.nameCar} component="h2">
          {car?.name.toUpperCase()}
        </Typography>
      </div>
      <Container className={classes.containerSelect} component="div" style={{ padding: 0 }}>
        <FormControl fullWidth variant="outlined" className={classes.form}>
          <InputLabel id="demo-simple-select-outlined-label">Вік А\М</InputLabel>
          <Select
            label="Вік А\М"
            id="1"
            variant="outlined"
            name="age1"
            value={age1}
            onChange={inputHandler}
            disabled={operNad ? true : false}
          >
            <MenuItem value="">Відмінити</MenuItem>
            {ageCar.map((el) => (
              <MenuItem key={el} value={el}>
                {`${el} %`}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth variant="outlined" className={classes.form}>
          <InputLabel id="demo-simple-select-label">Напружені умови</InputLabel>
          <Select
            label="Напружені умови"
            id="2"
            variant="outlined"
            name="operNad"
            value={operNad}
            onChange={inputHandler}
            disabled={age1 ? true : false}
          >
            <MenuItem value="">Відмінити</MenuItem>
            <MenuItem key={54} value={0.1}>
              10 %
            </MenuItem>
          </Select>
        </FormControl>
      </Container>

      <FormControl fullWidth variant="outlined" className={classes.form}>
        <TextField
          label={changeLabel()}
          variant="outlined"
          onChange={inputHandler}
          name="minusMilagecustom"
          value={minusMilagecustom}
          type="number"
        />
      </FormControl>

      <FormControl fullWidth className={classes.form}>
        <TextField
          label="Старий пробіг"
          variant="outlined"
          onChange={inputHandler}
          name="oldMileage"
          value={oldMileage}
          type="number"
          required
        />
        <TextField
          label="Новий пробіг"
          variant="outlined"
          onChange={inputHandler}
          name="newMileage"
          value={newMileage}
          type="number"
          required
        />

        <Button type="submit" className={classes.text} variant="contained" color="primary">
          Розрахувати
        </Button>
      </FormControl>
    </form>
  );
};

export default InputRun;
