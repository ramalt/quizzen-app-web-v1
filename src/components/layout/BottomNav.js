import React from "react";
import {
  Badge,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import MailIcon from "@mui/icons-material/Mail";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const BottomNav = () => {
  return (
    <Box
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      sx={{ display: { xs: "block", sm: "none" } }}
    >
      <BottomNavigation showLabels>
        {/* HOME */}
        <BottomNavigationAction
          label="Homepage"
          icon={<HomeIcon />}
          href="#home"
        />

        {/* EXPLORE */}
        <BottomNavigationAction
          label="Explore"
          icon={<ExploreIcon />}
          href="#explore"
        />

        {/* NEW */}
        <BottomNavigationAction
          label="New"
          icon={<AddCircleIcon />}
          href="#new"
        />

        {/* NOTIFICATIONS */}
        <BottomNavigationAction
          label="Notifications"
          icon={
            <Badge badgeContent={4} color="warning">
              <MailIcon />
            </Badge>
          }
          href="#notifications"
        />

        {/* PROFILE */}
        <BottomNavigationAction
          label="Profile"
          icon={<AccountCircleIcon />}
          href="#profile"
        />
      </BottomNavigation>
    </Box>
  );
};

export default BottomNav;
