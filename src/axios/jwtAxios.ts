import axios, { AxiosResponse } from "axios";

const baseURL = "http://localhost:3001/api/product";

const instance = axios.create({
  baseURL: baseURL,
  method: "get", // Phương thức mặc định là GET
  transformResponse: [
    function (data) {
      return data;
    },
  ],
});

// const onRequestSuccess = (config: AxiosRequestConfig) => {
//   const auth = localStorage.getItem("token");
//   config.timeout = 10000;
//   if (auth) {
//     config.headers = {
//       Authorization: "Bearer " + auth,
//       //   "x-api-key": keyHearder,
//     };
//     // Xử lý params cho request
//     // if (config.params) {
//     //   config.paramsSerializer = {
//     //     serialize: (params: Record<string, any>) =>
//     //       queryString.stringify(params),
//     //   };
//     // }
//   }
//   // Các xử lý khác....
//   return config;
// };

const onResponseSuccess = (response: AxiosResponse) => {
  if (response?.data) {
    response.data = JSON.parse(response.data);
  }
  return response && response.data ? response.data : response;
};

// const onResponseSuccess = (response: AxiosResponse) => {
//   return response;
// };
const onResponseError = () => {
  //   if (error.response?.status !== 401) {
  //     const errMessage = error.response?.data || error?.response || error;
  //     return Promise.reject(errMessage);
  //   }

  //   cần xoá
  return refreshToken(); // gọi hàm để refresh token.
};

// const handleLogout = () => {
//   console.log("logout");
// };

// let refreshTokenRequest = null;

// hàm để refresh token
const refreshToken = async () => {
  // cần xoá token cũ
  // const refreshToken = localStorage.getItem("refresh");

  // console.log("da refresh thanh ccong");
  // if (!refreshToken) {
  //   // logout();
  //   return;
  // }
  //   try {
  //     // gọi api lấy token mới
  // const data = async () => await AuthApi.refreshToken({ refreshToken });
  // const data = () => {
  //   setTimeout(() => {
  //     console.log("thanh cong");
  //   }, 3000);
  // };
  // console.log(refreshTokenRequest);
  // refreshTokenRequest = refreshTokenRequest ? refreshTokenRequest : data;

  // refreshTokenRequest = null;
  localStorage.setItem("token", "token moi jdjfs");
  // localStorage.setItem("refreshToken", "moi dklfajd");

  //     error?.config?.headers = {
  //       Authorization: "Bearer " + token,
  //     };
  //     return axios(error.config!);

  //   } catch (error) {
  //     // logout();
  //     return;
  //   }
};

// instance.interceptors.request.use(onRequestSuccess);
instance.interceptors.response.use(onResponseSuccess, onResponseError);

export const getAll = () =>
  instance.get("/getAlls").then((data) => {
    // console.log("1");
    return data;
  });
