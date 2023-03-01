import {
  BlockOutlined,
  FileDoneOutlined,
  IdcardOutlined,
  KeyOutlined,
  LockOutlined,
  MacCommandOutlined,
  NodeExpandOutlined,
  UserOutlined,
  WindowsOutlined,
} from "@ant-design/icons";
import { Space, Typography } from "antd";
import Link from "next/link";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

const collapsedItem = [
  {
    key: "1",
    icon: <WindowsOutlined />,
    label: <Link href="/dashboard">Dashboard</Link>,
  },

  {
    key: "2",
    icon: <MailOutlined />,
    label: <Link href="/validator">Mail Validator</Link>,
  },
  {
    key: "3",
    icon: <IdcardOutlined />,
    label: <Link href="/contact">Contact</Link>,
  },

  {
    key: "4",
    icon: <BlockOutlined />,
    label: <Link href="/smtp">Smtp</Link>,
  },
  {
    key: "5",
    icon: <FileDoneOutlined />,
    label: <Link href="/asset">Asset</Link>,
  },
  {
    key: "6",
    icon: <LockOutlined />,
    label: <Link href="/proxy">Proxy</Link>,
  },

  {
    key: "7",
    icon: <MacCommandOutlined />,
    label: <Link href="/campaign">Campaign</Link>,
  },
  {
    key: "8",
    icon: <NodeExpandOutlined />,
    label: <Link href="/testing">Testing</Link>,
  },
];

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const NextMenu = ({ collapsed }) => {
  const items = [
    getItem(
      "Main",
      "grp",
      null,
      [
        getItem(
          <Space>
            <WindowsOutlined />
            <Link href="/dashboard">Dashboard</Link>
          </Space>,
          "dashboard"
        ),
      ],
      "group"
    ),
    getItem(
      "Contacts",
      "grp",
      null,
      [
        getItem(
          <Space>
            <MailOutlined />
            <Link href="/validator">Mail Validator</Link>
          </Space>,
          "validator"
        ),
        getItem(
          <Space>
            <IdcardOutlined />
            <Link href="/contact">Contact</Link>
          </Space>,
          "contact"
        ),
      ],
      "group"
    ),
    getItem(
      "Assets",
      "grp",
      null,
      [
        getItem(
          <Space>
            <BlockOutlined />
            <Link href="/smtp">Smtp</Link>
          </Space>,
          "smtp"
        ),
        getItem(
          <Space>
            <FileDoneOutlined />
            <Link href="/asset">Asset</Link>
          </Space>,
          "asset"
        ),
        getItem(
          <Space>
            <LockOutlined />
            <Link href="/proxy">Proxy</Link>
          </Space>,
          "proxy"
        ),
      ],
      "group"
    ),
    getItem(
      "Sending",
      "grp",
      null,
      [
        getItem(
          <Space>
            <MacCommandOutlined />
            <Link href="/campaign">Camapign</Link>
          </Space>,
          "campaign"
        ),
        getItem(
          <Space>
            <NodeExpandOutlined />
            <Link href="/testing">Testing</Link>
          </Space>,
          "testing"
        ),
      ],
      "group"
    ),
  ];

  const onClick = (e) => {
    console.log("click ", e);
  };
  return (
    <Menu
      onClick={onClick}
      style={
        {
          // width: 256,
        }
      }
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={collapsed ? collapsedItem : items}
    />
  );
};
export default NextMenu;
