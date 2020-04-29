import React, { useState } from "react";
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
    const { age, oldMileage, newMileage } = form;

    const totalCar = {
      age,
      oldMileage,
      newMileage,
      baseRate: car.baseRate,
      operationInKiev: car.operationInKiev,
      operationalAllowance: car.operationalAllowance,
    };
    carTotalAll(totalCar);
  };

  const { age, oldMileage, newMileage } = form;

  const classes = useStyles();

  return (
    <FormControl fullWidth className={classes.form}>
      {/* <div className={classes.containerCheckbox}>
        <Checkbox
          value={age}
          size="medium"
          color="primary"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />{" "}
        <span>Напружені умови</span>
      </div> */}
      <InputLabel id="demo-simple-select-label">Вік А\М</InputLabel>
      <Select
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        variant="outlined"
        name="age"
        value={age}
        onChange={inputHandler}
      >
        {car.ageCar.map((el) => (
          <MenuItem key={el} value={el}>
            {el}
          </MenuItem>
        ))}
      </Select>

      <TextField
        id="outlined-basic"
        label="Старий пробіг"
        variant="outlined"
        autoFocus
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
