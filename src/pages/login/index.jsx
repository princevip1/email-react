import {
  Button,
  Card,
  Form,
  Image,
  Input,
  Layout,
  Space,
  Spin,
  Typography,
} from "antd";
import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";

const { Text } = Typography;
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import Link from "next/link";
import Head from "next/head";
import { AuthContext } from "@/contexts/AuthContext";
import Fetch from "@/utils/axios";
const { Content } = Layout;

const Login = () => {
  const Router = useRouter();
  const { login, isLoading, setUser, setApploAding, user, appLoading } =
    useContext(AuthContext);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    login(values);
  };

  useEffect(() => {
    setApploAding(true);
    const checkAuth = async () => {
      try {
        const result = await Fetch.get("auth/me");
        console.log("result", result);
        setApploAding(false);
        setUser(result?.data?.data);
        Router.push("/dashboard");
      } catch (err) {
        localStorage.removeItem("authToken");
        setApploAding(false);
        setUser(null);
        console.log(err?.response?.data);
      }
    };
    checkAuth();
  }, []);

  if (user) {
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
  } else {
    return (
      <div>
        <Head>
          <title>Falcon Dynamic || Login</title>
          <meta
            name="description"
            content="Falcons Dynamic is a dynamic company that is into the business of providing solutions to the problems of the society."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <Content
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              backgroundColor: "#f5f5f5",
            }}
          >
            {/* <Image
              width={200}
              src="/logo.png"
              alt="logo"
              style={{ marginBottom: 20 }}
              preview={false}
            /> */}
            {/* <Space
              style={{
                flexDirection: "column",
                marginBottom: 20,
              }}
            >
              <Text style={{ color: "#000", fontSize: 25 }} align={"middle"}>
                Sign In
              </Text>
              <Text
                style={{
                  color: "#000",
                }}
              >
                Welcome back, you’ve been missed!
              </Text>
            </Space> */}
            <Card
              className="login-card"
              size="small"
              style={{ padding: 20, width: 400 }}
            >
              <Space
                style={{
                  flexDirection: "column",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  width={150}
                  src="/logo.png"
                  alt="logo"
                  style={{ margin: 10 }}
                  preview={false}
                />
              </Space>
              <Form
                layout={"vertical"}
                form={form}
                name="basic"
                onFinish={onFinish}
                initialValues={{
                  email: "email@email.com",
                  password: "12345678",
                }}
              >
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                  ]}
                >
                  <Input
                    prefix={
                      <MailOutlined style={{ marginRight: 5, marginLeft: 5 }} />
                    }
                    placeholder="Enter Email"
                  />
                </Form.Item>
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password
                    prefix={
                      <LockOutlined style={{ marginRight: 5, marginLeft: 5 }} />
                    }
                    placeholder="Enter Password"
                  />
                </Form.Item>
                <Button
                  style={{ width: "100%" }}
                  htmlType="submit"
                  type="primary"
                  loading={isLoading}
                >
                  Login
                </Button>
              </Form>
              {/* <Space
                style={{
                  width: "100%",
                  justifyContent: "center",
                  marginTop: 20,
                }}
              >
                <span>You Dont have any account?</span>
                <Link href="/#">Sign Up</Link>
              </Space> */}
            </Card>
          </Content>
        </main>
      </div>
    );
  }
};

export default Login;
