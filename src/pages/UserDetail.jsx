import { Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetail = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    exam: "",
    email: "",
    profileImg: "",
  });

  const fetchUserData = async () => {
    try {
      await axios
        .get(`http://localhost:5174/api/User/${userId}`)
        .then((res) => {
          setUser({
            firstName: res.data.firstName,
            lastName: res.data.lastName,
            userName: res.data.userName,
            exam: res.data.exam,
            email: res.data.email,
            profileImg: res.data.profileImg,
          });
          console.log(res);
        });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log(userId);
    fetchUserData();
  }, [userId]);

  return (
    <Box flex={4} p={1}>
      {/* <Typography>{userId}</Typography> */}
      <img src={user.profileImg} style={{ width: "500px" }} />
      <Typography>{user.firstName}</Typography>
      <Typography>{user.lastName}</Typography>
      <Typography variant="h1">{user.userName}</Typography>
      <Typography>{user.email}</Typography>
      <Typography>{user.exam}</Typography>
    </Box>
  );
};

export default UserDetail;
