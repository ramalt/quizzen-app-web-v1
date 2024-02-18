// import { useEffect } from "react";
// import { axiosPrivate } from "../Api/axios";
// import useAuth from "./useAuth";
// import useRefreshToken from "./useRefreshToken";

// const useAxiosPrivate = () => {
//   // const { auth } = useAuth();
//   const refresh = useRefreshToken();

//   useEffect(() => {
//     var localAuth = JSON.parse(localStorage.getItem("auth"));
//     const requestIntercept = axiosPrivate.interceptors.request.use(
//       (config) => {
//         if (!config.headers["Authorization"]) {
//           config.headers["Authorization"] = `Bearer ${localAuth?.accessToken}`;
//         }
//         return config;
//       },
//       (error) => Promise.reject(error)
//     );

//     const responseIntercept = axiosPrivate.interceptors.response.use(
//       (response) => {
//         return response;
//       },

//       async (error) => {
//         const prevRequest = error?.config;
//         if (error?.response?.status === 401 && !prevRequest?.sent) {
//           prevRequest.sent = true;
//           const newAccessToken = refresh();
//           prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
//           return axiosPrivate(prevRequest);
//         }
//         return Promise.reject(error);
//       }
//     );

//     return () => {
//       axiosPrivate.interceptors.request.eject(requestIntercept);
//       axiosPrivate.interceptors.response.eject(responseIntercept);
//     };
//   }, [ refresh]);

//   return axiosPrivate;
// };

// export default useAxiosPrivate;
