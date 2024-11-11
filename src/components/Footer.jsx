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
  const isMobilefooter = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      component="footer"
      sx={{
        position: isMobilefooter ? "relative" : "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "black",
        color: "white",
        padding: isMobilefooter ? "10px" : "20px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        spacing={3}
        sx={{
          display: "flex",
          flexDirection: isMobilefooter ? "column" : "row",
          alignItems: "center",
          justifyContent: "center",
          width: "100%", // Ensures it takes up full width
        }}
      >
        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            textAlign: isMobilefooter ? "center" : "left",
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
            sx={{ fontFamily: "Poppins, sans-serif", display: "block", mt: 8 }}
          >
            © {new Date().getFullYear()} Express Tech. All rights reserved.
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            textAlign: isMobilefooter ? "center" : "left", // Ensure consistent text alignment
            bgcolor: "transparent", // Remove the red background (if not needed)
            padding: theme.spacing(2),
            mt: 1,
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
                textTransform: "none",
                fontFamily: "Poppins, sans-serif",
                p: 0,
                mb: 1,
                display: "block",
                "&:hover": {
                  color: "green",
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
            textAlign: isMobilefooter ? "center" : "left",
            bgcolor: "transparent",
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
                textTransform: "none",
                fontFamily: "Poppins, sans-serif",
                p: 0,
                mb: 1,
                display: "block",
                "&:hover": {
                  color: "green",
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
