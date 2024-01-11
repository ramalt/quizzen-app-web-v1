import { Box, Container, Stack, createTheme } from "@mui/material";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import BottomNav from "./components/BottomNav";
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
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
