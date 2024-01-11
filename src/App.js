import { Container, Stack } from "@mui/material";
import "./App.css";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import BottomNav from "./components/BottomNav";

function App() {
  return (
    // <div className="App">
    <>
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
      <BottomNav/>
    </>
    // </div>
  );
}

export default App;
