import React, { createContext } from "react";
import Router from "next/router";
import { notification } from "antd";
import axios from "axios";
import HandleError from "src/utils/errorHandle";
import NotoficationHandler from "@/utils/notificationHandler";
import { BASE_URL } from "@/utils/api";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [user, setUser] = React.useState(null);
  const [apploading, setApploAding] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const login = async (data) => {
    setIsLoading(true);
    try {
      const result = await axios.post(`${BASE_URL}/auth/login`, data);
      const { token, user } = result.data;
      if (token) {
        setUser(user);
        localStorage.setItem("authToken", token);
        NotoficationHandler(result.data);
        Router.push("/dashboard");
        setIsLoading(false);
      }
    } catch (e) {
      setIsLoading(false);
      NotoficationHandler(e?.response?.data, "error");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("authToken");

    Router.push("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        user,
        setUser,
        isLoading,
        apploading,
        setApploAding,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
