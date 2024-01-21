import axios from "../Api/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { auth, setAuth } = useAuth();

  const storedAuth = JSON.parse(localStorage.getItem("auth"));
  
  const refresh = async () => {
    try {
      console.log(storedAuth);
      await axios
        .get(
          `auth/refresh?token=${storedAuth.accessToken}&refreshToken=${storedAuth.refreshToken}`
        )
        .then((res) => {
          console.log(res.data.data);
          setAuth((prev) => {
            return {
              ...prev,
              accessToken: res.data.data.accessToken,
              refreshToken: res.data.data.refreshToken,
            };
          });
          return res.data.accessToken;
        });
    } catch (error) {
      console.error("refresh token yenileme: " + error);
    }
  };
  return refresh;
};

export default useRefreshToken;
