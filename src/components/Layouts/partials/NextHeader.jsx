import DarkIcon from "@/assets/icons/DarkIcon";
import LightIcon from "@/assets/icons/LightIcon";
import { AuthContext } from "@/contexts/AuthContext";
import { ThemeContext } from "@/themes/ThemeProvider";
import {
  DeleteOutlined,
  DownOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Dropdown,
  Layout,
  Menu,
  Space,
  Switch,
  theme,
} from "antd";
import React, { useContext } from "react";
const { Header } = Layout;

export const NextHeader = ({ collapsed, setCollapsed }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { theme: currentTheme, toggleTheme } = useContext(ThemeContext);
  const { logout } = useContext(AuthContext);
  return (
    <Header
      style={{
        padding: "0 16px",
        background: colorBgContainer,
      }}
    >
      <Space
        style={{
          justifyContent: "space-between",
          display: "flex",
        }}
      >
        {React.createElement(
          collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: "trigger",
            onClick: () => setCollapsed(!collapsed),
          }
        )}

        <Space>
          {/* <Switch
						checkedChildren={<DarkIcon />}
						unCheckedChildren={<LightIcon />}
						onChange={toggleTheme}
						defaultChecked={currentTheme === "dark" ? true : false}
					/> */}
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item>
                  <Button
                    onClick={() => {
                      logout();
                    }}
                    type="text"
                    size="small"
                    danger
                    icon={<LogoutOutlined />}
                  >
                    Logout
                  </Button>
                </Menu.Item>
              </Menu>
            }
            trigger={["click"]}
            arrow
            overlayStyle={{ width: 200 }}
            placement="bottomRight"
          >
            {/* <a onClick={(e) => e.preventDefault()}>
              <Button size="small">
                Action
                <DownOutlined />
              </Button>
            </a> */}
            <Avatar />
          </Dropdown>
        </Space>
      </Space>
    </Header>
  );
};
