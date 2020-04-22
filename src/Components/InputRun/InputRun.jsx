import React from "react";
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

const InputRun = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const classes = useStyles();

  return (
    <FormControl
      className={classes.form}
      noValidate
      autoComplete="off"
      fullWidth
    >
      <InputLabel id="demo-simple-select-filled-label">Вік А/М</InputLabel>
      <Select
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        variant="outlined"
        value={age}
        onChange={handleChange}
      >
        <MenuItem>10</MenuItem>
      </Select>

      <TextField
        id="outlined-basic"
        label="Старий пробіг"
        variant="outlined"
        autoFocus
        placeholder="Старий пробіг"
      />
      <TextField id="outlined-basic" label="Новий пробіг" variant="outlined" />
      <Button className={classes.text} variant="contained" color="primary">
        Далі
      </Button>
    </FormControl>
  );
};

export default InputRun;
