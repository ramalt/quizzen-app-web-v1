import { createTheme } from "@mui/material";
import Feed from "./pages/Feed";
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Profile from "./pages/Profile";
import QuestionDetail from "./pages/PostDetail.js";
import UserDetail from "./pages/UserDetail";
import NewPost from "./pages/NewPost";
import Login from "./pages/Login";
import RequireAuth from "./components/RequireAuth.js";
import Test from "./pages/Test";

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
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* PUBLIC */}
          <Route path="/" element={<Feed />} />
          <Route path="login" element={<Login />} />
          <Route path="test" element={<Test />} />

          <Route path="user/:userId" element={<UserDetail />} />
          <Route path="new" element={<NewPost />} />
          <Route path="profile" element={<Profile />} />
          <Route path="question/:questionId" element={<QuestionDetail />} />

          {/* PRIVATE */}
          <Route element={<RequireAuth />}></Route>
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
