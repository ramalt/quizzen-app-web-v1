import { Button, Card, Input, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../features/auth/authApiSlice";
import { useDispatch } from "react-redux";
import { setCredentials } from "../features/auth/authSlice";

const Login = () => {
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const location = useLocation();
  // const from = location.state?.from?.pathname || "/";

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log({ user, pass });
      const userData = await login({ email: user, password: pass }).unwrap();
      dispatch(setCredentials({ ...userData, user }));
      setUser("");
      setPass("");
      navigate("/profile");
    } catch (error) {
      //Check  status codes here
    }
  };

  useEffect(() => {}, [user, pass]);

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
              onChange={(e) => setUser(e.target.value)}
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
