import { AssetContext } from "@/contexts/AssetContext";
import Layouts from "@/layouts/index";
import {
  InboxOutlined,
  PlusOutlined,
  RightCircleOutlined,
} from "@ant-design/icons";
import { Button, Card, Col, Form, Input, Row, Space, Upload } from "antd";
import React, { useContext, useState } from "react";

const { Dragger } = Upload;

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const AddAsset = () => {
  const { addAsset, isAssetLoading } = useContext(AssetContext);
  const [form] = Form.useForm();

  const [fileList, setFileList] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  const onFinish = (values) => {
    addAsset({
      ...values,
      images: imageUrls,
    });
  };

  const handleChange = async (file) => {
    setFileList(file.fileList);
    if (file.file.status === "done") {
      const url = await getBase64(file.file.originFileObj);
      file.file.url = url;
      setImageUrls((imageUrls) => [...imageUrls, file.file.url]);
    }
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
          <Col span={12}>
            <Form.Item
              label={"Image"}
              name="images"
              rules={[
                {
                  required: true,
                  message: "Please Enter Contacts",
                },
              ]}
            >
              <Upload
                listType="picture-card"
                onChange={handleChange}
                maxCount={10}
                multiple={true}
              >
                {fileList.length >= 10 ? null : uploadButton}
              </Upload>
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
