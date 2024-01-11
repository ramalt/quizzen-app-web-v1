import { Box } from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box
      //   bgcolor={"gray"}
      flex={2}
      p={1}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position={"fixed"}>Rightbar</Box>
    </Box>
  );
};

export default Rightbar;
