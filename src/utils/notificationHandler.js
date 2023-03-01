import { message } from "antd";

const NotoficationHandler = (data, type = "success") => {
  message[type](data?.message ? data?.message : "Something went wrong Please try again");
};

export default NotoficationHandler;
