import { ValidatorContactContaxt } from "@/contexts/ValidatorContactContaxt copy";
import Layouts from "@/layouts/index";
import { API, BASE_URL } from "@/utils/api";
import {
  CloseCircleOutlined,
  DeleteOutlined,
  DownloadOutlined,
  DownOutlined,
  InboxOutlined,
  InfoCircleOutlined,
  PlusCircleOutlined,
  RetweetOutlined,
  RightCircleOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Dropdown,
  Form,
  Input,
  Menu,
  Modal,
  Popconfirm,
  Row,
  Space,
  Table,
  Tag,
  Tooltip,
  Upload,
} from "antd";
import Head from "next/head";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
const { Dragger } = Upload;

const Validator = () => {
  const {
    getContact,
    isValidatorContactLoading,
    addContact,
    validatorContacts,
    deleteContact,
    updateStatus,
    downloadFile,
  } = useContext(ValidatorContactContaxt);
  const [form] = Form.useForm();
  const [openModal, setOpenModal] = useState(false);

  const onFinish = (values) => {
    addContact(
      {
        ...values,
      },
      setOpenModal,
      form
    );
  };

  useEffect(() => {
    getContact();
  }, []);

  const columns = [
    {
      title: "Sl",
      dataIndex: "sl",
      key: "sl",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Contact Group",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Total Contact",
      dataIndex: "count",
      key: "count",
      render: (count, record) => <Tag color="blue">{count} </Tag>,
    },
    {
      title: "Valid Contact",
      dataIndex: "validCount",
      key: "validCount",
      render: (validCount, record) => <Tag color="green">{validCount} </Tag>,
    },
    {
      title: "Invalid Contact",
      dataIndex: "invalidCount",
      key: "invalidCount",
      render: (invalidCount, record) => <Tag color="red">{invalidCount} </Tag>,
    },
    {
      title: "Pending Contact",
      dataIndex: "notValidateCount",
      key: "notValidateCount",
      render: (notValidateCount, record) => (
        <Tag color="orange">{notValidateCount} </Tag>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag
          color={
            status === "active"
              ? "green"
              : status === "pending"
              ? "orange"
              : status === "complete"
              ? "blue"
              : "red"
          }
        >
          {status}
        </Tag>
      ),
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
                <Tooltip title="Start Validator">
                  <Popconfirm
                    title="Are you sure? "
                    onConfirm={() => {
                      updateStatus({
                        id: record._id,
                        status: "active",
                      });
                    }}
                  >
                    <Button
                      type="ghost"
                      size="small"
                      icon={<RightCircleOutlined />}
                    >
                      Start
                    </Button>
                  </Popconfirm>
                </Tooltip>
              </Menu.Item>
              <Menu.Item>
                <Tooltip title="Paused Validator">
                  <Popconfirm
                    title="Are you sure？"
                    onConfirm={() => {
                      updateStatus({
                        id: record._id,
                        status: "pasued",
                      });
                    }}
                  >
                    <Button
                      type="text"
                      size="small"
                      danger
                      icon={<InfoCircleOutlined />}
                    >
                      Stop
                    </Button>
                  </Popconfirm>
                </Tooltip>
              </Menu.Item>
              <Menu.Item>
                <Tooltip title="Download Contact">
                  <Link
                    href={`${BASE_URL}/download/validator/contact/${record._id}`}
                    target="_blank"
                  >
                    <Button
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
                      deleteContact(record._id);
                    }}
                  >
                    <Button
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
    <>
      <Head>
        <title>Falcon Dynamic || Validator</title>
        <meta
          name="description"
          content="Falcons Dynamic is a dynamic company that is into the business of providing solutions to the problems of the society."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Card
        title="Mail Validator"
        extra={
          <Space>
            <Button
              onClick={() => {
                getContact();
              }}
              size="small"
              icon={<RetweetOutlined />}
            >
              Refresh
            </Button>
            <Button
              onClick={() => {
                setOpenModal(true);
              }}
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
          size="small"
          loading={isValidatorContactLoading}
          dataSource={validatorContacts}
          columns={columns}
        />

        <Modal
          title="Add New Validator"
          open={openModal}
          onCancel={() => {
            setOpenModal(false);
            form.resetFields();
          }}
          footer={null}
          width={600}
        >
          <Form layout="vertical" form={form} onFinish={onFinish}>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Form.Item
                  label={"Validation Contact Group Name"}
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Please Enter Group Name",
                    },
                  ]}
                >
                  <Input placeholder="Validation Contact Group Name" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  label={"Validation Contacts (.xlsx file) only"}
                  name="files"
                  rules={[
                    {
                      required: true,
                      message: "Please Enter Contacts",
                    },
                  ]}
                >
                  <Dragger {...props} accept={[".xlsx"]}>
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
                disabled={isValidatorContactLoading}
                onClick={() => {
                  setOpenModal(false);
                  form.resetFields();
                }}
                icon={<CloseCircleOutlined />}
                danger
              >
                Cancel
              </Button>
              <Button
                loading={isValidatorContactLoading}
                disabled={isValidatorContactLoading}
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
    </>
  );
};
Validator.Layout = Layouts;

export default Validator;
