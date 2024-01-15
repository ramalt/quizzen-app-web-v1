import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Box, Container, Stack } from "@mui/material";
import Rightbar from "../components/Rightbar";
import BottomNav from "../components/BottomNav";

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
          {children}
          <Rightbar sideChildren={sideChildren}></Rightbar>
        </Stack>
      </Container>
      <BottomNav />
    </Box>
  );
};

export default Layout;
