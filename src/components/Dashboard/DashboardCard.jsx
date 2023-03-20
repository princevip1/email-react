import { DashboardContext } from "@/contexts/DashboardContext";
import { Card, Space, Typography } from "antd";
import React, { useContext } from "react";

const DashboardCard = ({ icon, title, value }) => {
  const { isDashboardLoading } = useContext(DashboardContext);
  return (
    <Card hoverable loading={isDashboardLoading}>
      <Space
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "#F2EBFD",
            color: "#752BDF",
            height: 40,
            width: 40,
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {icon}
        </div>
        <Space
          direction="vertical"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 0,
            marginLeft: 16,
          }}
        >
          <Typography.Text>{title}</Typography.Text>
          <Typography.Text
            style={{
              fontSize: 20,
            }}
          >
            {value}
          </Typography.Text>
        </Space>
      </Space>
    </Card>
  );
};

export default DashboardCard;
