import { createTheme } from "@mui/material";
import Feed from "./pages/Feed";
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Profile from "./pages/Profile";
import QuestionDetail from "./pages/QuestionDetail";
import UserDetail from "./pages/UserDetail";
import NewPost from "./pages/NewPost";

function App() {
  const [mode, setMode] = useState("dark");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Layout setMode={setMode} mode={mode}>
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="profile" element={<Profile />} />
            <Route path="question/:questionId" element={<QuestionDetail />} />
            <Route path="user/:userId" element={<UserDetail />} />
            <Route path="new" element={<NewPost />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
