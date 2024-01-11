import React from "react";
import {
  Badge,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import MailIcon from "@mui/icons-material/Mail";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Sidebar = () => {
  return (
    <Box
      flex={1}
      p={1}
      sx={{ display: { xs: "none", sm: "block" } }}
      position="sticky"
    >
      <List>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <Typography variant="h6">QUIZZEN</Typography>
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        {/* HOME */}
        <ListItem components="a" href="#home">
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon color="white" />
            </ListItemIcon>
            <ListItemText primary="Homepage" />
          </ListItemButton>
        </ListItem>

        {/* EXPLORE */}
        <ListItem components="a" href="#home">
          <ListItemButton>
            <ListItemIcon>
              <ExploreIcon color="white" />
            </ListItemIcon>
            <ListItemText primary="Explore" />
          </ListItemButton>
        </ListItem>

        {/* NEW */}
        <ListItem components="a" href="#home">
          <ListItemButton>
            <ListItemIcon>
              <AddCircleIcon color="white" />
            </ListItemIcon>
            <ListItemText primary="New" />
          </ListItemButton>
        </ListItem>

        {/* NOTIFICATIONS */}
        <ListItem components="a" href="#home">
          <ListItemButton>
            <ListItemIcon>
              <Badge badgeContent={4} color="warning">
                <MailIcon color="white" />
              </Badge>
            </ListItemIcon>
            <ListItemText primary="Notifications" />
          </ListItemButton>
        </ListItem>

        {/* PROFILE */}
        <ListItem components="a" href="#home">
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon color="white" />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
