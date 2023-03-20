import React, { useContext, useEffect, useState } from "react";
import Layouts from "@/layouts/index";
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
import { BASE_URL } from "@/utils/api";
import Link from "next/link";
import Head from "next/head";
const { Dragger } = Upload;

const Contact = () => {
  const { getContact, isContactLoading, addContact, contacts, deleteContact } =
    useContext(ContactContaxt);
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
      render: (text, record, index) => {
        return index + 1;
      },
    },
    {
      title: "Name",
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
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item>
                <Tooltip title="Delete">
                  <Link
                    href={`${BASE_URL}/download/contact/${record._id}`}
                    target="_blank"
                  >
                    <Button
                      style={{ width: "100%", textAlign: "left" }}
                      type="text"
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
                    onConfirm={() => deleteContact(record._id)}
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
    <>
      <Head>
        <title>Falcon Dynamic || Contact</title>
        <meta
          name="description"
          content="Falcons Dynamic is a dynamic company that is into the business of providing solutions to the problems of the society."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Card
        title={"Contact"}
        extra={
          <Space>
            <Button
              onClick={() => getContact()}
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
          loading={isContactLoading}
          size="small"
          dataSource={contacts}
          columns={columns}
        />

        <Modal
          open={openModal}
          onCancel={() => {
            setOpenModal(false);
            form.resetFields();
          }}
          title={"Add Contact"}
          footer={null}
          width={600}
          on
        >
          <Form layout="vertical" form={form} onFinish={onFinish}>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Form.Item
                  label={"Contact Group Name"}
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Please Enter Group Name",
                    },
                  ]}
                >
                  <Input placeholder="Contact Group Name" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  label={"Contacts"}
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
                disabled={isContactLoading}
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
                loading={isContactLoading}
                disabled={isContactLoading}
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

Contact.Layout = Layouts;
export default Contact;
