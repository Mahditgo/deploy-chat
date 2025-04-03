// import axios from "axios";

// export const axiosInstance = axios.create({
//   baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api",
//   withCredentials: true,
// });

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" 
    ? "http://localhost:5001/api" 
    : "http://89.42.199.75:5001/api",  // اینجا `baseURL` رو مشخص کردیم
  withCredentials: true, // برای ارسال کوکی‌ها
});
