import React from 'react';
import { Button, Checkbox, Form, Input, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import { login } from '../../Services/userApi';

const Login1 = () => {
    const navigate= useNavigate();
    const onFinish = async(values) => {
      console.log(values)
     // login(values.username, values.password);
      //    const response = await login(values.username, values.password);
      //   console.log(response)
      //  localStorage.setItem("access-token", response.data.token);
      //   localStorage.getItem("access-token");
        navigate("/home");
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return(<>
    <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

   

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    > <Space>
 <Button type="primary" htmlType="submit">
        sign in
      </Button>
      <Button onClick={()=>{navigate("/register")}}  >
        sign up
      </Button>
    </Space>
     
    </Form.Item>
  </Form>
    </>)
}
  

export default Login1;