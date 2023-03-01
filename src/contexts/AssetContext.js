import React, { createContext, useState } from "react";
import { API } from "@/utils/api";
import Fetch from "@/utils/axios";
import NotoficationHandler from "@/utils/notificationHandler";
import { useRouter } from "next/router";

export const AssetContext = createContext();

export default function AssetContextProvider({ children }) {
  const Router = useRouter();
  const [isAssetLoading, setAssetLoading] = useState(false);
  const [assetById, setAssetById] = useState({});

  const [assets, setAsset] = useState([]);

  const getAsset = async () => {
    setAssetLoading(true);
    try {
      const result = await Fetch.get(API.asset);
      setAsset(result?.data?.asset);
      setAssetLoading(false);
    } catch (e) {
      console.log(e?.response?.data);
      setAssetLoading(false);
    }
  };

  const addAsset = async (data) => {
    setAssetLoading(true);
    try {
      let formData = new FormData();
      formData.append("name", data.name);
      formData.append("senderName", data.senderName);
      formData.append("subject", data.subject);
      formData.append("body", data.body);
      formData.append("images", data.images);
      formData.append("pdf", data.pdf.fileList[0].originFileObj);
      const result = await Fetch.post(API.asset, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      Router.push("/asset");
      setAssetLoading(false);
      NotoficationHandler(result?.data);
      getAsset();
    } catch (e) {
      console.log(e?.response?.data);
      setAssetLoading(false);
      NotoficationHandler(e?.response?.data, "error");
    }
  };

  const deleteAsset = async (id) => {
    setAssetLoading(true);
    try {
      const result = await Fetch.delete(`${API.asset}/${id}`);
      getAsset();
      setAssetLoading(false);
      NotoficationHandler(result.data);
    } catch (e) {
      console.log(e?.response?.data);
      setAssetLoading(false);
      NotoficationHandler(e?.response?.data, "error");
    }
  };

  const updateAsset = async (data) => {
    console.log("data", data);
    setAssetLoading(true);
    try {
      let formData = new FormData();
      formData.append("name", data.name);
      formData.append("senderName", data.senderName);
      formData.append("subject", data.subject);
      formData.append("body", data.body);
      formData.append("images", data.images);
      formData.append("pdf", data.pdf.fileList[0].originFileObj);
      const result = await Fetch.put(`${API.asset}/${data.id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      Router.push("/asset");
      setAssetLoading(false);
      NotoficationHandler(result?.data);
      getAsset();
    } catch (e) {
      console.log(e?.response?.data);
      setAssetLoading(false);
      NotoficationHandler(e?.response?.data, "error");
    }
  };

  const GetAssetById = async (id) => {
    setAssetLoading(true);
    try {
      const result = await Fetch.get(`${API.asset}/${id}`);
      setAssetLoading(false);
      setAssetById(result?.data?.asset);
    } catch (e) {
      console.log(e?.response?.data);
      NotoficationHandler(e?.response?.data, "error");
      setAssetLoading(false);
    }
  };

  return (
    <AssetContext.Provider
      value={{
        getAsset,
        isAssetLoading,
        addAsset,
        assets,
        deleteAsset,
        GetAssetById,
        assetById,
        updateAsset,
      }}
    >
      {children}
    </AssetContext.Provider>
  );
}
