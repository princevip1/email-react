import React, { createContext, useState } from "react";
import { API } from "@/utils/api";
import Fetch from "@/utils/axios";
import NotoficationHandler from "@/utils/notificationHandler";

export const ContactContaxt = createContext();

export default function ContactContaxtProvider({ children }) {
  const [isContactLoading, setContactLoading] = useState(false);
  const [contacts, setContacts] = useState([]);

  const [uploading, setUploading] = useState(false);

  const getContact = async () => {
    setContactLoading(true);
    try {
      const result = await Fetch.get(API.contact);
      setContacts(result?.data?.contactGroup);
      setContactLoading(false);
    } catch (e) {
      console.log(e?.response?.data);
      setContactLoading(false);
    }
  };

  const addContact = async (data, setOpenModal = false, form = null) => {
    setContactLoading(true);
    setUploading(true);
    try {
      setOpenModal(false);
      let formData = new FormData();
      formData.append("name", data.name);
      formData.append("file", data.files.file.originFileObj);
      const result = await Fetch.post(API.contact, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setUploading(false);
      getContact();
      setContactLoading(false);
      setOpenModal(false);
      NotoficationHandler(result.data);
      form.resetFields();
    } catch (e) {
      setUploading(false);
      console.log(e?.response?.data);
      setOpenModal(false);
      form.resetFields();
      setContactLoading(false);
      NotoficationHandler(e?.response?.data, "error");
    }
  };

  const deleteContact = async (id) => {
    setContactLoading(true);
    try {
      const result = await Fetch.delete(`${API.contact}/${id}`);
      console.log("result", result);
      getContact();
      setContactLoading(false);
      NotoficationHandler(result.data);
    } catch (e) {
      console.log(e?.response?.data);
      setContactLoading(false);
      NotoficationHandler(e?.response?.data, "error");
    }
  };

  return (
    <ContactContaxt.Provider
      value={{
        getContact,
        isContactLoading,
        addContact,
        contacts,
        deleteContact,
        uploading,
      }}
    >
      {children}
    </ContactContaxt.Provider>
  );
}
