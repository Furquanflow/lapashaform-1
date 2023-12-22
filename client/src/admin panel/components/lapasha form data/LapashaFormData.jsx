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

const LapashaFormData = ({ lapashaData, title, empolymentFunc, lapashaUpdateData }) => {
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
                <StyledTableCell>Email Address</StyledTableCell>
                <StyledTableCell>Phone Number</StyledTableCell>
                <StyledTableCell>Address</StyledTableCell>
                <StyledTableCell>Edit Form</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                filteredData.map((row, ind) => {
                  return (
                    <StyledTableRow key={row.id}>
                      <StyledTableCell component="th" scope="row">
                        {row.fNamePerInfo} {row.lnamePerInfo}
                      </StyledTableCell>
                      <StyledTableCell>
                        {row.emailAddPerInfo}
                      </StyledTableCell>
                      <StyledTableCell>
                        {row.phoneNoPerInfo}
                      </StyledTableCell>
                      <StyledTableCell>
                        {row.addPerInfo}
                      </StyledTableCell>
                      <Button
                        variant="contained"
                        sx={{
                          background: "#b49a53",
                          margin: "5px",
                          "&:hover": {
                            background: "#b49a53",
                          },
                        }}
                        onClick={(e) => empolymentFunc(e, row._id)}
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
