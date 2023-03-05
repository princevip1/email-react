import React, { useContext, useEffect, useState } from "react";
import Layouts from "@/layouts/index";
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  Modal,
  Popconfirm,
  Row,
  Space,
  Table,
  message,
  Upload,
  Menu,
  Tooltip,
  Dropdown,
  Typography,
  Tag,
} from "antd";
import {
  CloseCircleOutlined,
  DeleteOutlined,
  DownloadOutlined,
  DownOutlined,
  InboxOutlined,
  PlusCircleOutlined,
  RetweetOutlined,
  RightCircleOutlined,
} from "@ant-design/icons";
import { ContactContaxt } from "@/contexts/ContactContaxt";
import { SmtpContaxt } from "@/contexts/SmtpContext";
import Link from "next/link";
import { BASE_URL } from "@/utils/api";

const { Dragger } = Upload;

const Smtp = () => {
  const {
    getSmtp,
    isSmtpLoading,
    addSmtp,
    smtps,
    deleteSmtp,
    addMoreSmtp,
    downloadSmtp,
  } = useContext(SmtpContaxt);
  const [form] = Form.useForm();
  const [addMoreForm] = Form.useForm();
  const [openModal, setOpenModal] = useState(false);
  const [addMoreModal, setAddMoreModal] = useState(false);
  const [selectSmtpGroup, setSelectSmtpGroup] = useState(null);

  const onFinish = (values) => {
    addSmtp(values, setOpenModal, form);
  };

  const addMoreOnFinish = (values) => {
    addMoreSmtp(
      {
        ...values,
        groupId: selectSmtpGroup._id,
      },
      setAddMoreModal,
      addMoreForm
    );
  };

  useEffect(() => {
    getSmtp();
  }, []);

  const columns = [
    {
      title: "Sl",
      dataIndex: "sl",
      key: "sl",
      render: (text, record, index) => {
        return index + 1;
      },
    },
    {
      title: "Group Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      render: (text, record, index) => {
        return <Typography.Text>Gmail</Typography.Text>;
      },
    },
    {
      title: "Total Smtp",
      dataIndex: "count",
      key: "count",
      render: (count, record) => <Tag color="blue">{count} </Tag>,
    },
    {
      title: "Active Smtp",
      dataIndex: "active",
      key: "active",
      render: (active, record) => <Tag color="green">{active} </Tag>,
    },
    {
      title: "Dead Smtp",
      dataIndex: "dead",
      key: "dead",
      render: (dead, record) => <Tag color="red">{dead} </Tag>,
    },

    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item>
                <Tooltip title="Add More">
                  <Button
                    style={{ width: "100%", textAlign: "left" }}
                    onClick={() => {
                      setAddMoreModal(true);
                      setSelectSmtpGroup(record);
                    }}
                    type="ghost"
                    size="small"
                    icon={<PlusCircleOutlined />}
                  >
                    Add More
                  </Button>
                </Tooltip>
              </Menu.Item>
              <Menu.Item>
                <Tooltip title="Download">
                  <Link
                    href={`${BASE_URL}/download/smtp/${record._id}`}
                    target="_blank"
                  >
                    <Button
                      style={{ width: "100%", textAlign: "left" }}
                      type="ghost"
                      size="small"
                      icon={<DownloadOutlined />}
                    >
                      Download
                    </Button>
                  </Link>
                </Tooltip>
              </Menu.Item>

              <Menu.Item>
                <Tooltip title="Delete">
                  <Popconfirm
                    title="Are you sure？"
                    onConfirm={() => {
                      deleteSmtp(record._id);
                    }}
                  >
                    <Button
                      style={{ width: "100%", textAlign: "left" }}
                      type="text"
                      size="small"
                      danger
                      icon={<DeleteOutlined />}
                    >
                      Delete
                    </Button>
                  </Popconfirm>
                </Tooltip>
              </Menu.Item>
            </Menu>
          }
          trigger={["click"]}
          arrow
          overlayStyle={{ width: 200 }}
          placement="bottomRight"
        >
          <a onClick={(e) => e.preventDefault()}>
            <Button size="small">
              Action
              <DownOutlined />
            </Button>
          </a>
        </Dropdown>
      ),
    },
  ];

  const props = {
    multiple: false,

    customRequest({ file, onSuccess }) {
      onSuccess("success", file);
    },
  };

  return (
    <Card
      title={"Smtp"}
      extra={
        <Space>
          <Button
            loading={isSmtpLoading}
            disabled={isSmtpLoading}
            onClick={() => getSmtp()}
            size="small"
            icon={<RetweetOutlined />}
          >
            Refresh
          </Button>
          <Button
            onClick={() => setOpenModal(true)}
            size="small"
            type="primary"
            icon={<PlusCircleOutlined />}
          >
            Add New
          </Button>
        </Space>
      }
    >
      <Table
        loading={isSmtpLoading}
        size="small"
        dataSource={smtps && smtps ? smtps : []}
        columns={columns}
      />

      <Modal
        open={openModal}
        onCancel={() => setOpenModal(false)}
        title={"Add Smtp"}
        footer={null}
        width={600}
      >
        <Form layout="vertical" form={form} onFinish={onFinish}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Form.Item
                label={"Smtp Group Name"}
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please Enter Group Name",
                  },
                ]}
              >
                <Input placeholder="Smtp Group Name" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label={"Smtp File"}
                name="files"
                rules={[
                  {
                    required: true,
                    message: "Please Enter Contacts",
                  },
                ]}
              >
                <Dragger {...props} accept={[".csv", ".xlsx", ".xls"]}>
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
          </Row>
          <Space
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: 16,
            }}
          >
            <Button
              loading={isSmtpLoading}
              disabled={isSmtpLoading}
              onClick={() => setOpenModal(false)}
              icon={<CloseCircleOutlined />}
              danger
            >
              Cancel
            </Button>
            <Button
              loading={isSmtpLoading}
              disabled={isSmtpLoading}
              htmlType="submit"
              icon={<RightCircleOutlined />}
              type="primary"
            >
              Submit
            </Button>
          </Space>
        </Form>
      </Modal>

      <Modal
        open={addMoreModal}
        onCancel={() => {
          setAddMoreModal(false);
          addMoreForm.resetFields();
        }}
        title={"Add More Smtp"}
        footer={null}
        width={600}
      >
        <Form layout="vertical" form={addMoreForm} onFinish={addMoreOnFinish}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Form.Item
                label={"Smtp"}
                name="files"
                rules={[
                  {
                    required: true,
                    message: "Please Enter Contacts",
                  },
                ]}
              >
                <Dragger {...props} accept={[".csv", ".xlsx", ".xls"]}>
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
          </Row>
          <Space
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: 16,
            }}
          >
            <Button
              loading={isSmtpLoading}
              disabled={isSmtpLoading}
              onClick={() => {
                setAddMoreModal(false);
                addMoreForm.resetFields();
              }}
              icon={<CloseCircleOutlined />}
              danger
            >
              Cancel
            </Button>
            <Button
              loading={isSmtpLoading}
              disabled={isSmtpLoading}
              htmlType="submit"
              icon={<RightCircleOutlined />}
              type="primary"
            >
              Submit
            </Button>
          </Space>
        </Form>
      </Modal>
    </Card>
  );
};

Smtp.Layout = Layouts;
export default Smtp;
