import { AssetContext } from "@/contexts/AssetContext";
import Layouts from "@/layouts/index";
import {
  InboxOutlined,
  RightCircleOutlined
} from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  Row,
  Space,
  Typography,
  Upload
} from "antd";
import { useContext } from "react";

const { Dragger } = Upload;

const AddAsset = () => {
  const { addAsset, isAssetLoading } = useContext(AssetContext);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    addAsset({
      ...values,
    });
  };

  return (
    <Card title="Add Asset">
      <Form name="basic" layout="vertical" form={form} onFinish={onFinish}>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              label="Asset Name"
              name="name"
              rules={[
                { required: true, message: "Please input your asset name!" },
              ]}
            >
              <Input placeholder="Enter Asset Name" />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              label="Sender Name"
              name="senderName"
              rules={[
                {
                  required: true,
                  message: "Please input your sender name!",
                },
              ]}
            >
              <Input.TextArea placeholder="Enter Asset Description" rows={4} />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label="Subject"
              name="subject"
              rules={[
                {
                  required: true,
                  message: "Please input subject!",
                },
              ]}
            >
              <Input.TextArea placeholder="Enter Subject" rows={4} />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label="Body"
              name="body"
              rules={[
                {
                  required: true,
                  message: "Please input Body!",
                },
              ]}
            >
              <Input.TextArea placeholder="Enter Body" rows={4} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label={"Pdf/Doc"}
              name="pdf"
              rules={[
                {
                  required: true,
                  message: "Please Enter Contacts",
                },
              ]}
            >
              <Dragger accept={[".pdf"]}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload.
                </p>
              </Dragger>
            </Form.Item>
          </Col>
          <Col
            span={12}
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 16,
              paddingLeft: 16,
            }}
          >
            <Typography.Text>{"Auto Generated Variable "}</Typography.Text>
            <Typography.Text type="secondary">
              <strong
                style={{
                  color: "blue",
                }}
              >
                {"{*{random_number(0)}*}"}
              </strong>
              {" Use this for Generate Number(1-9) Only"}
            </Typography.Text>
            <Typography.Text type="secondary">
              <strong
                style={{
                  color: "blue",
                }}
              >
                {"{*{ab(0)}*}"}
              </strong>
              {
                " Use this variable for generate random Alphabet A to Z (1-9) Only "
              }
            </Typography.Text>
            <Typography.Text type="secondary">
              <strong
                style={{
                  color: "blue",
                }}
              >
                {"{*{recipient_email}*} "}
              </strong>
              {"Use this variable for Recipient Email Replace"}
            </Typography.Text>
            <Typography.Text type="secondary">
              <strong
                style={{
                  color: "blue",
                }}
              >
                {"{*{recipient_name}*}"}
              </strong>
              {"  Use this variable for Recipient Name Replace"}
            </Typography.Text>
            <Typography.Text type="secondary">
              <strong
                style={{
                  color: "blue",
                }}
              >
                {"{{date}}"}
              </strong>
              {" Use this variable for Today Date"}
            </Typography.Text>
          </Col>
        </Row>
        <Space
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: 16,
          }}
        >
          <Button loading={isAssetLoading} disabled={isAssetLoading}>
            Cancel
          </Button>
          <Button
            loading={isAssetLoading}
            disabled={isAssetLoading}
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
AddAsset.Layout = Layouts;
export default AddAsset;
