import React, { useEffect, useState } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { Box, Typography } from "@mui/material";

const Test = () => {
  const [data, setData] = useState("");
  const axiosPrivate = useAxiosPrivate();

  const Fetch = async () => {
    await axiosPrivate.get("test").then((res) => {
      setData(res.data.data);
      console.log(res.data.data);
    });
  };
  useEffect(() => {
    Fetch();
  });
  return (
    <Box flex={4} p={1} alignContent="center" justifyContent="center">
      <Typography variant="h4">{data}</Typography>
    </Box>
  );
};

export default Test;
