import React, { createContext, useState } from "react";
import { API } from "@/utils/api";
import Fetch from "@/utils/axios";

export const DashboardContext = createContext();

export default function DashboardContextProvider({ children }) {
  const [dashboard, setDashboard] = useState({});
  const [isDashboardLoading, setDashboardLoading] = useState(false);

  const getDashboard = async () => {
    setDashboardLoading(true);
    try {
      const result = await Fetch.get("/dashboard");
      setDashboard(result?.data?.data);
      setDashboardLoading(false);
    } catch (e) {
      console.log(e?.response?.data);
      setDashboardLoading(false);
    }
  };

  return (
    <DashboardContext.Provider
      value={{
        getDashboard,
        dashboard,
        isDashboardLoading,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
