import Layouts from "@/layouts/index";
import { getRandomColor } from "@/utils/getRandomColor";
import { MailOutlined } from "@ant-design/icons";
import { Card, Col, Row, Space, Typography } from "antd";
import React from "react";

const Dashboard = () => {
  return (
    <Row gutter={[16, 16]}>
      {[1, 2, 3, 4].map((item) => (
        <Col span={6}>
          <Card hoverable>
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
                <MailOutlined />
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
                <Typography.Text
                  style={{
                    fontSize: 20,
                  }}
                >
                  100
                </Typography.Text>
                <Typography.Text>Total Contact</Typography.Text>
              </Space>
            </Space>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

Dashboard.Layout = Layouts;
export default Dashboard;
