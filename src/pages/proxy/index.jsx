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
  Dropdown,
  Menu,
  Tooltip,
  Tag,
} from "antd";
import {
  CloseCircleOutlined,
  DeleteOutlined,
  DownOutlined,
  PlusCircleOutlined,
  RetweetOutlined,
  RightCircleOutlined,
} from "@ant-design/icons";

import { ProxyContext } from "@/contexts/ProxyContext";

const Proxy = () => {
  const {
    getProxy,
    isProxyLoading,
    addProxy,
    proxy,
    deleteProxy,
    addMoreProxy,
  } = useContext(ProxyContext);
  const [form] = Form.useForm();
  const [form2] = Form.useForm();
  const [openModal, setOpenModal] = useState(false);
  const [addMoreModal, setAddMoreModal] = useState(false);
  const [proxyId, setProxyId] = useState(null);

  const onFinish = (values) => {
    addProxy(values, setOpenModal);
  };

  const onFinish2 = (values) => {
    addMoreProxy(
      {
        ...values,
        id: proxyId,
      },
      form2,
      setAddMoreModal
    );
  };

  useEffect(() => {
    getProxy();
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
      title: "Total Proxy",
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
                <Tooltip title="Add More">
                  <Button
                    onClick={() => {
                      setProxyId(record._id);
                      setAddMoreModal(true);
                    }}
                    style={{ width: "100%", textAlign: "left" }}
                    type="text"
                    size="small"
                    icon={<PlusCircleOutlined />}
                  >
                    Add More
                  </Button>
                </Tooltip>
              </Menu.Item>
              <Menu.Item>
                <Tooltip title="Delete">
                  <Popconfirm
                    title="Are you sure？"
                    onConfirm={() => deleteProxy(record._id)}
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

  return (
    <Card
      title={"Proxy"}
      extra={
        <Space>
          <Button
            loading={isProxyLoading}
            disabled={isProxyLoading}
            onClick={() => getProxy()}
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
        loading={isProxyLoading}
        size="small"
        dataSource={proxy?.proxyGroup}
        columns={columns}
      />

      <Modal
        open={openModal}
        onCancel={() => {
          setOpenModal(false);
          form.resetFields();
        }}
        title={"Add Proxy Group"}
        footer={null}
        width={600}
      >
        <Form layout="vertical" form={form} onFinish={onFinish}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Form.Item
                label={"Proxy Group Name"}
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please Enter Group Name",
                  },
                ]}
              >
                <Input placeholder="Proxy Group Name" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label={"Proxies"}
                name="proxies"
                rules={[
                  {
                    required: true,
                    message: "Please Enter Contacts",
                  },
                ]}
              >
                <Input.TextArea
                  placeholder="Enter Proxies"
                  autoSize={{ minRows: 10, maxRows: 30 }}
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
            <Button
              loading={isProxyLoading}
              disabled={isProxyLoading}
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
              loading={isProxyLoading}
              disabled={isProxyLoading}
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
          form2.resetFields();
          setProxyId(null);
        }}
        title={"More Add Proxy "}
        footer={null}
        width={600}
      >
        <Form layout="vertical" form={form2} onFinish={onFinish2}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Form.Item
                label={"Proxies"}
                name="proxies"
                rules={[
                  {
                    required: true,
                    message: "Please Enter Contacts",
                  },
                ]}
              >
                <Input.TextArea
                  placeholder="Enter Proxies"
                  autoSize={{ minRows: 10, maxRows: 30 }}
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
            <Button
              loading={isProxyLoading}
              disabled={isProxyLoading}
              onClick={() => {
                setAddMoreModal(false);
                form2.resetFields();
                setProxyId(null);
              }}
              icon={<CloseCircleOutlined />}
              danger
            >
              Cancel
            </Button>
            <Button
              loading={isProxyLoading}
              disabled={isProxyLoading}
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

Proxy.Layout = Layouts;
export default Proxy;
