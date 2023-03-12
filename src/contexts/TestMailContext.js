import React, { createContext, useState } from "react";
import { API } from "@/utils/api";
import Fetch from "@/utils/axios";
import NotoficationHandler from "@/utils/notificationHandler";
import { message } from "antd";

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
      message.error(e?.response?.data?.message?.response);
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
