import React, { useEffect, useState } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { Box, Typography } from "@mui/material";

const Test = () => {
  // const [data, setData] = useState();
  // const axiosPrivate = useAxiosPrivate();
  // const controller = new AbortController();

  // const {data: }

  const Fetch = async () => {
    // try {
    //   const res = await axiosPrivate.get("test", {
    //     signal: controller.signal,
    //   });
    //   setData(res.data);
    // } catch (error) {
    //   console.error("Fetch Error:", error);
    // }
  };
  useEffect(() => {
    // Fetch();
  }, []);
  return (
    <Box flex={4} p={1} alignContent="center" justifyContent="center">
      <Typography variant="h4">data</Typography>
    </Box>
  );
};

export default Test;
