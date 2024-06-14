// import axios from "axios";

// const instance = axios.create({
//   baseURL: "http://localhost:3001/api/product",
//   method: "get", // Phương thức mặc định là GET
//   transformResponse: [
//     function (data) {
//       return data;
//     },
//   ],
// });

// // custom response at here, note about rules of BE
// instance.interceptors.response.use(
//   function (response) {
//     if (response?.data) {
//       response.data = JSON.parse(response.data);
//     }
//     return response && response.data ? response.data : response;
//   },
//   function (error) {
//     if (error && error.response && error.response.data)
//       return error.response.data;
//     return Promise.reject(error);
//   },
// );

// // thực hiện  callAPI
// export const getAll = () =>
//   instance.get("/getAll").then((data) => {
//     // console.log("1");
//     return data;
//   });
