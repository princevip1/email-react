import { Image, Layout, Menu, Typography } from "antd";
import NextMenu from "./NextMenu";
const { Sider } = Layout;

export default function NextSider({ collapsed }) {
  return (
    <Sider
      style={{
        height: "100vh",
        position: "sticky",
        top: 0,
      }}
      theme={"light"}
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      <div
        style={{
          height: 64,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography.Title level={2}>
          <span style={{ color: "#1890ff" }}>e</span> {collapsed ? "" : "Mail"}
        </Typography.Title>
      </div>
      {/* <Image
        width={200}
        src="https://logos-world.net/wp-content/uploads/2022/05/Zoho-Mail-Logo.png"
        alt="logo"
        style={{ marginBottom: 20 }}
        preview={false}
      /> */}
      <NextMenu collapsed={collapsed} />
      {/* <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={NextMenu}
      /> */}
    </Sider>
  );
}
