import { AuthContext } from "@/contexts/AuthContext";
import Fetch from "@/utils/axios";
import { Layout, Spin, theme } from "antd";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { NextHeader } from "./partials/NextHeader";
import NextSider from "./partials/NextSider";
const { Content } = Layout;
const Layouts = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const Router = useRouter();
  const { user, setUser, apploading, setApploAding } = useContext(AuthContext);

  useEffect(() => {
    setApploAding(true);
    const checkAuth = async () => {
      try {
        const result = await Fetch.get("auth/me");
        setUser(result.data);
        setApploAding(false);
      } catch (err) {
        console.log(err.response);
        Router.push("/login");
      }
    };
    checkAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Router.pathname]);

  if (user === null) {
    return (
      <Content
        style={{
          height: "100vh",
          width: "100wh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Spin tip="Sit tight, we are initializing the app to be ready..."></Spin>
      </Content>
    );
  }

  return (
    <Layout>
      <NextSider collapsed={collapsed} />
      <Layout className="site-layout">
        <NextHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content
          style={{
            padding: 24,
            minHeight: 280,
          }}
        >
          {apploading ? (
            <div
              style={{
                height: "100%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Spin tip="Sit tight, loading the page.."></Spin>
            </div>
          ) : (
            children
          )}
        </Content>
      </Layout>
    </Layout>
  );
};
export default Layouts;
