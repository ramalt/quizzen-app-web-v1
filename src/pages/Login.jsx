import { Button, Card, Input, Stack } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import axios from "../Api/axios";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { setAuth } = useAuth();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "auth/login",
          {
            email: email,
            password: pass,
          },
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        )
        .then((res) => {
          const accessToken = res?.data?.data.token;
          const refreshToken = res?.data?.data.refreshToken;

          setAuth({ email, pass, accessToken, refreshToken });
          navigate(from, { replace: true });
          console.log(res.data.data);
        });
    } catch (error) {}
  };

  useEffect(() => {}, [email, pass]);

  return (
    <Card
      sx={{
        textDecoration: "none",
        margin: { xs: "3px", md: "5px" },
      }}
    >
      <section>
        <form onSubmit={handleSubmit}>
          <Stack spacing={1}>
            <Input
              placeholder="Mail"
              required
              id="userName"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Pass"
              required
              variant="password"
              type="password"
              id="userName"
              onChange={(e) => setPass(e.target.value)}
            />
            <Button type="submit">Giriş</Button>
          </Stack>
        </form>
      </section>
    </Card>
  );
};

export default Login;
