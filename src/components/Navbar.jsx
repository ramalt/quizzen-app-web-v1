import styled from "@emotion/styled";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Icon,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import React from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  background: "backround.default",
});

const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "20px",
  alignItems: "center",
}));

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ display: { xs: "none", sm: "block" } }}>
      <StyledToolbar>
        <Button href="/" color="warning">
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            QUIZZEN
          </Typography>
        </Button>
        <Typography variant="h6" sx={{ display: { xs: "block", sm: "none" } }}>
          Q
        </Typography>

        <Icons>
          <Badge badgeContent={4} color="warning">
            <MailIcon color="white" />
          </Badge>
          <Avatar sx={{ width: 30, height: 30 }}>RA</Avatar>
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
