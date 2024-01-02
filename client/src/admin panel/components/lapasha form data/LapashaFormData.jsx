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
  Pagination
} from "@mui/material";

//Spare Functions
import {
  StyledTableRow,
  StyledTableCell
} from "../../../functions/SpareFunctions";

const LapashaFormData = ({
  lapashaData,
  title,
  empolymentFunc,
  lapashaUpdateData,
  getPatioData,
  getAdminData
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);

  const totalPages = Math.ceil(lapashaData.length / itemsPerPage);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const handleSearch = e => {
    setSearchTerm(e.target.value);
  };

  const filteredData = currentItems.filter(item =>
    item.fNamePerInfo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  React.useEffect(
    () => {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      setCurrentItems(lapashaData.slice(startIndex, endIndex));
    },
    [lapashaData, currentPage, itemsPerPage]
  );

  React.useEffect(() => {
    getAdminData();
  }, []);

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
              {filteredData.map((row, ind) => {
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
                          background: "#b49a53"
                        }
                      }}
                      onClick={e => empolymentFunc(e, row._id, row)}
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
      <Grid spacing={10}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          sx={{
            backgroundColor: "rgb(180, 154, 83)",
            color: "#fff",
            display: "flex",
            justifyContent: "center"
          }}
        />
      </Grid>
    </Box>
  );
};

export default LapashaFormData;
