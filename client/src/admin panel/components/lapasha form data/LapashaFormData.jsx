import React, { useState } from "react";

//material Ui Design Component
import {
  Box,
  Button,
  TextField,
  Grid,
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  Table,
  TableBody,
  Typography,
} from "@mui/material";

//Spare Functions
import {
  StyledTableRow,
  StyledTableCell,
} from "../../../functions/SpareFunctions";

const LapashaFormData = ({ lapashaData, title, empolymentFunc }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = e => {
    setSearchTerm(e.target.value);
  };

  const filteredData = lapashaData.filter(item =>
    item.fNamePerInfo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ background: "#fff", padding: "40px", borderRadius: "20px" }}>
      <Grid mb={4}>
        <Typography variant="subtitle1">
          {title}
        </Typography>
      </Grid>
      <TextField
        fullWidth
        label="Search ..."
        id="fullWidth"
        value={searchTerm}
        onChange={handleSearch}
        type="text"
      />
      <Grid mt={5}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Employee Name</StyledTableCell>
                <StyledTableCell align="right">Email Address</StyledTableCell>
                <StyledTableCell align="right">Phone Number</StyledTableCell>
                <StyledTableCell align="right">Address</StyledTableCell>
                <StyledTableCell align="right">Edit Form</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData &&
                filteredData.map((row, ind) => {
                  return (
                    <StyledTableRow key={+row.id}>
                      <StyledTableCell component="th" scope="row">
                        {row.fNamePerInfo} {row.lnamePerInfo}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.emailAddPerInfo}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.phoneNoPerInfo}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.addPerInfo}
                      </StyledTableCell>
                      <Button
                        variant="contained"
                        sx={{
                          float: "right",
                          background: "#b49a53",
                          margin: "5px",
                          "&:hover": {
                            background: "#b49a53",
                          },
                        }}
                        onClick={empolymentFunc}
                      >
                        Edit
                      </Button>
                    </StyledTableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Box>
  );
};

export default LapashaFormData;
