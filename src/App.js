import { Box, Container, Stack, createTheme } from "@mui/material";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import BottomNav from "./components/BottomNav";
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";

function App() {
  const [mode, setMode] = useState("dark");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Container>
          <Stack
            direction={"row"}
            spacing={1}
            flex={1}
            justifyContent={"space-between"}
          >
            <Sidebar />
            <Feed />
            <Rightbar />
          </Stack>
        </Container>
        <BottomNav />
      </Box>
    </ThemeProvider>
  );
}

export default App;
