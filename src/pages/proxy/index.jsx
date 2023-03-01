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
  Dropdown,
  Menu,
  Tooltip,
} from "antd";
import {
  CloseCircleOutlined,
  DeleteOutlined,
  DownOutlined,
  InboxOutlined,
  PlusCircleOutlined,
  RetweetOutlined,
  RightCircleOutlined,
} from "@ant-design/icons";

import { ProxyContext } from "@/contexts/ProxyContext";

const Proxy = () => {
  const { getProxy, isProxyLoading, addProxy, proxy, deleteProxy } =
    useContext(ProxyContext);
  const [form] = Form.useForm();
  const [openModal, setOpenModal] = useState(false);

  const onFinish = (values) => {
    addProxy(values, setOpenModal);
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
                  <Popconfirm
                    title="Are you sure？"
                    onConfirm={() => deleteProxy(record._id)}
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
            Reload
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
        onCancel={() => setOpenModal(false)}
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
                <Input placeholder="Contact Group Name" />
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
              onClick={() => setOpenModal(false)}
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
