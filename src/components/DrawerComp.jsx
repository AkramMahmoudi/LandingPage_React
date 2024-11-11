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
      >
        <List>
          {headerItem.map((e, index) => {
            return (
              <ListItemButton key={uuidv4()}>
                <ListItemIcon>
                  <ListItemText>{e}</ListItemText>
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
