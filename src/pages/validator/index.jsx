import Layouts from "@/layouts/index";
import {
  ArrowRightOutlined,
  DeleteOutlined,
  DownloadOutlined,
  DownOutlined,
  InfoCircleOutlined,
  PlusCircleOutlined,
  RightCircleOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  Dropdown,
  Menu,
  Popconfirm,
  Space,
  Table,
  Tooltip,
  Typography,
} from "antd";
import React from "react";

const Validator = () => {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Contact Group",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Total Contact",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Valid Contact",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Invalid Contact",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Status",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: () => (
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item>
                <Tooltip title="Start Validator">
                  <Popconfirm
                    title="Are you sure? Delete this item "
                    onConfirm={() => console.log("first")}
                  >
                    <Button
                      onClick={() => {
                        console.log("first");
                      }}
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
                <Tooltip title="Start Validator">
                  <Popconfirm
                    title="Are you sure？"
                    onConfirm={() => console.log("first")}
                  >
                    <Button
                      onClick={() => {
                        console.log("first");
                      }}
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
                <Tooltip title="Start Validator">
                  <Popconfirm
                    title="Are you sure？"
                    onConfirm={() => console.log("first")}
                  >
                    <Button
                      onClick={() => {
                        console.log("first");
                      }}
                      type="ghost"
                      size="small"
                      icon={<DownloadOutlined />}
                    >
                      Download
                    </Button>
                  </Popconfirm>
                </Tooltip>
              </Menu.Item>
              <Menu.Item>
                <Tooltip title="Start Validator">
                  <Popconfirm
                    title="Are you sure？"
                    onConfirm={() => console.log("first")}
                  >
                    <Button
                      onClick={() => {
                        console.log("first");
                      }}
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
      title="Mail Validator"
      extra={
        <Button size="small" type="primary" icon={<PlusCircleOutlined />}>
          Add New
        </Button>
      }
    >
      <Table dataSource={dataSource} columns={columns} />;
    </Card>
  );
};
Validator.Layout = Layouts;

export default Validator;
