import React, { useState, useEffect } from "react";

//Mui Component
import { useTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

//Mui Design Library
import {
  Box,
  Drawer,
  Toolbar,
  Typography,
  IconButton,
  ListItemButton,
  ListItem,
  Grid
} from "@mui/material";

//icons
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

//Router Dom
import { Link, Route, Routes } from "react-router-dom";

//Local Component
import LapashaLoungeAndGrill from "../pages/LapashaLoungeAndGrill";
import NaraCafe from "../pages/NaraCafe";
import Patio from "../pages/Patio";

//images
import companyLogo01 from "../../assets/images/logo01.png";
import companyLogo02 from "../../assets/images/logo02.png";
import companyLogo03 from "../../assets/images/logo03.png";
import lapashaLogo from "../../assets/images/lapasha-logo.png";

import {
  DrawerHeader,
  AppBar,
  Main,
  drawerWidth
} from "../../functions/SpareFunctions";

export default function PersistentDrawerLeft({
  loungeGrillEditFunc,
  naraCafeFunc,
  patioFunc,
  adminUserToken,
  adminLoungeClick,
  adminPatioClick,
  adminNaraClick
}) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navStyle = {
    textDecoration: "none",
    color: "#000",
    marginTop: "10px",
    background: "#fff"
  };

  const navBtnStyle = { padding: "20px 15px", height: "70px" };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ background: "#fff" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              mr: 2,
              ...(open && { display: "none" }),
              background: "#000",
              "&:hover": {
                background: "#000"
              }
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ color: "#b49a53 !important" }}
          >
            Lapasha Admin Panel
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "#b49a53"
          }
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{ display: "flex", justifyContent: "space-between" }}>
          <Link to="/admin/lounge">
            <Grid mt={2}>
              <img src={lapashaLogo} width={100} />
            </Grid>
          </Link>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr"
              ? <ChevronLeftIcon
                  sx={{ background: "#fff", borderRadius: "50px" }}
                />
              : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        {/*  <Link style={navStyle} to="/admin/lounge"> */}
        <ListItem style={navStyle} disablePadding onClick={adminLoungeClick}>
          <ListItemButton sx={navBtnStyle}>
            <img
              src={companyLogo01}
              width={50}
              style={{ marginRight: "10px" }}
              alt="Lounge And Grill"
            />
            Lounge And Grill
          </ListItemButton>
        </ListItem>
        {/* </Link> */}

        {/* <Link style={navStyle} to="/admin/patio"> */}
        <ListItem style={navStyle} disablePadding onClick={adminPatioClick}>
          <ListItemButton sx={navBtnStyle}>
            <img
              src={companyLogo02}
              width={50}
              style={{ marginRight: "10px" }}
              alt="Patio"
            />
            Patio
          </ListItemButton>
        </ListItem>
        {/* </Link> */}
        {/* <Link style={navStyle} to="/admin/naracafe"> */}
        <ListItem style={navStyle} disablePadding onClick={adminNaraClick}>
          <ListItemButton sx={navBtnStyle}>
            <img
              src={companyLogo03}
              width={50}
              style={{ marginRight: "10px" }}
              alt="Nara Cafe"
            />
            Nara Cafe
          </ListItemButton>
        </ListItem>
        {/* </Link> */}
      </Drawer>
      <Main open={open} sx={{ padding: 0 }}>
        <DrawerHeader />
        <Grid
          sx={{
            background: "#ddd",
            height: "100vh",
            width: "100%",
            padding: " 40px",
            overflow: "hidden"
          }}
        >
          <Routes>
            <Route
              path="/lounge"
              element={
                <LapashaLoungeAndGrill
                  loungeGrillEditFunc={loungeGrillEditFunc}
                  adminToken={adminUserToken}
                />
              }
            />
            <Route
              path="/patio"
              element={
                <Patio patioEditFunc={patioFunc} adminToken={adminUserToken} />
              }
            />
            <Route
              path="/naracafe"
              element={
                <NaraCafe
                  naraCafeEditFunc={naraCafeFunc}
                  adminToken={adminUserToken}
                />
              }
            />
          </Routes>
        </Grid>
      </Main>
    </Box>
  );
}
