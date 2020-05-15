import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 18,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 375,
  },
  km: {
    color: "black",
  },
  lit: {
    color: "#191970",
  },
  totalNumber: {
    color: "#191970",
    fontSize: 40,
  },
  totalNumberContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: 20,
  },
});

const TotalTable = ({ finishTotal }) => {
  const classes = useStyles();

  const {
    age,
    baseRate,
    newMileage,
    oldMileage,
    operationInKiev,
    operationalAllowance,
  } = finishTotal;
  console.log(finishTotal);
  const passedKm = newMileage - oldMileage;

  const base = passedKm * baseRate;
  const kiev = passedKm * baseRate * operationInKiev;

  const wance =
    passedKm <= 10
      ? passedKm * baseRate * operationalAllowance
      : (passedKm - 10) * baseRate * operationalAllowance;

  const Age = () => {
    if (passedKm > 10 && age === 0.1 && baseRate === 0.06) {
      return (passedKm - 2) * baseRate * age;
    } else if (passedKm > 10 && age === 0.1) {
      return (passedKm - 10) * baseRate * age;
    } else {
      return passedKm * baseRate * age;
    }
  };
  const toAge = Age();

  const littleKm = () => {
    if (passedKm > 10 && age === 0.1 && baseRate === 0.06) {
      return passedKm - 2;
    } else if (passedKm > 10 && age === 0.1) {
      return passedKm - 10;
    } else {
      return passedKm;
    }
  };

  const all = base + kiev + wance + toAge;

  const createData = (name, km, lit) => {
    return { name, km, lit };
  };

  const rows = [
    createData(
      `Базова норма ${baseRate}%`,
      `${passedKm}`,
      `${base.toFixed(2)}`
    ),
    createData(
      `Екс.по м.Києву ${operationInKiev}%`,
      `${passedKm}`,
      `${kiev.toFixed(2)}`
    ),
    createData(
      `Опер. Надбавка ${operationalAllowance}%`,
      `${passedKm <= 10 ? passedKm : passedKm - 10}`,
      `${wance.toFixed(2)}`
    ),
    createData(
      `${age === 0.1 ? "Напружені умови" : "Вік Ам"} ${age}%`,
      `${littleKm()}`,
      `${toAge.toFixed(2)}`
    ),
  ];

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Марштрут та умови руху</StyledTableCell>
              <StyledTableCell align="right">Км\пр</StyledTableCell>
              <StyledTableCell align="right">Фак.літр&nbsp;</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell className={classes.km} align="right">
                  {row.km}
                </StyledTableCell>
                <StyledTableCell className={classes.lit} align="right">
                  {row.lit}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={classes.totalNumberContainer}>
        {<h2 className={classes.totalNumber}>Спалено: {all.toFixed(2)} л</h2>}
      </div>
    </>
  );
};

export default TotalTable;
