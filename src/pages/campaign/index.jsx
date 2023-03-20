import { CamapignContext } from "@/contexts/CampaignContext";
import Layouts from "@/layouts/index";
import {
  CheckCircleOutlined,
  DeleteOutlined,
  DownOutlined,
  EditOutlined,
  PauseOutlined,
  PlusCircleOutlined,
  RetweetOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  Dropdown,
  Menu,
  Popconfirm,
  Space,
  Table,
  Tag,
  Tooltip,
} from "antd";
import Head from "next/head";
import Link from "next/link";
import { useContext, useEffect } from "react";

const Campaign = () => {
  const {
    getCampaign,
    campaign,
    isCampaignLoading,
    deleteCampaign,
    updateCampaignStatus,
    deleteRestCampaign,
  } = useContext(CamapignContext);

  useEffect(() => {
    getCampaign();
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
      title: "Bot Id",
      dataIndex: "botId",
      key: "botId",
    },
    {
      title: "Contact",
      dataIndex: "contactGroupName",
      key: "contactGroupName",
    },
    {
      title: "Smtp",
      dataIndex: "smtpGroupName",
      key: "smtpGroupName",
    },
    {
      title: "Asset",
      dataIndex: "assetGroupName",
      key: "assetGroupName",
    },
    {
      title: "Total Contact",
      dataIndex: "count",
      key: "count",
      render: (count, record) => <Tag color="blue">{count} </Tag>,
    },
    {
      title: "status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag
          color={
            status === "active"
              ? "green"
              : status === "pending"
              ? "red"
              : "yellow"
          }
        >
          {status}
        </Tag>
      ),
    },
    {
      title: "Pending",
      dataIndex: "pending",
      key: "pending",
      render: (pending) => (
        <Tag color={pending === 0 ? "green" : "red"}>{pending}</Tag>
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
                <Tooltip title="Edit">
                  <Link href={`/campaign/edit/${record?._id}`}>
                    <Button type="ghost" size="small" icon={<EditOutlined />}>
                      Edit
                    </Button>
                  </Link>
                </Tooltip>
              </Menu.Item>
              <Menu.Item>
                <Tooltip title="Status Change">
                  <Popconfirm
                    title="Are you sure？"
                    onConfirm={() => {
                      updateCampaignStatus({
                        id: record?._id,
                        status: "active",
                      });
                    }}
                  >
                    <Button
                      type="ghost"
                      size="small"
                      icon={<CheckCircleOutlined />}
                    >
                      Active
                    </Button>
                  </Popconfirm>
                </Tooltip>
              </Menu.Item>
              <Menu.Item>
                <Tooltip title="Start Validator">
                  <Popconfirm
                    title="Are you sure？"
                    onConfirm={() => {
                      updateCampaignStatus({
                        id: record?._id,
                        status: "paused",
                      });
                    }}
                  >
                    <Button type="ghost" size="small" icon={<PauseOutlined />}>
                      Pause
                    </Button>
                  </Popconfirm>
                </Tooltip>
              </Menu.Item>

              <Menu.Item>
                <Tooltip title="Start Validator">
                  <Popconfirm
                    title="Are you sure？"
                    onConfirm={() => deleteCampaign(record?._id)}
                  >
                    <Button
                      disabled={record?.status === "active"}
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
    <>
      <Head>
        <title>Falcon Dynamic || Campaign</title>
        <meta
          name="description"
          content="Falcons Dynamic is a dynamic company that is into the business of providing solutions to the problems of the society."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Card
        title="Campaign"
        extra={
          <Space>
            <Popconfirm
              title="Are you sure？"
              onConfirm={() => {
                deleteRestCampaign();
              }}
            >
              <Button size="small" danger icon={<DeleteOutlined />}>
                Delete All
              </Button>
            </Popconfirm>

            <Button
              disabled={isCampaignLoading}
              loading={isCampaignLoading}
              onClick={() => {
                getCampaign();
              }}
              size="small"
              icon={<RetweetOutlined />}
            >
              Refresh
            </Button>

            <Link href="/campaign/add-campaign">
              <Button icon={<PlusCircleOutlined />} type="primary" size="small">
                Add Campaign
              </Button>
            </Link>
          </Space>
        }
      >
        <Table
          loading={isCampaignLoading}
          size="small"
          dataSource={campaign}
          columns={columns}
        />
      </Card>
    </>
  );
};

Campaign.Layout = Layouts;
export default Campaign;
