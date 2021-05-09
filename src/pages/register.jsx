import React from "react";
import { Form, Input, InputNumber, Button, Select } from "antd";
import {
  LikeOutlined,
  UserOutlined,
  MailOutlined,
  LockOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import "../styles/index.css";

// const Register = () =>{
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 20, offset: 7 },
  },
};
const Demo = () => {
  const onFinish = (values) => {
    if (values.intrests.length !== 0) {
      values.intrests = [values.intrest, ...values.intrests];
    } else {
      values.intrests = [values.intrest];
    }
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      className="form"
    >
      <Form.Item
        label="Name"
        name="name"
        className="login-form"
        rules={[
          {
            required: true,
            message: "Please input your name!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Name"
        />
      </Form.Item>
      <Form.Item
        label="Roll No."
        name="roll_no"
        className="login-form"
        rules={[
          {
            required: true,
            message: "Please input your roll number!",
          },
        ]}
      >
        <InputNumber
          style={{ width: "100%" }}
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Roll Number"
        />
      </Form.Item>
      <Form.Item
        label="E-mail"
        name="email"
        className="login-form"
        rules={[
          {
            type: "email",
            required: true,
            message: "Please input your email!",
          },
        ]}
      >
        <Input
          prefix={<MailOutlined className="site-form-item-icon" />}
          placeholder="Email"
        />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        className="login-form"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item label="Branch" className="login-form" required="true">
        <Select>
          <Select.Option value="Computer Science and Engineering">
            Computer Science and Engineering
          </Select.Option>
          <Select.Option value="Electronics and Communication Engineering">
            Electronics and Communication Engineering
          </Select.Option>
          <Select.Option value="Chemical Engineering">
            Chemical Engineering
          </Select.Option>
          <Select.Option value="Mechanical Engineering">
            Mechanical Engineering
          </Select.Option>
          <Select.Option value="Civil Engineering">
            Civil Engineering
          </Select.Option>
          <Select.Option value="Biotechnology">Biotechnology</Select.Option>
          <Select.Option value="Electrical Engineering">
            Electrical Engineering
          </Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="intrest"
        label="Intrests"
        className="login-form"
        rules={[
          {
            message: "Please let us know about your intrests!",
          },
        ]}
      >
        <Input
          prefix={<LikeOutlined className="site-form-item-icon" />}
          placeholder="What are your intrests?"
        />
      </Form.Item>
      <Form.List name="intrests">
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map((field, index) => (
              <Form.Item
                {...formItemLayoutWithOutLabel}
                label=""
                required={false}
                key={field.key}
              >
                <div className={index === 0 ? "added-div" : "added-div-1"}>
                  <Form.Item
                    {...field}
                    validateTrigger={["onChange", "onBlur"]}
                    rules={[
                      {
                        required: true,
                        whitespace: true,
                        message: "Please input intrest or delete this field.",
                      },
                    ]}
                    className="added-field"
                  >
                    <Input
                      placeholder="Another hobby"
                      style={{ width: "70%" }}
                    />
                  </Form.Item>
                  <MinusCircleOutlined
                    className="dynamic-delete-button"
                    onClick={() => remove(field.name)}
                  />
                </div>
              </Form.Item>
            ))}
            <Form.Item className="addBtn">
              <Button
                type="dashed"
                onClick={() => add()}
                style={{ width: "60%" }}
                icon={<PlusOutlined />}
              >
                Add field
              </Button>
              <Form.ErrorList errors={errors} />
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item
        label="Why Thinkbots"
        name="why_joining"
        className="login-form"
        rules={[
          {
            required: true,
            message: "Why you want to join!",
          },
        ]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" className="sub-btn">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Demo;
