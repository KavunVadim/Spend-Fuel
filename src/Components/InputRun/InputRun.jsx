import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

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
}));

const formInitialState = {
  age: "",
  oldMileage: "",
  newMileage: "",
};

const InputRun = ({ car, carTotalAll }) => {
  const [form, setForm] = useState(formInitialState);
  console.log(car);
  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const { age, oldMileage, newMileage } = form;
    const totalCar = {
      age,
      oldMileage,
      newMileage,
    };
    console.log(totalCar);
    setForm(formInitialState);
  };

  const { age, oldMileage, newMileage } = form;

  const classes = useStyles();

  return (
    <FormControl fullWidth className={classes.form} onSubmit={formSubmit}>
      <InputLabel id="demo-simple-select-filled-label">Вік А/М</InputLabel>
      <Select
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        variant="outlined"
        name="age"
        value={age}
        onChange={inputHandler}
      >
        {car.ageCar.map((el) => (
          <MenuItem value={el}> {el}</MenuItem>
        ))}
      </Select>

      <TextField
        id="outlined-basic"
        label="Старий пробіг"
        variant="outlined"
        autoFocus
        placeholder="Старий пробіг"
        onChange={inputHandler}
        name="oldMileage"
        value={oldMileage}
      />
      <TextField
        id="outlined-basic"
        label="Новий пробіг"
        variant="outlined"
        onChange={inputHandler}
        name="newMileage"
        value={newMileage}
      />
      <Button
        onClick={formSubmit}
        className={classes.text}
        variant="contained"
        color="primary"
      >
        Далі
      </Button>
    </FormControl>
  );
};

export default InputRun;
