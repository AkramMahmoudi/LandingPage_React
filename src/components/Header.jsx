import React from "react";
// import MenuIcon from "@mui/icons-material/Menu";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import Popover from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import DropdownMenu from "./Dropdown";
// import Avatar from '@mui/material/Avatar';
// import Tooltip from '@mui/material/Tooltip';
// import AdbIcon from "@mui/icons-material/Adb";

const pages = ["Products", "Pricing", "Blog", "Blog", "Blog", "Blog", "Blog"];
const nestedPages = ["Subpage 1", "Subpage 2", "Subpage 3"];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {
  return (
    <AppBar position="static" sx={{ bgcolor: "black" }}>
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <IconButton
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
            href="#"
          >
            {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
            <img
              src="/logo.png" // Replace with your image path
              alt="Logo"
              style={{ width: "50px", height: "50px" }} // Adjust size as needed
            />
          </IconButton>
          {/* menu navbar in mobile */}
          {/* <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMouseEnter}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleMouseLeave}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={`${page}+1`} onClick={handleMouseLeave}>
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontFamily: "Poppins",
                      fontWeight: 400,
                      fontStyle: "normal",
                    }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
          {/* <IconButton
            sx={{
              mr: 20,
              display: { xs: "flex", md: "none" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
            href="#"
          > */}
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          {/* <img
              src="/logo.png" // Replace with your image path
              alt="Logo"
              style={{ width: "50px", height: "50px" }} // Adjust size as needed
            /> */}
          {/* </IconButton> */}
          {/* navbar menu in desktop*/}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              ml: 20,
            }}
          >
            <Button
              sx={{
                my: 2,
                color: "white",
                display: "flex",
                fontFamily: "Poppins",
                fontWeight: 400,
                alignItems: "center",
                fontStyle: "normal",
                "&:hover": {
                  backgroundColor: "black",
                  color: "white",
                },
              }}
            >
              <DropdownMenu
                nameBtn={pages[0]}
                nestedPages={nestedPages}
              ></DropdownMenu>
            </Button>

            {pages.slice(1).map(
              (
                page // Loop through the remaining pages
              ) => (
                <Button
                  key={page}
                  onClick={() => console.log(`${page} clicked`)} // Adjust click handling as needed
                  href={`/${page}`}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "flex",
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontStyle: "normal",
                    "&:hover": {
                      backgroundColor: "black",
                      color: "white",
                    },

                    "&::after": {
                      content: '""',
                      position: "absolute",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "green",
                      bottom: "-6px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    },
                    "&:hover::after": {
                      opacity: 1,
                    },
                  }}
                >
                  {page}
                </Button>
              )
            )}
          </Box>
          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
          <Box sx={{ display: "flex", mr: 10 }}>
            <Button
              href="/login"
              sx={{
                my: 2,
                color: "white",
                display: "block",
                fontFamily: "Poppins",
                fontWeight: 400,
                fontStyle: "normal",
              }}
            >
              Login
            </Button>
            <Button
              variant="contained"
              href="/register"
              sx={{
                my: 2,
                color: "white",
                display: "block",
                fontFamily: "Poppins",
                fontWeight: 400,
                fontStyle: "normal",
                backgroundColor: "green",
                "&:hover": { backgroundColor: "darkgreen" },
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
