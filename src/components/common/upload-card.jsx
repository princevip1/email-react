import { Button, Card, Progress, Space, Typography } from "antd";
import { DownOutlined, CloseOutlined } from "@ant-design/icons";
import { useContext, useState } from "react";
import { ContactContaxt } from "@/contexts/ContactContaxt";
export const UploadCard = () => {
  const { uploading } = useContext(ContactContaxt);
  const [open, setOpen] = useState(true);

  const bytesToSize = (bytes) => {
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    if (bytes == 0) return "0 Byte";
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];
  };

  const files = [
    {
      name: "contacts.xlsx",
      size: 1024,
      percent: 50,
    },
  ];
  return (
    <Card
      style={styles.container}
      hidden={!uploading}
      title={`Uploading Contacts`}
      size="small"
      bodyStyle={{ padding: open ? 16 : 0 }}
      extra={
        <Space>
          <Button
            type="text"
            size="small"
            icon={<DownOutlined />}
            onClick={() => setOpen(!open)}
          />
          <Button type="text" size="small" icon={<CloseOutlined />} />
        </Space>
      }
    >
      {open && (
        <>
          {files.map((file, i) => (
            <div
              key={i}
              style={{
                overflow: "hidden",
              }}
            >
              <Typography.Text
                style={{
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                }}
              >
                {file.name}
              </Typography.Text>
              <br />
              <Typography.Text>{bytesToSize(file.size)}</Typography.Text>
              <Progress percent={file.percent} showInfo={false} />
            </div>
          ))}
        </>
      )}
    </Card>
  );
};

const styles = {
  container: {
    backgroundColor: "white",
    border: "1px solid #e8e8e8",
    zIndex: 99,
    display: "block",
    border: "none",
    position: "fixed",
    width: "384px",
    height: "auto",
    boxShadow: "none",
    minHeight: "40px",
    insetInlineEnd: "24px",
    insetBlockEnd: "48px",
    borderRadius: "8px",
  },
  content: {
    overflow: "hidden",
    borderRadius: "8px",
  },
  header: {
    backgroundColor: "#0E1629",
  },
  title: {
    fontSize: "14px",
    lineHeight: "20px",
  },
};
