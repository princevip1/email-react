import React, { createContext, useState } from "react";
import { API } from "@/utils/api";
import Fetch from "@/utils/axios";
import NotoficationHandler from "@/utils/notificationHandler";

export const ValidatorContactContaxt = createContext();

export default function ValidatorContactContaxtProvider({ children }) {
  const [isValidatorContactLoading, setValidatorContactLoading] =
    useState(false);
  const [validatorContacts, setValidatorContacts] = useState([]);

  const getContact = async () => {
    setValidatorContactLoading(true);
    try {
      const result = await Fetch.get(API.validator);
      setValidatorContacts(result?.data?.validatorGroup);
      setValidatorContactLoading(false);
    } catch (e) {
      console.log(e?.response?.data);
      setValidatorContactLoading(false);
    }
  };

  const addContact = async (data, setOpenModal = false, form = null) => {
    setValidatorContactLoading(true);
    try {
      let formData = new FormData();
      formData.append("name", data.name);
      formData.append("file", data.files.file.originFileObj);
      const result = await Fetch.post(API.validator, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      getContact();
      setValidatorContactLoading(false);
      setOpenModal(false);
      NotoficationHandler(result?.data);
      form.resetFields();
    } catch (e) {
      console.log(e?.response?.data);
      setOpenModal(false);
      form.resetFields();
      setValidatorContactLoading(false);
      NotoficationHandler(e?.response?.data, "error");
    }
  };

  const deleteContact = async (id) => {
    setValidatorContactLoading(true);
    try {
      const result = await Fetch.delete(`${API.validator}/${id}`);
      getContact();
      setValidatorContactLoading(false);
      NotoficationHandler(result.data);
    } catch (e) {
      console.log(e?.response?.data);
      setValidatorContactLoading(false);
      NotoficationHandler(e?.response?.data, "error");
    }
  };

  const updateStatus = async (data) => {
    setValidatorContactLoading(true);
    try {
      const result = await Fetch.put(
        `${API.validator}/status/${data.id}`,
        data
      );
      getContact();
      setValidatorContactLoading(false);
      NotoficationHandler(result.data);
    } catch (e) {
      console.log(e?.response?.data);
      setValidatorContactLoading(false);
      NotoficationHandler(e?.response?.data, "error");
    }
  };

  return (
    <ValidatorContactContaxt.Provider
      value={{
        getContact,
        isValidatorContactLoading,
        addContact,
        validatorContacts,
        deleteContact,
        updateStatus,
      }}
    >
      {children}
    </ValidatorContactContaxt.Provider>
  );
}
