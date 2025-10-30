"use client";

import { createContext, useContext, useMemo } from "react";
import axios from "axios";

axios.defaults.withCredentials = true;
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// Create the context
const GlobalContext = createContext();

// Custom hook for easy access
export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  // Create a memoized axios instance
  const axiosInstance = useMemo(() => {
    const instance = axios.create({
      baseURL: API_BASE_URL,
      withCredentials: true,
    });

    instance.interceptors.response.use(
      (response) => response,
      (error) => {
        console.error("API Error:", error.response || error.message);
        return Promise.reject(error);
      }
    );

    return instance;
  }, []);

  const getAllServices = async () => {
    const response = await axiosInstance.get("/services");
    return response.data.services;
  };

  return (
    <GlobalContext.Provider value={{ getAllServices }}>
      {children}
    </GlobalContext.Provider>
  );
};
