import React, { useContext } from "react";
import {
  Box,
  Grid,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { StyleTypoContext } from "./app";

const links = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Services", href: "#" },
  { label: "Contact", href: "#" },
];

const SocialLinks = [
  { label: "Facebook", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "Instagram", href: "#" },
];

const Footer = () => {
  const Style = useContext(StyleTypoContext);

  const theme = useTheme();
  // console.log(theme);
  const isMobilefooter = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMobilefooter);

  return (
    <Box
      component="footer"
      sx={{
        // Fixes the footer to the screen
        position: isMobilefooter ? "relative" : "fixed",
        bottom: 0,
        left: 0, // Stretches to the left edge
        width: "100%", // Full width
        height: isMobilefooter ? "100%" : "25%", // Dynamic height based on screen size
        backgroundColor: "black",
        color: "white",
        mt: 1,
        padding: isMobilefooter ? "10px" : "20px", // Padding based on screen size
        textAlign: "center", // Center text on mobile screens
        display: "flex", // Flexbox for vertical centering on mobile
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // bgcolor: "red",
      }}
    >
      <Grid
        container
        spacing={3}
        sx={{
          display: "flex",
          flexDirection: isMobilefooter ? "column" : "row", // Stack items vertically on mobile
          alignItems: "center",
        }}
      >
        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            position: "relative", // Adjust within the flow
            textAlign: isMobilefooter ? "center" : "left", // Center text on mobile
          }}
        >
          <Typography variant="h6" sx={Style}>
            Express Tech
          </Typography>
          <Typography variant="body2" sx={Style}>
            Eloued , Algeria
          </Typography>
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
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            position: "relative",
            textAlign: isMobilefooter ? "center" : "left", // Center text on mobile
          }}
        >
          <Typography variant="h6" sx={Style}>
            Links
          </Typography>
          {links.map((link, index) => (
            <Button
              key={index}
              href={link.href}
              sx={{
                color: "white",
                textTransform: "none", // Disable uppercase transformation
                fontFamily: "Poppins, sans-serif",
                p: 0,
                mb: 1,
                display: "block",
                "&:hover": {
                  color: "green", // Change color on hover
                },
              }}
            >
              {link.label}
            </Button>
          ))}
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            position: "relative",
            textAlign: isMobilefooter ? "center" : "left", // Center text on mobile
          }}
        >
          <Typography variant="h6" sx={Style}>
            Follow Me
          </Typography>
          {SocialLinks.map((link, index) => (
            <Button
              key={index}
              href={link.href}
              sx={{
                color: "white",
                textTransform: "none", // Disable uppercase transformation
                fontFamily: "Poppins, sans-serif",
                p: 0,
                mb: 1,
                display: "block",
                "&:hover": {
                  color: "green", // Change color on hover
                },
              }}
            >
              {link.label}
            </Button>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
