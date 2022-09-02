import React, { useState, useEffect } from 'react'
import { Layout, Input, Form, Button, Divider, message, notification } from 'antd'
import { useNavigate } from 'react-router-dom'
import './Index.less'
import {
  UserOutlined,
  UnlockOutlined
} from '@ant-design/icons';


const Login: React.FC<{}> = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      navigate('/Home')
    }, 1000)
  }

  useEffect(() => {
    notification.open({
      message: '欢迎使用后台管理平台',
      duration: null,
      description: '账号 admin(管理员) 其他(游客) 密码随意'
    })

    return function cleanup() {
      notification.destroy()
    };
  });


  return (
    <Layout className='login'>
      <div className='model'>
        <div className='login-form'>
          <h3>后台管理系统</h3>
          <Divider />
          <Form onFinish={handleSubmit}>
            <Form.Item name="username" rules={[{ required: true, message: '请输入用户名!' }]}>
              <Input
                allowClear
                prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder='用户名'
              />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: '请输入密码!' }]}>
              <Input
                allowClear
                prefix={<UnlockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                type='password'
                placeholder='密码'
              />
            </Form.Item>
            <Form.Item>
              <Button
                type='primary'
                htmlType='submit'
                className='login-form-button'
                loading={loading}>
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Layout>
  )
}

// withRouter=>render时会把match, location和history传入props
// export default withRouter((Login))
export default Login
