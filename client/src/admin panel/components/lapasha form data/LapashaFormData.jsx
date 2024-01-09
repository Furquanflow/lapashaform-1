import React, { useState, useEffect } from "react";

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
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [totalPages, setTotalPages] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(
    () => {
      const fetchData = async () => {
        try {
          await getAdminData();
          setLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    },
    [getAdminData]
  );

  useEffect(
    () => {
      if (!loading) {
        const filteredData = lapashaData.filter(item =>
          item.fNamePerInfo.toLowerCase().includes(searchTerm.toLowerCase())
        );

        const totalPagesFiltered = Math.ceil(
          filteredData.length / itemsPerPage
        );
        setTotalPages(totalPagesFiltered);

        // If currentPage is greater than totalPagesFiltered, reset to 1
        setCurrentPage(currentPage =>
          Math.min(currentPage, totalPagesFiltered || 1)
        );

        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setCurrentItems(filteredData.slice(startIndex, endIndex));
      }
    },
    [lapashaData, currentPage, itemsPerPage, searchTerm, loading]
  );

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const handleSearch = e => {
    setSearchTerm(e.target.value);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

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
              {currentItems.map((row, ind) => {
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
