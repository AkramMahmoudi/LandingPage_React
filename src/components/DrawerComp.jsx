import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { v4 as uuidv4 } from "uuid";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  IconButton,
} from "@mui/material";
const DrawerComp = ({ headerItem }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  //   console.log(uuidv4());
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => {
          setOpenDrawer(false);
        }}
        anchor="top"
        PaperProps={{
          sx: {
            width: "100%", // Make Drawer full-width on mobile
            height: "55%",
            // bgcolor: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // Set Drawer background color to black
          },
        }}
      >
        <List
          sx={{
            // bgcolor: "green",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {headerItem.map((e, index) => {
            return (
              <ListItemButton
                key={uuidv4()}
                onClick={() => {
                  setOpenDrawer(false);
                }}
                sx={
                  {
                    // Set background color of ListItemButton
                    //   bgcolor: "red",
                  }
                }
              >
                <ListItemIcon
                // sx={{ bgcolor: "orange" }}
                >
                  <ListItemText
                    sx={{
                      color: "black",
                      textAlign: "center",
                      alignItems: "center",
                    }}
                  >
                    {e}
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
            );
          })}
        </List>
      </Drawer>
      <IconButton
        onClick={() => {
          setOpenDrawer(!openDrawer);
        }}
        sx={{ color: "green", mr: "Auto" }}
      >
        <MenuIcon></MenuIcon>
      </IconButton>
    </>
  );
};
export default DrawerComp;
