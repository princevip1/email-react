import { Col, Form, InputNumber, Radio, Select, Switch } from "antd";

const { TextArea } = Input;
export const FormInput = ({ label, name, span = 24, ...rest }) => {
  return (
    <Col span={span}>
      <Form.Item name={name} label={label} {...rest}>
        <Input {...rest} />
      </Form.Item>
    </Col>
  );
};

export const FormSelect = ({ label, name, span = 24, ...rest }) => {
  return (
    <Col span={span}>
      <Form.Item name={name} label={label} {...rest}>
        <Select {...rest} />
      </Form.Item>
    </Col>
  );
};

export const FormTextArea = ({ label, name, span = 24, ...rest }) => {
  return (
    <Col span={span}>
      <Form.Item name={name} label={label} {...rest}>
        <TextArea {...rest} />
      </Form.Item>
    </Col>
  );
};

export const FormCheckbox = ({ label, name, span = 24, ...rest }) => {
  return (
    <Col span={span}>
      <Form.Item name={name} label={label} {...rest}>
        <Checkbox {...rest} />
      </Form.Item>
    </Col>
  );
};

export const FormRadio = ({ label, name, span = 24, ...rest }) => {
  return (
    <Col span={span}>
      <Form.Item name={name} label={label} {...rest}>
        <Radio {...rest} />
      </Form.Item>
    </Col>
  );
};

export const FormSwitch = ({ label, name, span = 24, ...rest }) => {
  return (
    <Col span={span}>
      <Form.Item name={name} label={label} {...rest}>
        <Switch {...rest} />
      </Form.Item>
    </Col>
  );
};

export const FormNumberInput = ({ label, name, span = 24, ...rest }) => {
  return (
    <Col span={span}>
      <Form.Item name={name} label={label} {...rest}>
        <InputNumber {...rest} />
      </Form.Item>
    </Col>
  );
};
