import React, { useContext } from "react";
import { Card, Col, Row, Space, Typography } from "antd";
import { DashboardContext } from "@/contexts/DashboardContext";
import Layouts from "@/layouts/index";
import { MailOutlined } from "@ant-design/icons";
import DashboardCard from "@/components/Dashboard/DashboardCard";
import {
  FcHome,
  FcKey,
  FcSynchronize,
  FcBiotech,
  FcBusinessman,
  FcAddDatabase,
  FcAddressBook,
  FcBrokenLink,
} from "react-icons/fc";
import Head from "next/head";

const Dashboard = () => {
  const { getDashboard, dashboard } = useContext(DashboardContext);

  React.useEffect(() => {
    getDashboard();
  }, []);

  return (
    <>
      <Head>
        <title>Falcon Dynamic || Dashboard</title>
        <meta
          name="description"
          content="Falcons Dynamic is a dynamic company that is into the business of providing solutions to the problems of the society."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Row gutter={[16, 16]}>
        <Col span={6}>
          <DashboardCard
            icon={<FcBusinessman />}
            title={"Contact Group"}
            value={dashboard?.contactGroupCount}
          />
        </Col>
        <Col span={6}>
          <DashboardCard
            icon={<FcBusinessman />}
            title={"Total Contacts"}
            value={dashboard?.contactsCount}
          />
        </Col>
        <Col span={6}>
          <DashboardCard
            icon={<FcKey />}
            title={"Proxy Group"}
            value={dashboard?.proxyGroupCount}
          />
        </Col>
        <Col span={6}>
          <DashboardCard
            icon={<FcKey />}
            title={"Total Proxies"}
            value={dashboard?.proxyCount}
          />
        </Col>
        <Col span={6}>
          <DashboardCard
            icon={<FcBrokenLink />}
            title={"SMTP Group"}
            value={dashboard?.smtpGroupCount}
          />
        </Col>
        <Col span={6}>
          <DashboardCard
            icon={<FcBrokenLink />}
            title={"Total SMTP"}
            value={dashboard?.smtpCount}
          />
        </Col>
        <Col span={6}>
          <DashboardCard
            icon={<FcBrokenLink />}
            title={"Active SMTP"}
            value={dashboard?.activeSmtp}
          />
        </Col>
        <Col span={6}>
          <DashboardCard
            icon={<FcBrokenLink />}
            title={"Dead SMTP"}
            value={dashboard?.deadSmtp}
          />
        </Col>
        <Col span={6}>
          <DashboardCard
            icon={<FcBiotech />}
            title={"Total Campaign"}
            value={dashboard?.campaignCount}
          />
        </Col>
        <Col span={6}>
          <DashboardCard
            icon={<FcBiotech />}
            title={"Running Campaign"}
            value={dashboard?.runningCampaign}
          />
        </Col>
        <Col span={6}>
          <DashboardCard
            icon={<FcBiotech />}
            title={"Paused Campaign"}
            value={dashboard?.pausedCampaign}
          />
        </Col>
        <Col span={6}>
          <DashboardCard
            icon={<FcBiotech />}
            title={"Completed Campaign"}
            value={dashboard?.completedCampaign}
          />
        </Col>
        <Col span={6}>
          <DashboardCard
            icon={<FcAddressBook />}
            title={"Vadalidating Contact"}
            value={dashboard?.ValidatorGroupCount}
          />
        </Col>
        <Col span={6}>
          <DashboardCard
            icon={<FcAddDatabase />}
            title={"System Assets"}
            value={dashboard?.assetCount}
          />
        </Col>
      </Row>
    </>
  );
};

Dashboard.Layout = Layouts;
export default Dashboard;
