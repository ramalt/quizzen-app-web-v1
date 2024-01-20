import axios from "../Api/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { auth, setAuth } = useAuth();

  const refresh = async () => {
    try {
      await axios
        .get(
          `auth/refresh?token=${auth.accessToken}&refreshToken=${auth.refreshToken}`
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
