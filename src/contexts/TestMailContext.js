import React, { createContext, useState } from "react";
import { API } from "@/utils/api";
import Fetch from "@/utils/axios";
import NotoficationHandler from "@/utils/notificationHandler";

export const TestMailContaxt = createContext();

export default function TestMailContaxtProvider({ children }) {
  const [isMailTestLoading, setMailTestLoading] = useState(false);

  const sendEmail = async (data, form = null) => {
    setMailTestLoading(true);
    try {
      const result = await Fetch.post(API.emailTest, data);
      NotoficationHandler(result?.data);
      form.resetFields();
      setMailTestLoading(false);
    } catch (e) {
      console.log(e?.response?.data);
      NotoficationHandler(e?.response?.data, "error");
      form.resetFields();
      setMailTestLoading(false);
    }
  };

  return (
    <TestMailContaxt.Provider
      value={{
        sendEmail,
        isMailTestLoading,
      }}
    >
      {children}
    </TestMailContaxt.Provider>
  );
}
