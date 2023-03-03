import { AssetContext } from "@/contexts/AssetContext";
import { CamapignContext } from "@/contexts/CampaignContext";
import { ContactContaxt } from "@/contexts/ContactContaxt";
import { SmtpContaxt } from "@/contexts/SmtpContext";
import Layouts from "@/layouts/index";
import { RightCircleOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Divider,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Space,
  Switch,
} from "antd";
import React, { useContext, useEffect } from "react";

const AddCampaign = () => {
  const { getAsset, assets } = useContext(AssetContext);
  const { contacts, getContact } = useContext(ContactContaxt);
  const { addCampaign, isCampaignLoading } = useContext(CamapignContext);
  const { getSmtp, smtps } = useContext(SmtpContaxt);
  const [form] = Form.useForm();
  const [isBody, setIsBody] = React.useState(false);
  const [isInlineImage, setIsInlineImage] = React.useState(false);

  const onFinish = (values) => {
    addCampaign({
      ...values,
    });
  };
  useEffect(() => {
    getAsset();
    getContact();
    getSmtp();
  }, []);

  return (
    <Card title="Add Campaign">
      <Form name="basic" layout="vertical" form={form} onFinish={onFinish}>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              label="Campaign Name"
              name="name"
              rules={[
                { required: true, message: "Please input your asset name!" },
              ]}
            >
              <Input placeholder="Enter Campaign Name" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Bot Id"
              name="botId"
              rules={[
                { required: true, message: "Please input your asset name!" },
              ]}
            >
              <Input placeholder="Enter Bot Id" />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              label="Select Asset"
              name="assetId"
              rules={[
                { required: true, message: "Please input your asset name!" },
              ]}
            >
              <Select
                placeholder="Select Asset"
                options={assets?.map((item) => {
                  return {
                    value: item._id,
                    label: item.name,
                  };
                })}
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Select Contact"
              name="contactId"
              rules={[
                { required: true, message: "Please input your asset name!" },
              ]}
            >
              <Select
                placeholder="Select Contact"
                options={contacts?.map((item) => {
                  return {
                    value: item?._id,
                    label: item?.name,
                    disabled: item?.disable,
                  };
                })}
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Select Smtp"
              name="smtpId"
              rules={[
                { required: true, message: "Please input your asset name!" },
              ]}
            >
              <Select
                placeholder="Select Smtp"
                options={
                  smtps?.map((item) => {
                    return {
                      value: item?._id,
                      label: item?.name,
                      disabled: item?.disable,
                    };
                  }) || []
                }
              />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item
              label="Smtp Limit"
              name="smtpLimit"
              rules={[
                { required: true, message: "Please input your Smtp Limit!" },
              ]}
            >
              <InputNumber
                style={{
                  width: "100%",
                }}
                placeholder="Enter Smtp Limit"
              />
            </Form.Item>
          </Col>

          <Divider orientation="left">Proxy Control</Divider>

          <Col span={8}>
            <Form.Item
              label="Are you using proxy"
              name="proxy"
              rules={[
                {
                  required: true,
                  message: "Please input your sender name!",
                },
              ]}
            >
              <Select
                style={{
                  width: "100%",
                }}
                placeholder="Select Proxy"
                options={[
                  {
                    value: true,
                    label: "Yes",
                  },
                  {
                    value: false,
                    label: "No",
                  },
                ]}
              />
            </Form.Item>
          </Col>
        </Row>
        <Space
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: 16,
          }}
        >
          <Button loading={isCampaignLoading} disabled={isCampaignLoading}>
            Cancel
          </Button>
          <Button
            loading={isCampaignLoading}
            disabled={isCampaignLoading}
            icon={<RightCircleOutlined />}
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
        </Space>
      </Form>
    </Card>
  );
};
AddCampaign.Layout = Layouts;
export default AddCampaign;
