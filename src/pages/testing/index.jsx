import { CamapignContext } from "@/contexts/CampaignContext";
import { SmtpContaxt } from "@/contexts/SmtpContext";
import { TestMailContaxt } from "@/contexts/TestMailContext";
import Layouts from "@/layouts/index";
import { RightCircleOutlined, RollbackOutlined } from "@ant-design/icons";
import { Button, Card, Col, Form, Input, Row, Select, Space } from "antd";
import Head from "next/head";
import React, { useContext, useEffect } from "react";

const Testing = () => {
  const [form] = Form.useForm();
  const { getCampaign, campaign } = useContext(CamapignContext);
  const { getSmtp, smtps } = useContext(SmtpContaxt);
  const { sendEmail, isMailTestLoading } = useContext(TestMailContaxt);

  const onFinish = (values) => {
    sendEmail(values, form);
  };

  useEffect(() => {
    getCampaign();
    getSmtp();
  }, []);

  return (
    <>
      <Head>
        <title>Falcon Dynamic || Mail Test</title>
        <meta
          name="description"
          content="Falcons Dynamic is a dynamic company that is into the business of providing solutions to the problems of the society."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Card title="Mail Testing" loading={false}>
        <Form layout="vertical" name="testing" form={form} onFinish={onFinish}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Select Campaign" name="campaignId">
                <Select
                  options={
                    campaign?.map((item) => ({
                      label: item.name,
                      value: item._id,
                    })) ?? []
                  }
                  placeholder={"Select a Campaign"}
                  showSearch
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Select Smtp" name="smtpGroupId">
                <Select
                  options={
                    smtps?.map((item) => ({
                      label: item.name,
                      value: item._id,
                    })) ?? []
                  }
                  placeholder={"Select a Smtp Group"}
                  showSearch
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Recipient Name" name="recipient_name">
                <Input placeholder="Recipient Name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Recipient Email" name="recipient_email">
                <Input placeholder="example@mail.com" />
              </Form.Item>
            </Col>
          </Row>
          <Space
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "1rem",
            }}
          >
            <Button
              loading={isMailTestLoading}
              disabled={isMailTestLoading}
              icon={<RollbackOutlined />}
              type="default"
              htmlType="reset"
            >
              Reset
            </Button>
            <Button
              icon={<RightCircleOutlined />}
              type="primary"
              htmlType="submit"
              loading={isMailTestLoading}
              disabled={isMailTestLoading}
            >
              Send
            </Button>
          </Space>
        </Form>
      </Card>
    </>
  );
};

Testing.Layout = Layouts;
export default Testing;
