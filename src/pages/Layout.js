import React from "react";
import Sidebar from "../components/layout/Sidenav";
import Navbar from "../components/layout/Navbar";
import { Box, Container, Stack } from "@mui/material";
import Rightbar from "../components/layout/Rightbar";
import BottomNav from "../components/layout/BottomNav";
import { Outlet } from "react-router";

const Layout = ({ children, sideChildren, setMode, mode }) => {
  
  return (
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar />
      <Container>
        <Stack
          direction={"row"}
          spacing={1}
          flex={1}
          justifyContent={"space-between"}
        >
          <Sidebar setMode={setMode} mode={mode} />
          <Outlet />
          <Rightbar sideChildren={sideChildren}></Rightbar>
        </Stack>
      </Container>
      <BottomNav />
    </Box>
  );
};

export default Layout;
