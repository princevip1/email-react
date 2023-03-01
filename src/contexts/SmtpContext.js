import React, { createContext, useState } from "react";
import { API } from "@/utils/api";
import Fetch from "@/utils/axios";
import NotoficationHandler from "@/utils/notificationHandler";

export const SmtpContaxt = createContext();

export default function SmtpContaxtProvider({ children }) {
  const [isSmtpLoading, setSmtpLoading] = useState(false);

  const [smtps, setSmtps] = useState([]);

  const getSmtp = async () => {
    setSmtpLoading(true);
    try {
      const result = await Fetch.get(API.smtp);
      setSmtps(result?.data?.smtpGroup);
      setSmtpLoading(false);
    } catch (e) {
      console.log(e?.response?.data);
      setSmtpLoading(false);
    }
  };

  const addSmtp = async (data, setOpenModal = false, form = null) => {
    setSmtpLoading(true);
    try {
      let formData = new FormData();
      formData.append("name", data.name);
      formData.append("file", data.files.file.originFileObj);
      const result = await Fetch.post(API.smtp, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      getSmtp();
      form.resetFields();
      setOpenModal(false);
      setSmtpLoading(false);
      NotoficationHandler(result?.data);
    } catch (e) {
      console.log(e?.response?.data);
      form.resetFields();
      setOpenModal(false);
      setSmtpLoading(false);
      NotoficationHandler(e?.response?.data, "error");
    }
  };
  const addMoreSmtp = async (
    data,
    setAddMoreModal = false,
    addMoreForm = null
  ) => {
    setSmtpLoading(true);
    try {
      let formData = new FormData();
      formData.append("groupId", data.groupId);
      formData.append("file", data.files.file.originFileObj);
      const result = await Fetch.post(API.addMoreSmtp, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      getSmtp();
      addMoreForm.resetFields();
      setAddMoreModal(false);
      setSmtpLoading(false);
      NotoficationHandler(result?.data);
    } catch (e) {
      console.log(e?.response?.data);
      addMoreForm.resetFields();
      setAddMoreModal(false);
      setSmtpLoading(false);
      NotoficationHandler(e?.response?.data, "error");
    }
  };

  const deleteSmtp = async (id) => {
    setSmtpLoading(true);
    try {
      const result = await Fetch.delete(`${API.smtp}/${id}`);
      getSmtp();
      setSmtpLoading(false);
      NotoficationHandler(result.data);
    } catch (e) {
      console.log(e?.response?.data);
      setSmtpLoading(false);
      NotoficationHandler(e?.response?.data, "error");
    }
  };

  const downloadSmtp = async (id) => {
    setSmtpLoading(true);
    try {
      const result = await Fetch.get(`${API.smtpDownload}/${id}`);
      getSmtp();
      setSmtpLoading(false);
      NotoficationHandler(result.data);
    } catch (e) {
      console.log(e?.response?.data);
      setSmtpLoading(false);
      NotoficationHandler(e?.response?.data, "error");
    }
  };

  return (
    <SmtpContaxt.Provider
      value={{
        getSmtp,
        isSmtpLoading,
        addSmtp,
        smtps,
        deleteSmtp,
        addMoreSmtp,
        downloadSmtp,
      }}
    >
      {children}
    </SmtpContaxt.Provider>
  );
}
