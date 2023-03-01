import { notification } from "antd";

const HandleError = (data) => {
  if (data) {
    if (data.message) {
      notification.error({ message: data.message });
    } else {
      const errors = Object.values(data);
      errors.forEach((error) => {
        notification.error({ message: error });
      });
    }
  }


};

export default HandleError;
