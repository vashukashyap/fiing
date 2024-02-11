import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein, cost) {
  return { name, calories, fat, carbs, protein, cost };
}

const rows = [
  createData(
    1,
    "Invoice",
    "15-12-2023",
    "1PJA-132-222",
    "1PJA-132-222",
    "Rs. 35, 000"
  ),
  createData(
    1,
    "Invoice",
    "15-12-2023",
    "1PJA-132-222",
    "1PJA-132-222",
    "Rs. 35, 000"
  ),
  createData(
    1,
    "Invoice",
    "15-12-2023",
    "1PJA-132-222",
    "1PJA-132-222",
    "Rs. 35, 000"
  ),
  createData(
    1,
    "Invoice",
    "15-12-2023",
    "1PJA-132-222",
    "1PJA-132-222",
    "Rs. 35, 000"
  ),
  createData(
    1,
    "Invoice",
    "15-12-2023",
    "1PJA-132-222",
    "1PJA-132-222",
    "Rs. 35, 000"
  ),
  createData(
    1,
    "Invoice",
    "15-12-2023",
    "1PJA-132-222",
    "1PJA-132-222",
    "Rs. 35, 000"
  ),
  createData(
    1,
    "Invoice",
    "15-12-2023",
    "1PJA-132-222",
    "1PJA-132-222",
    "Rs. 35, 000"
  ),
  createData(
    1,
    "Invoice",
    "15-12-2023",
    "1PJA-132-222",
    "1PJA-132-222",
    "Rs. 35, 000"
  ),
  createData(
    1,
    "Invoice",
    "15-12-2023",
    "1PJA-132-222",
    "1PJA-132-222",
    "Rs. 35, 000"
  ),
  createData(
    1,
    "Invoice",
    "15-12-2023",
    "1PJA-132-222",
    "1PJA-132-222",
    "Rs. 35, 000"
  ),
];

export default function CustTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Merchent</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Pan No.</TableCell>
            <TableCell>Invoice Number</TableCell>
            <TableCell>Cost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell>{row.calories}</TableCell>
              <TableCell>{row.fat}</TableCell>
              <TableCell>{row.carbs}</TableCell>
              <TableCell>{row.protein}</TableCell>
              <TableCell>{row.cost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
