import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import DrawerComp from "./DrawerComp";
const Headeritem = ["Home", "About", "Contact Us", "Pricing"];
const Header1 = () => {
  const [value, setvalue] = useState(0);
  const theme = useTheme();
  // console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <>
      <AppBar sx={{ bgcolor: "black" }}>
        <Toolbar>
          <LogoDevIcon fontSize="large"></LogoDevIcon>
          {isMatch ? (
            <DrawerComp headerItem={Headeritem}></DrawerComp>
          ) : (
            <Tabs
              textColor="white"
              value={value}
              indicatorColor="primary"
              sx={{
                ml: "Auto",
                "& .MuiTabs-indicator": {
                  backgroundColor: "green", // Set the indicator color to red
                },
                Family: "Poppins",
                fontWeight: 400,
                fontStyle: "normal",
              }}
              onChange={(e, value) => {
                setvalue(value);
                console.log(value);
              }}
            >
              {Headeritem.map((e, index) => {
                return <Tab key={e} value={index} label={e} />;
              })}
            </Tabs>
          )}

          <Button
            sx={{
              bgcolor: "green",
              color: "white",
              fontFamily: "Poppins",
              fontWeight: 400,
              fontStyle: "normal",
              marginLeft: "Auto",
            }}
            variant="contained"
          >
            Login
          </Button>
          <Button
            sx={{
              bgcolor: "green",
              color: "white",
              fontFamily: "Poppins",
              fontWeight: 400,
              fontStyle: "normal",
              marginLeft: "10px",
              whiteSpace: "nowrap",
            }}
            variant="contained"
          >
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Header1;
