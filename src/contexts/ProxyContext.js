import React, { createContext, useState } from "react";
import { API } from "@/utils/api";
import Fetch from "@/utils/axios";
import NotoficationHandler from "@/utils/notificationHandler";

export const ProxyContext = createContext();

export default function ProxyContextProvider({ children }) {
  const [isProxyLoading, setProxyLoading] = useState(false);
  const [proxy, setProxy] = useState([]);

  const getProxy = async () => {
    setProxyLoading(true);
    try {
      const result = await Fetch.get(API.proxy);
      setProxy(result?.data);
      setProxyLoading(false);
    } catch (e) {
      console.log(e?.response?.data);
      setProxyLoading(false);
    }
  };

  const addProxy = async (data, setOpenModal = false) => {
    setProxyLoading(true);
    try {
      const result = await Fetch.post(API.proxy, data);
      setOpenModal(false);
      setProxyLoading(false);
      NotoficationHandler(result?.data);
      getProxy();
    } catch (e) {
      setOpenModal(false);
      setProxyLoading(false);
      NotoficationHandler(e?.response?.data, "error");
    }
  };

  const deleteProxy = async (id) => {
    setProxyLoading(true);
    try {
      const result = await Fetch.delete(`${API.proxy}/${id}`);
      getProxy();
      setProxyLoading(false);
      NotoficationHandler(result.data);
    } catch (e) {
      getProxy();
      setProxyLoading(false);
      NotoficationHandler(e?.response?.data, "error");
    }
  };

  const addMoreProxy = async (data, form2 = null, setAddMoreModal = false) => {
    setProxyLoading(true);
    try {
      const result = await Fetch.put(API.proxy + "/addmore/" + data.id, data);
      setProxyLoading(false);
      setAddMoreModal(false);
      form2.resetFields();
      NotoficationHandler(result?.data);
      getProxy();
    } catch (e) {
      setAddMoreModal(false);
      form2.resetFields();
      setProxyLoading(false);
      NotoficationHandler(e?.response?.data, "error");
    }
  };

  return (
    <ProxyContext.Provider
      value={{
        getProxy,
        isProxyLoading,
        addProxy,
        proxy,
        deleteProxy,
        addMoreProxy,
      }}
    >
      {children}
    </ProxyContext.Provider>
  );
}
