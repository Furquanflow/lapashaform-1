import React from "react";

//Mui Design Library
import { Button, Container, Grid, Typography } from "@mui/material";

// images
import companyLogo01 from "../assets/images/logo01.png";
import companyLogo02 from "../assets/images/logo02.png";
import companyLogo03 from "../assets/images/logo03.png";

const Home = ({ callData }) => {
  
  return (
    <Grid>
      <Grid className="home-sec">
        <Container>
          <Typography variant="h1" className="home-title">
            the contract 2023 class action waiver
          </Typography>
          <Grid container spacing={3} columns={12} className="flx-box">
            <Grid item xs={4}>
              <Grid className="card-blk">
                <Grid className="image-card">
                  <img src={companyLogo01} alt="companyLogo01" />
                </Grid>
                <Typography variant="h4">LaPasha lounge and Grill</Typography>
                <Typography variant="p">kirkwood ops</Typography>
                <Grid mt={4}>
                  <Button
                    className="save-btn"
                    variant="contained"
                    onClick={() => callData(0)}
                  >
                    Get Started
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Grid className="card-blk">
                <Grid className="image-card">
                  <img src={companyLogo02} alt="companyLogo02" />
                </Grid>
                <Typography variant="h4">LaPasha</Typography>
                <Typography variant="p">kirkwood ops</Typography>
                <Grid mt={4}>
                  <Button
                    className="save-btn"
                    variant="contained"
                    onClick={() => callData(1)}
                  >
                    Get Started
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Grid className="card-blk">
                <Grid className="image-card">
                  <img src={companyLogo03} alt="companyLogo03" />
                </Grid>
                <Typography variant="h4">Grill</Typography>
                <Typography variant="p">kirkwood ops</Typography>
                <Grid mt={2}>
                  <Button
                    className="save-btn"
                    variant="contained"
                    onClick={() => callData(2)}
                  >
                    Get Started
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
};

export default Home;
