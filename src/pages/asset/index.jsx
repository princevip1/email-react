import { AssetContext } from "@/contexts/AssetContext";
import Layouts from "@/layouts/index";
import {
  DeleteOutlined,
  DownOutlined,
  EditOutlined,
  PlusCircleOutlined
} from "@ant-design/icons";
import {
  Button,
  Card,
  Dropdown,
  Menu,
  Popconfirm, Table,
  Tooltip,
  Typography
} from "antd";
import Link from "next/link";
import { useContext, useEffect } from "react";

const Assets = () => {
  const { assets, getAsset, deleteAsset, isAssetLoading } =
    useContext(AssetContext);

  useEffect(() => {
    getAsset();
  }, [1]);

  const columns = [
    {
      title: "Sl",
      dataIndex: "sl",
      key: "sl",
      render: (_, record, index) => (
        <Typography.Text>{index + 1}</Typography.Text>
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Pdf",
      dataIndex: "pdfs",
      key: "images",
      render: (pdfs) => <Typography.Text>1</Typography.Text>,
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
                <Tooltip title="Edit">
                  <Link href={`/asset/edit/${record._id}`}>
                    <Button
                      style={{ width: "100%", textAlign: "left" }}
                      icon={<EditOutlined />}
                      type="ghost"
                      size="small"
                    >
                      Edit
                    </Button>
                  </Link>
                </Tooltip>
              </Menu.Item>

              <Menu.Item>
                <Tooltip title="Delete">
                  <Popconfirm
                    title="Are you sure？"
                    onConfirm={() => deleteAsset(record._id)}
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
      title="Assets"
      extra={
        <Link href="/asset/add-asset">
          <Button size="small" icon={<PlusCircleOutlined />} type="primary">
            Add Asset
          </Button>
        </Link>
      }
    >
      <Table
        loading={isAssetLoading}
        size={"small"}
        dataSource={assets}
        columns={columns}
      />
    </Card>
  );
};

Assets.Layout = Layouts;
export default Assets;
