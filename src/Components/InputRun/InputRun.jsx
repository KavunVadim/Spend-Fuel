import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
} from "@material-ui/core";

import storage from "../../helpers/storage";

const useStyles = makeStyles((theme) => ({
  form: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  text: {
    height: 50,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  containerCheckbox: {
    display: "flex",
    alignItems: "center",
    fontSize: 20,
  },
}));

const formInitialState = {
  age: "",
  age1: "",
  operNad: "",
  oldMileage: "",
  newMileage: "",
};

const InputRun = ({ car, carTotalAll }) => {
  const [form, setForm] = useState(formInitialState);

  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const formSubmit = (e) => {
    const { age, age1, operNad, oldMileage, newMileage } = form;
    storage.save(oldMileage, oldMileage);
    const totalCar = {
      age: age1 || operNad,
      oldMileage,
      newMileage,
      baseRate: car.baseRate,
      operationInKiev: car.operationInKiev,
      operationalAllowance: car.operationalAllowance,
    };
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
    storage.save("carTotalAll", { oldMileage, newMileage });
  }, [form]);

  const { age1, operNad, oldMileage, newMileage } = form;

  const classes = useStyles();

  return (
    <FormControl fullWidth className={classes.form}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Вік А\М</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="1"
          variant="outlined"
          name="age1"
          value={age1}
          onChange={inputHandler}
          disabled={operNad ? true : false}
        >
          {car.ageCar.map((el) => (
            <MenuItem key={el} value={el}>
              {`${el} %`}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Опер Надбавка</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="2"
          variant="outlined"
          name="operNad"
          value={operNad}
          onChange={inputHandler}
          disabled={age1 ? true : false}
        >
          <MenuItem key={54} value={0.1}>
            10 %
          </MenuItem>
        </Select>
      </FormControl>

      <TextField
        id="1"
        label="Старий пробіг"
        variant="outlined"
        autoFocus
        onChange={inputHandler}
        name="oldMileage"
        value={oldMileage}
        type="number"
      />
      <TextField
        id="2"
        label="Новий пробіг"
        variant="outlined"
        onChange={inputHandler}
        name="newMileage"
        value={newMileage}
        type="number"
      />
      <Button
        type="submit"
        className={classes.text}
        variant="contained"
        color="primary"
        onClick={formSubmit}
      >
        Далі
      </Button>
    </FormControl>
  );
};

export default InputRun;
