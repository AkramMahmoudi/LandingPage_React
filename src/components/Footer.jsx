import React, { useContext } from "react";
import { Box, Grid, Button, Typography } from "@mui/material";
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

  return (
    <Box
      component="footer"
      sx={{
        position: "relative", // Fixes the footer to the screen
        top: "11vh", // Positions it at the bottom
        left: 0, // Stretches to the left edge
        // width: "auto",
        height: "25%",
        backgroundColor: "black",
        color: "white",
        // pb: 1,
        mt: 1,
        textAlign: { xs: "center", sm: "left" }, // Align center on extra-small screens, left on small and larger
      }}
    >
      <Grid
        container
        spacing={3}
        sx={{
          position: "relative", // Use relative positioning to adjust within the flow
        }}
      >
        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            position: "relative", // Use relative positioning to adjust within the flow
            left: { xs: 10, sm: 20 }, // Adjust left position based on screen size
            top: 0,
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
              position: "relative",
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
            left: { xs: 15, sm: 30 }, // Adjust left position differently for this item
            top: 0, // Slightly different top offset
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
            left: { xs: 0, sm: 0 }, // Different offset for variety
            top: 0,
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
