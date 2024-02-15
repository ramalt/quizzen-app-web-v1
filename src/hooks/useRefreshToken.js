import { useState } from "react";
import axios from "../Api/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { auth, setAuth } = useAuth();
  // const [isMounted, setMounted] = useState(false);
  var isMounted = false;

  const refresh = async () => {
    const localAuth = JSON.parse(localStorage.getItem("auth"));
    try {
      
        await axios
          .get(
            `auth/refresh?token=${localAuth.accessToken}&refreshToken=${localAuth.refreshToken}`,
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            localStorage.setItem(
              "auth",
              JSON.stringify({
                accessToken: res.data.data.token,
                refreshToken: res.data.data.refreshToken,
              })
            );
            setAuth((prev) => {
              return {
                ...prev,
                accessToken: res.data.data.token,
                refreshToken: res.data.data.refreshToken,
              };
            });

            return res.data.data.accessToken;
          });
      
    } catch (error) {
      console.error("refresh token yenileme: " + error);
    }
  };
  return refresh;
};

export default useRefreshToken;
