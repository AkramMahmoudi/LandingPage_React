import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

const Footer1 = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // for small screen (mobile)

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "row", // Stack items vertically on small screens
        justifyContent: "space-between",
        alignItems: "center",
        padding: theme.spacing(2),
        backgroundColor: theme.palette.background.paper,
        position: "relative",
        bottom: 0,
        width: "100%",
        bgcolor: "red",
      }}
    >
      <Typography variant="h6">Express Tech</Typography>
      <Typography variant="body2">Eloued , Algeria</Typography>
      <Typography
        variant="caption"
        sx={{
          fontFamily: "Poppins, sans-serif",
          display: "block",
          mt: 8,
        }}
      >
        © {new Date().getFullYear()} Express Tech. All rights reserved.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row", // Stack social links vertically on mobile
          gap: theme.spacing(1),
        }}
      >
        <Typography variant="body2" color="textSecondary">
          Privacy Policy
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Terms of Service
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer1;
