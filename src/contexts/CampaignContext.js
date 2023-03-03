import React, { createContext, useState } from "react";
import { API } from "@/utils/api";
import Fetch from "@/utils/axios";
import NotoficationHandler from "@/utils/notificationHandler";
import { useRouter } from "next/router";

export const CamapignContext = createContext();

export default function CamapignContextProvider({ children }) {
  const Router = useRouter();
  const [isCampaignLoading, setIsCampaignLoading] = useState(false);
  const [campaignById, setCampaignById] = useState({});
  const [campaign, setCampaign] = useState([]);

  const getCampaign = async () => {
    setIsCampaignLoading(true);
    try {
      const result = await Fetch.get(API.campaign);
      setCampaign(result?.data?.campaign);
      setIsCampaignLoading(false);
    } catch (e) {
      console.log(e?.response?.data);
      setIsCampaignLoading(false);
    }
  };

  const addCampaign = async (data) => {
    setIsCampaignLoading(true);
    try {
      const result = await Fetch.post(API.campaign, data);
      NotoficationHandler(result?.data);
      Router.push("/campaign");
      setIsCampaignLoading(false);
    } catch (e) {
      setIsCampaignLoading(false);
      NotoficationHandler(e?.response?.data, "error");
    }
  };

  const deleteCampaign = async (id) => {
    setIsCampaignLoading(true);
    try {
      const result = await Fetch.delete(`${API.campaign}/${id}`);
      setIsCampaignLoading(false);
      NotoficationHandler(result.data);
      getCampaign();
    } catch (e) {
      setIsCampaignLoading(false);
      NotoficationHandler(e?.response?.data, "error");
    }
  };

  const getCampaignById = async (id) => {
    setIsCampaignLoading(true);
    try {
      const result = await Fetch.get(`${API.campaign}/${id}`);
      setCampaignById(result?.data?.campaign);
      setIsCampaignLoading(false);
    } catch (e) {
      setIsCampaignLoading(false);
    }
  };

  const updateCampaign = async (data) => {
    setIsCampaignLoading(true);
    try {
      const result = await Fetch.put(`${API.campaign}/${data.id}`, data);
      NotoficationHandler(result?.data);
      Router.push("/campaign");
      setIsCampaignLoading(false);
    } catch (e) {
      setIsCampaignLoading(false);
      NotoficationHandler(e?.response?.data, "error");
    }
  };

  const updateCampaignStatus = async (data) => {
    setIsCampaignLoading(true);
    try {
      const result = await Fetch.put(
        `${API.updateCampaignStatus}/${data.id}`,
        data
      );
      NotoficationHandler(result?.data);
      getCampaign();
      setIsCampaignLoading(false);
    } catch (e) {
      setIsCampaignLoading(false);
      NotoficationHandler(e?.response?.data, "error");
    }
  };

  const deleteRestCampaign = async () => {
    setIsCampaignLoading(true);
    try {
      const result = await Fetch.delete(`${API.campaign}/delete/RestCampaign`);
      console.log("result", result);
      NotoficationHandler(result?.data);
      setIsCampaignLoading(false);
      getCampaign();
    } catch (e) {
      getCampaign();
      setIsCampaignLoading(false);
      NotoficationHandler(e?.response?.data, "error");
    }
  };

  return (
    <CamapignContext.Provider
      value={{
        isCampaignLoading,
        campaign,
        getCampaign,
        addCampaign,
        deleteCampaign,
        getCampaignById,
        campaignById,
        updateCampaign,
        updateCampaignStatus,
        deleteRestCampaign,
      }}
    >
      {children}
    </CamapignContext.Provider>
  );
}
