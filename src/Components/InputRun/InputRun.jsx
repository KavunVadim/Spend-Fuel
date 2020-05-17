import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
} from "@material-ui/core";

import storage from "../../helpers/storage";
import { dark } from "@material-ui/core/styles/createPalette";

const useStyles = makeStyles((theme) => ({
  form: {
    "& > *": {
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
    display: "flex",
  },
  carImg: {
    width: 150,
    paddingRight: 10,
  },
  containerCarImg: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  nameCar: {
    fontWeight: 600,
    fontSize: 30,
  },
}));

const formInitialState = {
  age1: "",
  operNad: "",
  oldMileage: "",
  newMileage: "",
};

const notify = () =>
  toast.error(`🚗 Оберіть (Вік чи Напружені умови) !`, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

const InputRun = ({ car, carTotalAll }) => {
  const [form, setForm] = useState(formInitialState);

  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const formSubmit = (e) => {
    e.preventDefault();

    const { age1, operNad, oldMileage, newMileage } = form;

    const totalCar = {
      age: age1 || operNad,
      oldMileage,
      newMileage,
      baseRate: car.baseRate,
      operationInKiev: car.operationInKiev,
      operationalAllowance: car.operationalAllowance,
    };
    if (!totalCar.age) {
      notify();
      return;
    }
    carTotalAll(totalCar);
  };

  useEffect(() => {
    const arrContacts = storage.get("carTotalAll");
    if (!arrContacts) {
      storage.save("carTotalAll", []);
      return;
    }
    setForm(arrContacts);
  }, []);

  useEffect(() => {
    storage.save("carTotalAll", { ...form });
  }, [form]);

  const { age1, operNad, oldMileage, newMileage } = form;

  const classes = useStyles();

  return (
    <form onSubmit={formSubmit}>
      <ToastContainer />
      <div className={classes.containerCarImg}>
        <CardMedia className={classes.carImg} image={car.img} component="img" />
        <Typography className={classes.nameCar} component="h2">
          {car.name.toUpperCase()}
        </Typography>
      </div>
      <Container
        className={classes.containerSelect}
        component="div"
        style={{ padding: 0 }}
      >
        <FormControl fullWidth variant="outlined" className={classes.form}>
          <InputLabel id="demo-simple-select-outlined-label">
            Вік А\М
          </InputLabel>
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
            {car.ageCar.map((el) => (
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

      <FormControl fullWidth className={classes.form}>
        <TextField
          id="1"
          label="Старий пробіг"
          variant="outlined"
          autoFocus
          onChange={inputHandler}
          name="oldMileage"
          value={oldMileage}
          type="number"
          required
        />
        <TextField
          id="2"
          label="Новий пробіг"
          variant="outlined"
          onChange={inputHandler}
          name="newMileage"
          value={newMileage}
          type="number"
          required
        />
        <Button
          type="submit"
          className={classes.text}
          variant="contained"
          color="primary"
        >
          Далі
        </Button>
      </FormControl>
    </form>
  );
};

export default InputRun;
