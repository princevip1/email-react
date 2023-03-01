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
      console.log(e?.response?.data);
      setProxyLoading(false);
      NotoficationHandler(e?.response?.data, "error");
    }
  };

  return (
    <ProxyContext.Provider
      value={{ getProxy, isProxyLoading, addProxy, proxy, deleteProxy }}
    >
      {children}
    </ProxyContext.Provider>
  );
}
