import React from "react";
import {
  Badge,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import MailIcon from "@mui/icons-material/Mail";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ setMode, mode }) => {

  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton components="a" href="/">
              <ListItemIcon>
                <Typography variant="h6">QUIZZEN</Typography>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          {/* HOME */}
          <ListItem disablePadding>
            <ListItemButton components="a" href="/">
              <ListItemIcon>
                <HomeIcon color="white" />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>

          {/* EXPLORE */}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ExploreIcon color="white" />
              </ListItemIcon>
              <ListItemText primary="Explore" />
            </ListItemButton>
          </ListItem>

          {/* NEW */}
          <ListItem disablePadding>
            <ListItemButton components="a" href="new">
              <ListItemIcon>
                <AddCircleIcon color="white" />
              </ListItemIcon>
              <ListItemText primary="New" />
            </ListItemButton>
          </ListItem>

          {/* NOTIFICATIONS */}
          <ListItem disablePadding>
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
          <ListItem disablePadding>
            <ListItemButton components="a" href="/profile">
              <ListItemIcon>
                <AccountCircleIcon color="white" />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>

          {/* THEME MODE */}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {mode === "light" ? (
                  <WbSunnyIcon />
                ) : (
                  <BedtimeIcon color="warning" />
                )}
              </ListItemIcon>
              <Switch
                onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
                color="warning"
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
